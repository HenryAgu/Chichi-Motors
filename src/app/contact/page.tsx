import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

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

interface Socials {
  id: string;
  path: string;
  image: string;
}

const socials: Socials[] = [
  {
    id: crypto.randomUUID(),
    image: "/images/facebook.svg",
    path: "https://www.facebook.com/profile.php?id=61572553993939",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/instagram.svg",
    path: "https://www.instagram.com/chichi_motors__/",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/whatsapp.svg",
    path: "https://wa.me/2348153270969?text=Hey,%20I%20would%20like%20to%20get%20a%20quotation%20to%20import%20a%20vehicle.",
  },
];

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <main className="lg:min-h-screen flex flex-col md:flex-row gap-x-10 py-16 md:py-32 px-5">
        <div className="basis-[50%] border-b md:border-b-0 md:border-r border-[#E1E1E1] lg:ml-14 xl:ml-32">
          <div className="my-14 max-w-[444px] flex flex-col gap-y-5">
            <p className="text-brand-green-100 font-normal text-2xl lg:text-[32px] lg:leading-[43.58px] tracking-tight">
              Have any Questions or you need to make Enquiries?
            </p>
            <div className="flex flex-col gap-y-1.5 md:gap-y-3">
              <span className="text-sm lg:text-base text-black font-normal tracking-tight">
                Where to find our showroom?
              </span>
              <span className="text-sm lg:text-base text-black font-normal tracking-tight">
                Do you import vehicles?
              </span>
              <span className="text-sm lg:text-base text-black font-normal tracking-tight">
                How flexible is your pricing?
              </span>
              <span className="text-sm lg:text-base text-black font-normal tracking-tight">
                Do you offer test drives?
              </span>
              <span className="text-sm lg:text-base text-black font-normal tracking-tight">
                Do you ship to other states?
              </span>
            </div>
            <Link
              href="tel:+2348033095721"
              className="flex items-center gap-x-1 md:gap-x-2 mt-5"
            >
              <span className="text-2xl lg:text-[32px] font-normal text-brand-green-100">
                Contact Us
              </span>
              <Image
                src="/images/green-arrow.svg"
                alt="icon"
                width={20}
                height={20}
                className="lg:h-[20px] lg:w-[20px] w-4 h-4"
              />
            </Link>
          </div>
        </div>
        <div className="basis-[50%] xl:ml-32 lg:ml-14">
          <div className="my-10 md:my-14 flex flex-col gap-y-5 tracking-tighter">
            <div className="flex flex-col gap-y-2">
              <p className="text-[32px] lg:text-[42px] font-bold text-brand-green-100">
                How to find Us
              </p>
              <span className="font-normal tracking-tight text-sm lg:text-base text-brand-green-100">
              Plot 165 G.U. Ake Road <br /> Blessed Willing Sun Limited
              <br /> Port Harcourt, Rivers State
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-[32px] lg:text-[42px] font-bold text-brand-green-100">
                How to Reach Us
              </p>
              <div className="flex flex-col gap-y-1.5">
                <span className="font-normal tracking-tight flex gap-x-1 items-center text-sm lg:text-base text-brand-green-100">
                  E-mail:
                  <Link
                    href="mailto:info.chichimotors@gmail.com"
                    className="flex items-center gap-x-1"
                  >
                    <span className="underline">info.chichimotors@gmail.com</span>
                    <Image
                      src="/images/green-arrow.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      className="lg:h-[15px] lg:w-[15px] w-2 h-2"
                    />
                  </Link>
                </span>
                <span className="font-normal tracking-tight flex gap-x-1 items-center text-sm lg:text-base text-brand-green-100">
                  Tel:
                  <Link
                    href="tel:+2348033095721"
                    className="flex items-center gap-x-1"
                  >
                    <span className="underline">08033095721</span>
                    <Image
                      src="/images/green-arrow.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      className="lg:h-[15px] lg:w-[15px] w-2 h-2"
                    />
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mt-5 md:mt-0">
              <p className="font-normal text-2xl lg:text-[32px] tracking-tighter text-brand-green-100">
                Follow our Socials
              </p>
              <div className="flex items-center gap-x-3 md:gap-x-6">
                {socials.map((item) => (
                  <Link href={item.path} key={item.id}>
                    <Image
                      src={item.image}
                      alt="icon"
                      width={32}
                      height={32}
                      className="aspect-square lg:h-[32px] lg:w-[32px] h-6 w-6"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
