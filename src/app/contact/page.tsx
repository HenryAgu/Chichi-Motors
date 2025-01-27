import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Chichi Motors",
  description:
    "Have questions? Contact Chichi Motors to learn more about our vehicles, book inspections, or get assistance. We’re here to help you find your perfect car.",
  keywords: [
    "Chichi Motors contact",
    "car dealership inquiries",
    "vehicle support",
    "contact Chichi Motors",
    "book vehicle inspections",
  ],
};

const ContactUs = () => {
  return     <main className="min-h-screen flex py-32">
  <div className="basis-[50%] border-r border-[#E1E1E1] ml-32">
    <div className="my-14 max-w-[444px] flex flex-col gap-y-5">
      <p className="text-brand-green-100 font-normal text-[32px] tracking-tight">
        Have any Questions or you need to make Enquiries?
      </p>
      <div className="flex flex-col gap-y-3">
        <span className="text-base text-black font-normal tracking-tight">
          Where to find our showroom?
        </span>
        <span className="text-base text-black font-normal tracking-tight">
          Do you import vehicles?
        </span>
        <span className="text-base text-black font-normal tracking-tight">
          How flexible is your pricing?
        </span>
        <span className="text-base text-black font-normal tracking-tight">
          Do you offer test drives?
        </span>
        <span className="text-base text-black font-normal tracking-tight">
          Do you ship to other states?
        </span>
      </div>
      <Link href="/contact" className="flex items-center gap-x-1 md:gap-x-2 mt-5">
          <span className="text-[32px] md:text-[32px] font-normal text-brand-green-100">
          Contact Us
          </span>
          <Image src="/images/green-arrow.svg" alt="icon" width={20} height={20} className="md:h-[20px] md:w-[20px] h-6 w-6"/>
        </Link>
    </div>
  </div>
  <div className="basis-[50%] ml-32">
    <div className="my-14">1</div>
  </div>
</main>;
};

export default ContactUs;
