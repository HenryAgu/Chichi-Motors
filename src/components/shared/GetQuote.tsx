import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetQuote = () => {
  return (
    <section className="my-20 flex">
      <div className="basis-[50%] flex flex-col gap-y-2 p-32 bg-brand-green-100">
        <p className="max-w-[373px] ">Can’t find the right car for you? </p>
        <span>
          No worries, we also import vehicles at our customers demand and
          expense. we have great contacts and import channels from all over the
          globe.
        </span>
        <Link
          href=""
          className="bg-brand-green-100 transition-colors duration-200 ease-in-out hover:bg-black py-2.5 px-6 text-sm font-semibold text-white rounded-lg"
        >
          Get a quote
        </Link>
      </div>
      <div className="basis-[50%]">
        <Image src="/images/image4.png" alt="image" width={732} height={550} className="w-full h-[550px]"/>
      </div>
    </section>
  );
};

export default GetQuote;
