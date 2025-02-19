"use client";
import React, { useState } from "react";
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
import { fetchCars, fetchCarBrands } from "@/sanity/lib/fetchCars";
import { Spinner } from "@/components/spinner";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import Navbar from "@/components/shared/Navbar";

type CarShowProps = {
  limit?: number;
};

const ShowRoom = () => {
  const [filter, setFilter] = useState<"All" | "Foreign Used" | "Nigerian Used">(
			"All",
		);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: carBrands, isLoading: brandsLoading } = useQuery({
    queryKey: ["carBrands"],
    queryFn: fetchCarBrands,
  });

  if (brandsLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size={20} />
      </div>
    );

  return (
			<>
				<Navbar />
				<main className="pt-28 px-5 lg:px-[50px]">
					<section>
						<p className="text-black text-[32px] leading-[43.58px] font-normal mb-14">
							Showroom
						</p>
						<div className="flex items-center justify-start gap-10 flex-col md:flex-row">
							<div className="flex items-center gap-x-2 border-b border-[#969696] px-3.5 py-2.5 w-full md:w-[400px]">
								<input
									placeholder="Search by Name, Brand, or Colour"
									className="w-full text-garage-gray-650 text-sm focus:ring-transparent focus:outline-none"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
								<FiSearch className="text-garage-gray-650 w-[15.24px] h-[15.24px]" />
							</div>

							<div className="flex flex-wrap md:flex-nowrap items-start md:items-center justify-start md:justify-center gap-4 w-full md:w-auto">
								<Button
									variant={filter === "All" ? "default" : "outline"}
									size="sm"
									className="w-fit md:w-auto"
									onClick={() => setFilter("All")}
								>
									All
								</Button>
								<Button
									variant={filter === "Foreign Used" ? "default" : "outline"}
									size="sm"
									className="w-fit md:w-auto"
									onClick={() => setFilter("Foreign Used")}
								>
									Foreign Used
								</Button>
								<Button
									variant={filter === "Nigerian Used" ? "default" : "outline"}
									size="sm"
									className="w-fit md:w-auto"
									onClick={() => setFilter("Nigerian Used")}
								>
									Nigerian Used
								</Button>
								<Select
									onValueChange={(value) => {
										setSelectedBrand(value === "All" ? null : value);
									}}
								>
									<SelectTrigger className="w-fit md:w-[180px]">
										<SelectValue placeholder="Select a Brand" />
									</SelectTrigger>

									<SelectContent>
										<SelectGroup>
											<SelectItem value="All" className="text-[13px]">
												All
											</SelectItem>
											{carBrands?.map((brand, index) => (
												<SelectItem
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={index}
													value={brand}
													className="text-[13px]"
												>
													{brand}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
					</section>
					<CarShow
						filter={filter}
						selectedBrand={selectedBrand}
						searchQuery={searchQuery}
					/>
				</main>
			</>
		);
};

export default ShowRoom;

export function CarShow({
		limit,
		filter,
		selectedBrand,
		searchQuery,
	}: CarShowProps & {
		filter: "All" | "Foreign Used" | "Nigerian Used";
		selectedBrand: string | null;
		searchQuery: string;
	}) {
		const {
			data: cars,
			isLoading,
			error,
		} = useQuery({
			queryKey: ["cars", filter, selectedBrand, searchQuery],
			queryFn: () => fetchCars(filter, searchQuery, selectedBrand),
		});

		if (isLoading)
			return (
				<div className="flex justify-center items-center h-screen">
					<Spinner size={20} />
				</div>
			);

		if (error)
			return (
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
			);

		const filteredCars = cars?.filter((car) => {
			if (selectedBrand === "All" || !selectedBrand) {
				return true;
			}

			// Check if the selected brand exists in the car's brand array
			const carBrands = car.brand.map((b) => b.title);
			if (!carBrands.includes(selectedBrand)) {
				return false;
			}

			if (searchQuery) {
				const lowerCaseQuery = searchQuery.toLowerCase();
				return (
					car.name.toLowerCase().includes(lowerCaseQuery) ||
					carBrands.some((brand) =>
						brand.toLowerCase().includes(lowerCaseQuery),
					) ||
					car.exteriorColor.toLowerCase().includes(lowerCaseQuery) ||
					car.interiorColor.toLowerCase().includes(lowerCaseQuery)
				);
			}

			return true;
		});

		const displayedCars = limit ? filteredCars?.slice(0, limit) : filteredCars;

  return (
    <>
      {displayedCars?.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] md:h-screen">
          <FcCancel className="text-6xl lg:text-9xl" />
          <p className="md:text-lg text-sm font-normal text-brand-green-100 text-center">
            Car not available. <br /> Order via WhatsApp:
            <Link
              href={
                "https://wa.me/+2348033095721?text=Hey,%20I%20would%20like%20to%20place%20an%20order"
              }
              className="underline"
            >
              Click Here
            </Link>
          </p>
        </div>
      ) : (
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-28 pt-5 overflow-hidden">
          {displayedCars?.map((car) => (
            <div
              key={car?.slug?.current}
              className="border p-4 rounded-[24px]"
            >
              <Image
                src={car?.image?.asset?.url}
                alt={car?.name}
                width={397}
                height={322}
                className=" mb-4 rounded-[8px] object-cover w-full h-[240px] lg:h-[322px]"
              />
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-3">
                  <p className="text-[13px] text-brand-green-100 font-semibold leading-[17.7px]">
                    {car?.type}
                  </p>
                  <h2 className="uppercase text-lg font-bold leading-[24.51px] text-black">
                    {car?.year}{" "}
                    {Array.isArray(car?.brand)
                      ? car.brand.map((brand) => brand.title).join(", ")
                      : ""}{" "}
                    {car?.name}
                  </h2>
                </div>
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
                ₦{car?.price}
                </p>
                <Link
                  href={`/showroom/${car?.slug?.current}`}
                  className="px-8 py-3 w-full flex items-center justify-center bg-brand-green-100 rounded-[32px] text-sm md:text-base font-bold mt-5 text-white"
                >
                  Show Details
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
