import Link from "next/link";
import React from "react";

const TopSeller = () => {
  return (
    <section className="my-24  px-5 md:px-[50px]">
      <div className="flex justify-between items-baseline">
        <p className="text-black text-2xl md:text-[32px] font-normal tracking-tighter">
          Top Sellers
        </p>
        <Link
          href="/showroom"
          className="capitalize underline text-black font-semibold text-sm"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default TopSeller;
