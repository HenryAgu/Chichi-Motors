import React from "react";
import { FiSearch } from "react-icons/fi";

import type { Metadata } from "next";
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
export const metadata: Metadata = {
	title: "Showroom | Chichi Motors",
	description:
		"Discover a wide selection of vehicles in the Chichi Motors showroom. From new to used cars, find your ideal vehicle with ease and book an inspection appointment.",
	keywords: [
		"Chichi Motors showroom",
		"browse cars",
		"used vehicles",
		"new vehicles",
		"car collection",
		"affordable cars",
		"vehicle showroom",
	],
};
type Car = {
	type: "New" | "Used";
	name: string;
	price: string;
	interiorColor: string;
	exteriorColor: string;
	image: string;
  id:string;
};

const cars: Car[] = [
	{
		type: "New",
		name: "Toyota Camry",
		price: "4.5M-6M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "Used",
		name: "Honda Accord",
		price: "4.5M-6M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "New",
		name: "Tesla Model 3",
		price: "4.5M-6M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "Used",
		name: "Ford Mustang",
		price: "4.5M-6M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "New",
		name: "BMW X5",
		price: "8M-10M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "Used",
		name: "Audi A4",
		price: "3M-4M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "New",
		name: "Mercedes-Benz C-Class",
		price: "7M-9M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "Used",
		name: "Chevrolet Camaro",
		price: "5M-6M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
	{
		type: "New",
		name: "Lexus RX",
		price: "9M-11M",
		interiorColor: "Blue",
		exteriorColor: "Black",
		image: "/images/car.png",
		id: crypto.randomUUID(),
	},
];
const ShowRoom = () => {
	return (
		<main className="pt-36 md:px-10 px-[50px]">
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

			<section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pb-12  pt-5 overflow-hidden">
				{cars.map((car) => (
					<Link
						href={`/showroom/${car.id}`}
						key={car.name}
						className="border p-4 rounded-[24px]"
					>
						<Image
							src={car.image}
							alt={car.name}
							width={397}
							height={322}
							className="object-cover mb-4 rounded-[8px] w-full h-[322px]"
						/>
						<div className="flex flex-col gap-y-3">
							<p className="text-[13px] text-[#1E8A45] font-semibold leading-[17.7px]">
								{car.type}
							</p>
							<h2 className="text-lg font-bold leading-[24.51px] text-black">
								{car.name}
							</h2>
							<div className="flex gap-x-4">
								<p className="inline-flex items-center gap-x-2 text-[13px] font-semibold leading-[17.7px] text-[#969696]">
									<span
										className="h-[16px] w-[16px] rounded-full"
										style={{ backgroundColor: car.exteriorColor }}
									/>
									{car.exteriorColor} Exterior
								</p>
								<p className="inline-flex items-center gap-x-2 text-[13px] font-semibold leading-[17.7px] text-[#969696]">
									<span
										className="h-[16px] w-[16px] rounded-full"
										style={{ backgroundColor: car.interiorColor }}
									/>
									{car.interiorColor} Interior
								</p>
							</div>

							<p className="font-bold leading-[32.68px] text-2xl text-[#1E8A45]">
								{car.price}
							</p>
							<button
								type="button"
								className="px-8 py-3 w-full flex items-center justify-center bg-[#1E8A45] rounded-[32px] leading-[32.68px] text-2xl font-bold mt-5 text-white"
							>
								Show Details
							</button>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
};

export default ShowRoom;
