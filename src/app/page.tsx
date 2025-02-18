import GetQuote from "@/components/shared/GetQuote";
import Navbar from "@/components/shared/Navbar";
import Testimonial from "@/components/Testimonial";
import TopSeller from "@/components/TopSeller";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WhyUs {
  header: string;
  content: string;
}

const whyUs: WhyUs[] = [
  {
    header: "Quality you can count on",
    content:
      "Every vehicle we sell is carefully inspected by our certified technicians. We perform a comprehensive multi-point inspection to ensure it meets our high standards for safety, performance, and reliability. You’ll drive off with peace of mind, knowing your car is ready for the road ahead.",
  },
  {
    header: "Transparent Pricing",
    content:
      "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you’ll pay. We believe in clear, upfront pricing so you can make your purchase with confidence, knowing you’re getting great value for your money.",
  },
  {
    header: "Flexible Financing Options",
    content:
      "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you’ll pay. We believe in clear, upfront pricing so you can make your purchase with confidence, knowing you’re getting great value for your money.",
  },
];

const Home = () => {

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 lg:pt-24 bg-white text-black overflow-x-hidden">
        <section className="flex flex-col lg:flex-row items-center gap-y-[42px]  px-5 lg:px-[50px]">
          <div className="md:basis-full lg:basis-[40%] xl:ml-20 flex flex-col gap-y-6">
            <h1
              className="text-black text-[32px] md:text-[42px] font-bold tracking-tighter leading-[44px] md:leading-[50px]"
            >
              Get <h1 className="text-brand-green-100">Affordable</h1>{" "}
              Vehicles <br /> Used & Brand New in <br />{" "}
              <h1 className="text-brand-green-100">Excellent</h1> Condition
            </h1>
            <p
              className="text-base tracking-tighter font-normal text-black lg:max-w-[380px]"
            >
              Browse our collection of vehicles and make your pick, book a
              meeting with us to inspect your desired vehicle.
            </p>
            <Link
              href="/showroom"
              className="bg-brand-green-100 transition-colors duration-200 ease-in-out hover:bg-black py-2.5 px-6 text-sm font-semibold text-white w-fit rounded-lg"
            >
              Browse our Cars
            </Link>
          </div>
          <div className="basis-[60%]">
            <Image
              src="/images/car2.png"
              alt="car"
              width={720}
              height={480}
              className="md:h-[480px] md:w-[720px] h-[254px] w-full"
            />
            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-end md:mr-28 lg:gap-x-6 xl:gap-x-12 md:gap-x-12 mt-12 w-full">
              <Image
                src="/images/kia.svg"
                alt="logo"
                height={20}
                width={85}
                className="h-5 w-fit"
              />
              <Image
                src="/images/Toyota_EU 1.svg"
                alt="logo"
                height={20}
                width={37}
                className="h-5 w-fit"
              />
              <Image
                src="/images/layer1.svg"
                alt="logo"
                height={20}
                width={141.34}
                className="h-5 w-fit"
              />
              <Image
                src="/images/Mercedes-Benz_free_logo.svg"
                alt="logo"
                height={32}
                width={32}
                className="h-[32px] w-fit"
              />
              <Image
                src="/images/Audi-Logo_2016.svg"
                alt="logo"
                height={24}
                width={70}
                className="h-6 w-fit"
              />
              <Image
                src="/images/Group.svg"
                alt="logo"
                height={30}
                width={48}
                className="h-[30px] w-fit"
              />
            </div>
          </div>
        </section>
        {/* Top Seller */}
        <TopSeller />
        {/* Why Buy From Us? */}
        <section className="mb-32 xl:ml-20  px-5 lg:px-[50px]">
          <h3
            className="text-2xl md:text-[32px] font-normal text-black tracking-tighter"
          >
            Why Buy From Us?
          </h3>
          <div className="mt-10 flex flex-col gap-y-12 md:items-center md:flex-row">
            <div className="md:basis-[40%] lg:basis-[50%]">
              <Image
                src="/images/why-us.gif"
                alt="image"
                width={568}
                height={590}
                className="lg:w-[568px] w-full lg:h-[590px] h-[400px] md:aspect-[568/590]"
              />
            </div>
            <div className="md:basis-[60%] lg:basis-[50%] flex flex-col gap-y-10 md:ml-20">
              {whyUs.map((why) => (
                <div
                  className="flex flex-col max-w-[435px] gap-y-3"
                  key={why.header}
                >
                  <h5 className="text-brand-green-100 font-normal text-2xl md:text-[32px] tracking-tighter">
                    {why.header}
                  </h5>
                  <p className="text-sm md:text-base text-black tracking-tighter">
                    {why.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Get Quote */}
        <GetQuote />
        {/* Testimonial */}
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
