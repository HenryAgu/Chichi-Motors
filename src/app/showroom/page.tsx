"use client"
import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/sanity/lib/fetchCars";
import { Spinner } from "@/components/spinner";


type CarShowProps = {
  limit?: number; // Optional limit for the number of cars
};

const ShowRoom = () => {
  return (
    <main className="pt-28 px-5 lg:px-[50px]">
      <section>
        <p className="text-black text-[32px] leading-[43.58px] font-normal mb-14 ">
          Showroom
        </p>
        <div className="flex items-center justify-start gap-10 flex-col md:flex-row">
          <div className="flex items-center gap-x-2 border-b border-[#969696] px-3.5 py-2.5  w-[400px]">
            <input
              placeholder="Search by Name, Brand and Colour"
              className="w-full text-garage-gray-650 text-sm   focus:ring-transparent focus:outline-none "
            />
            <FiSearch className="text-garage-gray-650 w-[15.24px] h-[15.24px]" />
          </div>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto">
            <Button
              variant={"outline"}
              size={"sm"}
              className="w-full md:w-auto"
            >
              All
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              className="w-full md:w-auto"
            >
              Brand New
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              type="button"
              className="w-full md:w-auto"
            >
              Used
            </Button>

            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select a Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="toyota" className="text-[13px]">
                    Toyota
                  </SelectItem>
                  <SelectItem value="lexus" className="text-[13px]">
                    Lexus
                  </SelectItem>
                  <SelectItem value="dodge" className="text-[13px]">
                    Dodge
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
<CarShow/>
    </main>
  );
};

export default ShowRoom;








export const CarShow = ({ limit }: CarShowProps) => {
  const {
    data: cars,
    isLoading,
    error,
  } = useQuery({ queryKey: ["cars"], queryFn: fetchCars });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size={30} />
      </div>
    );

  if (error) return <div>An error occurred</div>;

  // Limit the cars displayed if `limit` is provided
  const displayedCars = limit ? cars?.slice(0, limit) : cars;

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pb-28 pt-5 overflow-hidden">
      {displayedCars?.map((car) => (
        <div key={car?.slug?.current} className="border p-4 rounded-[24px]">
          <Image
            src={car?.image?.asset?.url}
            alt={car?.name}
            width={397}
            height={322}
            className="object-cover mb-4 rounded-[8px] w-full h-[322px]"
          />
          <div className="flex flex-col gap-y-3">
            <p className="text-[13px] text-brand-green-100 font-semibold leading-[17.7px]">
              {car?.type}
            </p>
            <h2 className="text-lg font-bold leading-[24.51px] text-black">
              {car?.name}
            </h2>
            <div className="flex gap-x-4">
              <p className="inline-flex items-center gap-x-2 text-[13px] font-semibold leading-[17.7px] text-[#969696]">
                <span
                  className="h-[16px] w-[16px] rounded-full"
                  style={{ backgroundColor: car?.exteriorColor }}
                />
                {car?.exteriorColor} Exterior
              </p>
              <p className="inline-flex items-center gap-x-2 text-[13px] font-semibold leading-[17.7px] text-[#969696]">
                <span
                  className="h-[16px] w-[16px] rounded-full"
                  style={{ backgroundColor: car?.interiorColor }}
                />
                {car?.interiorColor} Interior
              </p>
            </div>

            <p className="font-bold leading-[32.68px] text-2xl text-brand-green-100">
              {car?.price}
            </p>
            <Link
              href={`/showroom/${car?.slug?.current}`}
              type="button"
              className="px-8 py-3 w-full flex items-center justify-center bg-brand-green-100 rounded-[32px] leading-[32.68px] md:text-xl text-lg  font-bold mt-5 text-white"
            >
              Show Details
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};