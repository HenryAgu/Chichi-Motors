"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 500);
  };
  return (
    <section className="shadow-custom fixed top-0 left-0 right-0 z-50 bg-[#FBFBFB]">
      <div className="flex items-center container mx-auto justify-between py-5 px-5 md:px-[50px]">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={50}
              width={95}
              className="md:h-[50px] h-[40px] w-[80px] md:w-[95px]"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-x-3">
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
        <div className="flex items-center gap-x-6">
          <Link
            href="/contact"
            className="bg-brand-green-100 transition-colors duration-200 ease-in-out hover:bg-black py-2.5 px-6 text-sm font-semibold text-white rounded-lg"
          >
            Contact Us
          </Link>
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <AiOutlineMenu className="text-3xl" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`flex flex-col justify-between bg-brand-green-200 rounded-bl-lg rounded-br-lg text-white absolute top-[-10px] h-screen py-8 w-full right-0 animate-slideDown ${
              isExiting ? "animate-slideUp" : "animate-slideDown"
            }`}
          >
            <div className="flex items-end justify-end px-5">
              <button
                type="button"
                className="font-aeonikRegular h-fit w-fit"
                onClick={handleClose}
              >
                <RiCloseLargeLine className="text-3xl" />
              </button>
            </div>
            <div className="mx-5 flex flex-col gap-y-10">
              {navigation.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className="capitalize text-4xl font-bold hover:font-semibold transition-all duration-200 ease-linear text-white"
                  onClick={handleClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="mx-5">
              <Link
                href="/contact"
                className="flex items-center gap-x-1 md:gap-x-2"
              >
                <span className="text-[32px] md:text-[42px] font-bold text-white underline">
                  Get a Quote Today
                </span>
                <Image
                  src="/images/arrow.svg"
                  alt="icon"
                  width={27}
                  height={27}
                  className="md:h-[27px] md:w-[27px] h-6 w-6"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
