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

const Navbar = () => {
  return (
    <section className="shadow-custom fixed top-0 left-0 right-0 z-50 bg-[#FBFBFB]">
      <div className="flex items-center justify-between py-5 px-[50px]">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={50}
              width={95}
              className="h-[50px] w-[95px]"
            />
          </Link>
          <nav className="flex items-center gap-x-3">
            {navigation.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                className="capitalize text-lg font-normal hover:font-semibold transition-all duration-200 ease-linear text-black"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="">
          <button className="bg-brand-green-100 py-2.5 px-6 text-sm font-semibold text-white rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
