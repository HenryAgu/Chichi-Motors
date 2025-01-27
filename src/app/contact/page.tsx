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

interface Socials {
  id: string;
  path: string;
  image: string;
}

const socials: Socials[] = [
  {
    id: crypto.randomUUID(),
    image: "/images/facebook.svg",
    path: "",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/instagram.svg",
    path: "",
  },
  {
    id: crypto.randomUUID(),
    image: "/images/whatsapp.svg",
    path: "",
  },
];

const ContactUs = () => {
  return (
    <main className="min-h-screen flex py-32">
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
          <Link
            href="/contact"
            className="flex items-center gap-x-1 md:gap-x-2 mt-5"
          >
            <span className="text-[32px] md:text-[32px] font-normal text-brand-green-100">
              Contact Us
            </span>
            <Image
              src="/images/green-arrow.svg"
              alt="icon"
              width={20}
              height={20}
              className="md:h-[20px] md:w-[20px] h-6 w-6"
            />
          </Link>
        </div>
      </div>
      <div className="basis-[50%] ml-32">
        <div className="my-14 flex flex-col gap-y-5 tracking-tighter">
          <div className="flex flex-col gap-y-2">
            <p className="text-[42px] font-bold text-brand-green-100">
              How to find Us
            </p>
            <span className="font-normal tracking-tight text-base text-brand-green-100">
              Plot 165 G.U. Ake Road <br /> Beside Owo Filling Station, Eligbolo{" "}
              <br /> Port Harcourt, Rivers State
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-[42px] font-bold text-brand-green-100">
            How to Reach Us
            </p>
            <div className="flex flex-col">
              <span className="font-normal tracking-tight text-base text-brand-green-100">
                E-mail: chichimotors@gmail.com
              </span>
              <span className="font-normal tracking-tight text-base text-brand-green-100">
                Tel: 09029465338
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 md:mt-0">
            <p className="font-normal text-2xl md:text-[32px] tracking-tighter text-brand-green-100">
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
                    className="aspect-square md:h-[32px] md:w-[32px] h-6 w-6"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
