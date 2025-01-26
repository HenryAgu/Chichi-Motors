import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const Footer = () => {
  return (
    <footer className="bg-brand-green-100 rounded-tl-lg rounded-tr-lg">
      <div className="md:px-[50px] px-5 flex md:flex-row flex-col">
        <div className="basis-[40%] md:border-r flex flex-col border-brand-green-200 pt-16 md:pb-[32px]">
          <div className="md:border-b border-brand-green-200 md:pb-2">
            <Image
              src="/images/location.svg"
              width={50}
              height={50}
              className="h-[50px] w-[50px]"
              alt="icon"
            />
            <p className="text-[32px] md:text-[42px] text-white font-bold mb-2">Find our Store</p>
            <span className="text-base text-white font-normal tracking-tight">
              Plot 165 G.U. Ake Road <br /> Beside Owo Filling Station, Eligbolo
              <br /> Port Harcourt, Rivers State
            </span>
          </div>
          <div className="pt-14 border-b md:border-b-0 border-brand-green-200 pb-5 md:pb-0">
            <p className="text-[32px] md:text-[42px] text-white font-bold mb-2">Contact Us</p>
            <span className="text-base text-white font-normal tracking-tight">
              E-mail: chichimotors@gmail.com <br />
              Tel: 09029465338
            </span>
          </div>
        </div>
        <div className="basis-[60%] pt-16 md:pl-24 pb-[32px] flex flex-col gap-y-12 md:gap-y-[74px]">
          <div className="flex flex-col gap-y-4">
            {navigation.map((item) => (
              <Link
                href={item.path}
                className="font-semibold text-white text-lg tracking-tighter capitalize transition-all duration-200 ease-out hover:underline"
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <Link href="/contact" className="flex items-center gap-x-2">
              <span className="text-[32px] md:text-[42px] font-bold text-white underline">
                Get a Quote Today
              </span>
              <Image src="/images/arrow.svg" alt="icon" width={27} height={27} className="h-[27px] w-[27px]"/>
            </Link>
            <span className="text-base text-white font-normal tracking-tight">
              Leave us a message on WhatsApp
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="font-normal text-[32px] tracking-[3%] text-white">
              Follow our Socials
            </p>
            <div className="flex items-center gap-x-6">
              {socials.map((item) => (
                <Link href={item.path} key={item.id}>
                  <Image
                    src={item.image}
                    alt="icon"
                    width={32}
                    height={32}
                    className="aspect-square h-[32px] w-[32px]"
                  />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-brand-green-200 text-[13px] font-normal">
            © ALL RIGHTS RESERVED, CHICHI MOTORS 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
