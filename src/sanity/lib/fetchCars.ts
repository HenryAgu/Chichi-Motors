import { client } from "@/sanity/lib/client";

export type CarType = {
  type: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  name: string;
  price: string;
  interiorColor: string;
  exteriorColor: string;
  image: {
    asset: {
      url: string; // URL for the car image
    };
    alt?: string; // Optional alternative text for the image
  };
};

export const fetchCars = async (): Promise<CarType[]> => {
  const query = `*[_type == "car"]{
    type,
    slug,
    name,
    price,
    interiorColor,
    exteriorColor,
    image{
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
    price,
    interiorColor,
    exteriorColor,
    image{
      asset->{
        url
      },
      alt
    }
  }`;

  const car: CarType | null = await client.fetch(query, { slug });
  return car;
};
