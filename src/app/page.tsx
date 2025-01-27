import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarLogos {
  src: string;
  alt: string;
}

const carLogos: CarLogos[] = [
  {
    src: "/images/KIA_logo3.png",
    alt: "kia",
  },
  {
    src: "/images/Toyota_EU 1.png",
    alt: "kia",
  },
  {
    src: "/images/layer1.png",
    alt: "lexus",
  },
  {
    src: "/images/Mercedes-Benz_free_logo.png",
    alt: "Mercedes Benz",
  },
  {
    src: "/images/Audi-Logo_2016.png",
    alt: "Audi",
  },
  {
    src: "/images/Group.png",
    alt: "Honda",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen pt-32 px-[50px] bg-white text-black">
      <section className="flex items-center">
        <div className="basis-[40%] ml-20 flex flex-col gap-y-6">
          <h1 className="text-black text-[42px] font-bold tracking-tighter leading-[50px]">
            Get <span className="text-brand-green-100">Affordable</span>{" "}
            Vehicles <br /> Used & Brand New in <br />{" "}
            <span className="text-brand-green-100">Excellent</span> Condition
          </h1>
          <p className="text-base tracking-tighter font-normal text-black max-w-[380px]">
            Browse our collection of vehicles and make your pick, book a meeting
            with us to inspect your desired vehicle.
          </p>
          <Link
            href="/showroom"
            className="bg-brand-green-100 transition-colors duration-200 ease-in-out hover:bg-black py-2.5 px-6 text-sm font-semibold text-white w-fit rounded-lg"
          >
            Browse our Cars
          </Link>
        </div>
        <div className="basis-[60%]">
          <Image
            src="/images/car2.png"
            alt="car"
            width={720}
            height={480}
            className="h-[480px] w-[720px]"
          />
          <div className="flex items-center justify-end mr-24 gap-x-12">
            {carLogos.map((logo)=>(
              <Image src={logo.src} alt={logo.alt} height={20} width={141.34} className="h-5 w-fit" key={logo.alt}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
