import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Company | Chichi Motors",
  description:
    "Learn more about Chichi Motors, our values, and our commitment to providing excellent service. Trusted dealers of new and used vehicles in excellent condition.",
  keywords: [
    "Chichi Motors company",
    "about Chichi Motors",
    "car dealership",
    "trusted vehicle dealers",
    "used cars",
    "new cars",
  ],
};

const OurCompany = () => {
  return (
    <main className="min-h-screen py-32 lg:pl-32 px-5">
      <h3 className="text-black text-2xl md:text-[32px] tracking-tighter font-normal">
        Our Company
      </h3>
      <div className="mt-5 md:mt-10 flex md:flex-row flex-col gap-y-10">
        <div className="basis-[50%]">
          <Image
            src="/images/gray.png"
            alt="gray"
            width={454}
            height={500}
            className="h-[500px] w-full md:w-[454px]"
          />
        </div>
        <div className="basis-[50%] md:p-5 flex flex-col gap-y-10">
          <div className="flex gap-x-10">
            <div className="flex flex-col">
              <span className="text-brand-green-100 font-bold text-[32px] md:text-[42px] tracking-tighter">
                200+
              </span>
              <span className="text-sm md:text-base text-black font-normal tracking-tight">
                Cars Sold
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-brand-green-100 font-bold text-[32px] md:text-[42px] tracking-tighter">
                10+
              </span>
              <span className="text-sm md:text-base text-black font-normal tracking-tight">
                Car Brands
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-brand-green-100 font-bold text-[32px] md:text-[42px] tracking-tighter">
                7
              </span>
              <span className="text-sm md:text-base text-black font-normal tracking-tight">
                Countries
              </span>
            </div>
          </div>
          <div className="md:max-w-[470px] max-w-full">
            <p className="text-black text-sm md:text-base font-normal">
              At Chi Chi Motors, there’s no high-pressure sales tactics—just
              friendly, knowledgeable staff ready to assist you in finding the
              car that fits your needs and budget. We take the time to listen
              and guide you through every step of the process, ensuring you feel
              confident in your decision.
            </p>
            <p className="text-black text-sm md:text-base font-normal mt-6">
              ### Our Promise to You We’re not just selling cars—we’re building
              lasting relationships. When you buy from us, you’re becoming part
              of the Chi Chi Motors family. We’re here for you long after you
              drive off the lot, with ongoing support, service, and advice.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurCompany;
