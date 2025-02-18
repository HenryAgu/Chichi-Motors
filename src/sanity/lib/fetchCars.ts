import { client } from "@/sanity/lib/client";

export type CarType = {
  type: string;
  slug: {
    _type: "slug";
    current: string;
  };
  name: string;
  brand: Array<{
    title: string;
  }>;
  year: string;
  price: string;
  interiorColor: string;
  exteriorColor: string;
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  images: {
    asset: {
      url: string;
    };
    alt?: string;
  }[];
};

export const fetchCars = async (
  filter: "All" | "Foreign Used" | "Nigerian Used",
  searchQuery: string,
  selectedBrand: string | null
): Promise<CarType[]> => {
  const typeFilter = filter !== "All" ? `&& type == "${filter}"` : "";
  const brandFilter = selectedBrand
    ? `&& references(*[_type == "brand" && title == "${selectedBrand}"]._id)`
    : "";
  const searchFilter = searchQuery
    ? `&& (name match "*${searchQuery}*" || exteriorColor match "*${searchQuery}*" || year match "*${searchQuery}*" || brand[]->title match "*${searchQuery}*")`
    : "";

  const query = `*[_type == "car" ${typeFilter} ${brandFilter} ${searchFilter}] 
    | order(_createdAt desc) { 
    type,
    slug,
    name,
    brand[]->{
      title
    },  
    year,
    price,
    interiorColor,
    exteriorColor,
    image{
      asset->{
        url
      },
      alt
    },
    images[] {
      asset->{
        url
      },
      alt
    }
  }`;

  return await client.fetch(query);
};

export const fetchCarBrands = async (): Promise<string[]> => {
  const query = `*[_type == "brand"] | order(title asc) {
    title
  }`;

  const brands: { title: string }[] = await client.fetch(query);
  return brands.map((brand) => brand.title);
};

export const fetchCarBySlug = async (slug: string): Promise<CarType | null> => {
  const query = `*[_type == "car" && slug.current == $slug][0]{
    type,
    slug,
    name,
    brand[]->{
      title
    },
    year,
    price,
    interiorColor,
    exteriorColor,
    image{
      asset->{
        url
      },
      alt
    },
    images[] {
      asset->{
        url
      },
      alt
    }
  }`;

  const car: CarType | null = await client.fetch(query, { slug });
  return car;
};
