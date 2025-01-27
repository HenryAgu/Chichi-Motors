"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Navigation {
  title: string;
  path: string;
}

interface Socials {
  id: string;
  path: string;
  image: string;
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
  {
    title: "Contact Us",
    path: "/contact",
  },
];

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
            {isMenuOpen ? (
              <button onClick={handleClose}>
                <Image
                  src="/images/close.svg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px]"
                />
              </button>
            ) : (
              <button
                type="button"
                className="font-aeonikRegular h-fit w-fit"
                onClick={() => setIsMenuOpen(true)}
              >
                <Image
                  src="/images/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px]"
                />
              </button>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`flex flex-col justify-around bg-[#FBFBFB] rounded-bl-lg rounded-br-lg text-white absolute top-[80px] h-screen py-8 w-full right-0 animate-slideDown ${
              isExiting ? "animate-slideUp" : "animate-slideDown"
            }`}
          >
            <div className="mx-5 flex flex-col items-center gap-y-8">
              {navigation.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className="capitalize text-[32px] font-normal hover:font-semibold transition-all duration-200 ease-linear text-brand-green-100 border-b border-[#E1E1E1] pb-2"
                  onClick={handleClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-y-3 mt-5 md:mt-0">
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
        )}
      </div>
    </section>
  );
};

export default Navbar;
