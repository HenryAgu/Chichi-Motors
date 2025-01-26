import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="shadow-custom fixed top-0 left-0 right-0 z-50 bg-[#FBFBFB]">
      <nav className="flex items-center justify-between py-5 px-[50px]">
        <Link href="/" className="">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            height={50}
            width={95}
            className="h-[50px] w-[95px]"
          />
        </Link>
        <div className="">2</div>
      </nav>
    </section>
  );
};

export default Navbar;
