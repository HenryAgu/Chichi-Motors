import { client } from "@/sanity/lib/client";

export type CarType = {
  type: string;
  slug: {
    _type: "slug";
    current: string;
  };
  name: string;
  brand: string;
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
  filter: "All" | "New" | "Used",
  searchQuery: string,
  selectedBrand: string | null
): Promise<CarType[]> => {
  const typeFilter = filter !== "All" ? `&& type == "${filter}"` : "";
  const brandFilter = selectedBrand ? `&& brand == "${selectedBrand}"` : "";
  const searchFilter = searchQuery
    ? `&& (brand match "*${searchQuery}*" || name match "*${searchQuery}*" || exteriorColor match "*${searchQuery}*" || year match "*${searchQuery}*")`
    : "";

  const query = `*[_type == "car" ${typeFilter} ${brandFilter} ${searchFilter}]{
    type,
    slug,
    name,
    brand,
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
  const query = `*[_type == "car"] | order(brand asc) {
    brand
  }`;

  const cars: { brand: string }[] = await client.fetch(query);
  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  return uniqueBrands;
};

export const fetchCarBySlug = async (slug: string): Promise<CarType | null> => {
  const query = `*[_type == "car" && slug.current == $slug][0]{
    type,
    slug,
    name,
    brand,
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
