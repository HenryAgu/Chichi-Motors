"use client";
import GetQuote from "@/components/shared/GetQuote";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const images: string[] = [
  "/images/car.png",
  "/images/car2.png",
  "/images/car.png",
  "/images/car2.png",
  "/images/car.png",
  "/images/car.png",
];

export default function Page() {
  const { id } = useParams<{ id?: string }>();
  const [selectedImage, setSelectedImage] = useState<string>("/images/car.png");

  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between md:pt-20 pt-[100px] md:pl-5 md:pb-5 pb-10 gap-y-5 gap-x-20">
        <div className="flex flex-col gap-y-5 w-full justify-center items-start md:basis-[40%] lg:basis-[45%] basis-full lg:px-[30px] px-5 mt-20">
          <div className="md:mx-auto">
            <div className="inline-flex flex-wrap gap-x-2 items-center text-sm font-semibold text-gray-600 lg:mb-10 md:mb-5 mb-5">
              <Link href={"/showroom"} className="hover:text-green-700">
                Showroom
              </Link>
              {" > "}
              <span> Toyota Camry </span>
              {" > "}
              <span> {id} </span>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-sm text-green-700 font-semibold">Used</p>
              <h2 className="lg:text-4xl md:text-[32px] text-2xl font-semibold text-black">
                2015 TOYOTA CAMRY
              </h2>
              <div className="flex gap-x-4">
                <p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-sm text-gray-600">
                  <span className="h-4 w-4 rounded-full bg-blue-900" />
                  Blue Exterior
                </p>
                <p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-sm text-gray-600">
                  <span className="h-4 w-4 rounded-full bg-black" />
                  Black Interior
                </p>
              </div>

              <p className="font-bold lg:text-5xl md:text-4xl text-3xl text-green-700">
                4.5M-6M
              </p>
              <button
                type="button"
                className="px-8 py-3 w-full flex items-center justify-center bg-green-700 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white rounded-full lg:text-2xl md:text-xl text-base font-bold mt-5 text-white"
              >
                Inspect
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:basis-[60%] lg:basis-[55%]">
          {/* Big Image */}
          <Image
            src={selectedImage}
            alt={"Selected car"}
            width={846}
            height={520}
            className="w-[846px] h-[302px] md:h-[520px]"
          />
          <div className="mt-6 flex justify-center md:justify-start gap-x-2 md:gap-x-6">
            {images?.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(image)}
                className={`${
                  selectedImage === image ? "opacity-50" : "opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Image ${idx + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg border md:h-[90px] h-[50px] w-[50px] md:w-[100px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      <GetQuote />
    </main>
  );
}
