"use client";
import GetQuote from "@/components/shared/GetQuote";
import Image from "next/image";
import Link from "next/link";
import { fetchCarBySlug } from "@/sanity/lib/fetchCars";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/spinner";
import { usePathname } from "next/navigation";

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
		enabled: !!slug, // Ensure the query runs only if slug exists
	});

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

	// if (!car) {
	// 	return (
	// 		<div className="flex justify-center items-center min-h-screen">
	// 			<div className="text-center">
	// 				<p className="text-xl font-semibold text-gray-700">
	// 					Car not found
	// 				</p>
	// 				<p className="text-base text-gray-500">
	// 					Please check the URL or try again later.
	// 				</p>
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<main>
			<section className="flex flex-col-reverse md:flex-row items-center justify-between md:pt-20 pt-[100px] md:pl-5 md:pb-5 pb-10 gap-y-5">
				<div className="flex flex-col gap-y-5 w-full justify-center items-start md:basis-[40%] lg:basis-[45%] basis-full px-[30px] md:px-0">
					<div className="md:mx-auto">
						<div className="inline-flex gap-x-2 items-center text-sm font-semibold text-gray-600 lg:mb-10 md:mb-5 mb-5">
							<Link href={"/showroom"} className="hover:text-green-700">
								Showroom
							</Link>
							{" > "}
							<span> {car?.name} </span>
						</div>
						<div className="flex flex-col gap-y-4">
							<p className="text-sm text-green-700 font-semibold">{car?.type}</p>
							<h2 className="lg:text-4xl md:text-2xl text-[32px] font-semibold text-black">
								{car?.name}
							</h2>
							<div className="flex gap-x-4">
								<p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-lg text-gray-600">
									<span className="h-4 w-4 rounded-full bg-blue-900" />
									{car?.exteriorColor} Exterior
								</p>
								<p className="inline-flex items-center gap-x-2 lg:text-lg md:text-base text-lg text-gray-600">
									<span className="h-4 w-4 rounded-full bg-black" />
									{car?.interiorColor} Interior
								</p>
							</div>
							<p className="font-bold lg:text-5xl md:text-4xl text-[42px] text-green-700">
								{car?.price}
							</p>
							<button
								type="button"
								className="px-8 py-3 w-full flex items-center justify-center bg-green-700 rounded-full lg:text-2xl md:text-xl text-2xl font-bold mt-5 text-white"
							>
								Inspect
							</button>
						</div>
					</div>
				</div>
				<Image
		  src={car?.image?.asset?.url || "/path/to/default/image.jpg"}
					alt={car?.name || "Car image"}
					width={750}
					height={550}
					priority={true}
					className="lg:basis-1/2 md:basis-[45%]"
				/>
			</section>

			<GetQuote />
		</main>
	);
}
