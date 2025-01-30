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
      url: string; // URL for the car image
    };
    alt?: string; // Optional alternative text for the image
  };
  images: {
    asset: {
      url: string; // URL for the additional car images
    };
    alt?: string; // Optional alternative text for the additional images
  }[];
};

export const fetchCars = async (type: "All" | "New" | "Used" = "All"): Promise<CarType[]> => {
  const typeFilter = type !== "All" ? `&& type == "${type}"` : "";
  const query = `*[_type == "car" ${typeFilter}]{
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

  const cars: CarType[] = await client.fetch(query);
  return cars;
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
