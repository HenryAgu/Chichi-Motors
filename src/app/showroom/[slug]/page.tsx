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
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

// interface VehicleInfo {
//   title: string;
//   content: string;
// }

// const vehicleInfo: VehicleInfo[] = [
//   { title: "Car Model", content: "Vehicle history" },
//   { title: "Car Model", content: "Vehicle history" },
//   { title: "Manufacture Year", content: "2015" },
//   { title: "Fuel Type", content: "Petrol" },
//   { title: "Drive Type", content: "Vehicle history" },
//   { title: "Car Model", content: "Vehicle history" },
//   { title: "Car Model", content: "Vehicle history" },
//   { title: "Car Model", content: "Vehicle history" },
// ];

// const midpoint = Math.ceil(vehicleInfo.length / 2);
// const firstHalf = vehicleInfo.slice(0, midpoint);
// const secondHalf = vehicleInfo.slice(midpoint);

export default function CarPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
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
          <div className="h-[60vh] flex flex-col gap-y-2 items-center justify-center">
            <FaRegFaceSadTear className="text-6xl lg:text-9xl" />
            <span className="text-base">An error occurred</span>
            <span>
              Go to{" "}
              <Link href="/" className="text-brand-green-100 text-base">
                Home
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between md:pt-20 pt-[100px] w-full lg:pl-5 md:pb-5 pb-10 gap-x-5 gap-y-5">
          <div className="flex flex-col gap-y-5 w-full justify-center md:items-start md:basis-[60%] lg:basis-[45%] basis-full px-5 md:px-0">
            <div className="2xl:ms-32 mt-10 lg:mt-0 xl:ms-10">
              <div className="flex gap-x-2 items-center text-sm font-semibold text-[#969696] lg:mb-10 md:mb-5 mb-5">
                <Link href={"/showroom"} className="hover:text-green-700">
                  Showroom
                </Link>{" "}
                {" > "}
                <span>{car?.type}</span> {" > "}
                <span>
                  {" "}
                  {car?.brand.map((brand) => brand.title).join(", ")}{" "}
                  {car?.name}{" "}
                </span>
              </div>
              <div className="flex flex-col gap-y-4 w-full">
                <p className="text-sm text-brand-green-100 font-bold">
                  {car?.type}
                </p>
                <h2 className="uppercase tracking-tighter lg:text-4xl md:text-2xl max-w-full md:max-w-[400px] text-[32px] font-semibold text-black">
                  {car?.year}{" "}
                  {Array.isArray(car?.brand)
                    ? car.brand.map((brand) => brand.title).join(", ")
                    : ""}{" "}
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
                  ₦{car?.price}
                </p>
                <Link
                  href={`https://wa.me/+2348033095721?text=Hey,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20${car?.brand?.[0]?.title}%20${car?.name}`}
                  target="_blank"
                  className="px-8 py-3 w-full md:max-w-[350px] flex items-center justify-center bg-brand-green-100 rounded-full lg:text-2xl md:text-xl text-base font-bold mt-5 text-white"
                >
                  Inspect
                </Link>
              </div>
              <Link
                href="/showroom"
                className="mt-10 flex gap-x-2 items-center group"
              >
                <FaArrowLeftLong className="text-sm md:text-base duration-200 ease-out transition-all group-hover:text-brand-green-100" />
                <span className="text-sm md:text-base duration-200 ease-out transition-all group-hover:text-brand-green-100">
                  Go back
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col basis-full md:basis-[60%] lg:basis-[55%]">
            {/* Big Image */}
            <div className="">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={car?.name || "Car image"}
                  width={750}
                  height={550}
                  priority={true}
                  className="aspect-[600/420] w-full object-cover"
                />
              )}
            </div>

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
                      className="rounded-lg md:h-[90px] h-[50px] w-[50px] md:w-[100px] object-cover border-[#060606] border"
                    />
                  </button>
                ))}
            </div>
          </div>
        </section>
        {/* <div className="my-20 mx-[50px]">
          <div className="border-[#E1E1E1] border md:max-w-[544px] px-5 py-10 rounded-md flex flex-col gap-y-10">
            <h4 className="text-black font-bold text-lg tracking-tighter">
              Toyota Camry Specifications
            </h4>
            <div className="flex gap-x-10">
              <div>
                {firstHalf.map((item, index) => (
                  <div key={index}>{item.title}</div>
                ))}
              </div>
              <div>
                {secondHalf.map((item, index) => (
                  <div key={index}>{item.title}</div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <GetQuote />
      </main>
    </>
  );
}
