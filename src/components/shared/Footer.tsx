import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Navigation {
  title: string;
  path: string;
}

const navigation: Navigation[] = [
  {
    title: "showroom",
    path: "/showroom",
  },
  {
    title: "Our company",
    path: "/our-company",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-green-100 rounded-tl-lg rounded-tr-lg">
      <div className="px-[50px] flex">
        <div className="basis-[40%] border-r flex flex-col border-brand-green-200 pt-16 pb-5">
          <div className="border-b border-brand-green-200 pb-2">
            <Image
              src="/images/location.svg"
              width={50}
              height={50}
              className="h-[50px] w-[50px]"
              alt="icon"
            />
            <p>Find our Store</p>
            <span>
              Plot 165 G.U. Ake Road <br /> Beside Owo Filling Station, Eligbolo
              <br /> Port Harcourt, Rivers State
            </span>
          </div>
          <div className="pt-14">
            <p>Contact Us</p>
            <span>
              E-mail: chichimotors@gmail.com <br />
              Tel: 09029465338
            </span>
          </div>
        </div>
        <div className="basis-[60%] pt-16 pl-16 pb-5 flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-4">
            {navigation.map((item) => (
              <Link
                href={item.path}
                className="font-bold text-white text-lg tracking-tighter capitalize"
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <Link href="/contact" className="flex items-center gap-x-2">
              <span
                className="text-[42px] font-bold text-white underline"
              >
                Get a Quote Today
              </span>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_123_275)">
                  <path
                    d="M15.75 8.75V12.25H27.2825L7 32.5325L9.4675 35L29.75 14.7175V26.25H33.25V8.75H15.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_123_275">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <span className="text-base text-white font-normal tracking-tight">Leave us a message on WhatsApp</span>
          </div>
          <div className="">1</div>
          <p className="text-brand-green-200 text-[13px] font-normal">© ALL RIGHTS RESERVED, CHICHI MOTORS 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
