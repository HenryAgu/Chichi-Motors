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
              className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] mb-2"
              alt="icon"
            />
            <p className="text-[32px] md:text-[42px] text-white font-bold mb-2">Find our Store</p>
            <span className="text-sm md:text-base text-white font-normal tracking-tight">
              Plot 165 G.U. Ake Road <br /> Beside Owo Filling Station, Eligbolo
              <br /> Port Harcourt, Rivers State
            </span>
          </div>
          <div className="pt-10 md:pt-14">
            <p className="text-[32px] md:text-[42px] text-white font-bold mb-2">Contact Us</p>
            <span className="text-sm md:text-base text-white font-normal tracking-tight">
              E-mail: chichimotors@gmail.com <br />
              Tel: 09029465338
            </span>
          </div>
        </div>
        <div className="basis-[60%] pt-16 md:pl-24 pb-[32px] flex flex-col gap-y-8 md:gap-y-[80px]">
          <div className="flex flex-col gap-y-2 md:gap-y-4 border-t border-brand-green-200 pt-8 md:pt-0 md:border-t-0">
            {navigation.map((item) => (
              <Link
                href={item.path}
                className="font-semibold text-white text-base md:text-lg tracking-tighter capitalize transition-all duration-200 ease-out hover:underline"
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <Link href="/contact" className="flex items-center gap-x-1 md:gap-x-2">
              <span className="text-[32px] md:text-[42px] font-bold text-white underline">
                Get a Quote Today
              </span>
              <Image src="/images/arrow.svg" alt="icon" width={27} height={27} className="md:h-[27px] md:w-[27px] h-6 w-6"/>
            </Link>
            <span className="text-sm md:text-base text-white font-normal tracking-tight">
              Leave us a message on WhatsApp
            </span>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 md:mt-0">
            <p className="font-normal text-2xl md:text-[32px] tracking-tighter text-white">
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
          <p className="text-brand-green-200 text-[13px] font-normal">
            © ALL RIGHTS RESERVED, CHICHI MOTORS 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
