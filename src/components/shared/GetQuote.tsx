import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetQuote = () => {
  return (
    <section className="my-20 flex flex-col lg:flex-row md:h-[550px]" >
      <div className="basis-full md:basis-[50%] flex flex-col gap-y-4 md:p-20 lg:p-32 px-[32px] py-20 bg-brand-green-100">
        <p className="max-w-[373px] text-[32px] md:text-[42px] text-white font-bold tracking-tighter md:leading-[50px]">Can’t find the right car for you? </p>
        <span className="md:text-base text-sm max-w-[450px] font-normal tracking-tighter leading-[24px] text-white">
          No worries, we also import vehicles at our customers demand and
          expense. we have great contacts and import channels from all over the
          globe.
        </span>
        <Link
          href=""
          className="bg-white w-fit transition-colors duration-200 ease-in-out hover:bg-black py-2.5 px-6 text-sm font-semibold hover:text-white text-brand-green-100 rounded-lg mt-5 md:mt-10"
        >
          Get a quote
        </Link>
      </div>
      <div className="basis-full md:basis-[50%]">
        <Image src="/images/image4.png" alt="image" width={732} height={550} className="w-full h-[440px] object-cover md:h-full"/>
      </div>
    </section>
  );
};

export default GetQuote;
