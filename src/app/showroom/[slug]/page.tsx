"use client";
import GetQuote from "@/components/shared/GetQuote";
import Image from "next/image";
import Link from "next/link";
import { fetchCarBySlug } from "@/sanity/lib/fetchCars";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/spinner";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";

export default function CarPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // Extract the slug from the URL

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cars", slug],
    queryFn: () => fetchCarBySlug(slug as string),
    enabled: !!slug,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(
    car?.images?.[0]?.asset?.url ?? null
  );

  if (car?.images?.[0]?.asset?.url && !selectedImage) {
    setSelectedImage(car.images[0].asset.url);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size={30} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-500">
            Error loading car page
          </p>
          <p className="text-base text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between md:pt-20 pt-[100px] w-full lg:pl-5 md:pb-5 pb-10 gap-y-5">
          <div className="flex flex-col gap-y-5 w-full justify-center md:items-start md:basis-[40%] lg:basis-[45%] basis-full px-5 md:px-0">
            <div className="xl:ml-32 mt-10 lg:mt-0 md:ml-10">
              <div className="flex gap-x-2 items-center text-sm font-semibold text-[#969696] lg:mb-10 md:mb-5 mb-5">
                <Link href={"/showroom"} className="hover:text-green-700">
                  Showroom
                </Link>{" "}
                {" > "}
                <span>{car?.type}</span> {" > "}
                <span> {car?.name} </span>
              </div>
              <div className="flex flex-col gap-y-4 w-full">
                <p className="text-sm text-brand-green-100 font-bold">
                  {car?.type}
                </p>
                <h2 className="uppercase tracking-tighter lg:text-4xl md:text-2xl text-[32px] font-semibold text-black">
                  {car?.name}
                </h2>
                <div className="flex gap-x-4">
                  <p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-lg text-gray-600">
                    <span
                      className="h-[16px] w-[16px] rounded-full"
                      style={{ backgroundColor: car?.exteriorColor }}
                    />
                    <span className="text-lg text-[#969696] font-normal tracking-tighter">
                      {car?.exteriorColor} Exterior
                    </span>
                  </p>
                  <p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-lg text-gray-600">
                    <span
                      className="h-[16px] w-[16px] rounded-full"
                      style={{ backgroundColor: car?.interiorColor }}
                    />
                    <span className="text-lg text-[#969696] font-normal tracking-tighter">
                      {car?.interiorColor} Interior
                    </span>
                  </p>
                </div>
                <p className="font-bold lg:text-5xl md:text-4xl text-2xl text-brand-green-100">
                  {car?.price}
                </p>
                <Link
                  href={`https://wa.me/2348153270969?text=Hey,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20${car?.name}`}
                  target="_blank"
                  className="px-8 py-3 w-full flex items-center justify-center bg-brand-green-100 rounded-full lg:text-2xl md:text-xl text-base font-bold mt-5 text-white"
                >
                  Inspect
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col basis-full md:basis-[60%] lg:basis-[55%]">
            {/* Big Image */}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={car?.name || "Car image"}
                width={750}
                height={550}
                priority={true}
                className="lg:basis-1/2 md:basis-[45%] w-full h-[302px] object-cover md:object-none lg:h-[520px]"
              />
            )}

            {/* Thumbnail images */}
            <div className="mt-6 flex justify-center md:justify-start gap-x-2 md:gap-x-6">
              {Array.isArray(car?.images) &&
                car?.images.map((image, idx) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(image?.asset?.url)}
                    className={`${
                      selectedImage === image?.asset?.url
                        ? "opacity-50"
                        : "opacity-100"
                    }`}
                  >
                    <Image
                      src={image?.asset?.url}
                      alt={`Image ${idx + 1}`}
                      width={100}
                      height={100}
                      priority={true}
                      className="rounded-lg border md:h-[90px] h-[50px] w-[50px] md:w-[100px] object-cover"
                    />
                  </button>
                ))}
            </div>
          </div>
        </section>

        <GetQuote />
      </main>
    </>
  );
}
