import React from "react";

interface Testimonials {
  content: string;
  author: string;
}

const testimonial: Testimonials[] = [
  {
    content: "Great selection and unbeatable prices. The process was smooth and hassle-free!",
    author: "Uchechi Umesi",
  },
  {
    content:
      "Had an incredible experience, From the seamless buying process to the outstanding performance of the car, everything has exceeded my expectations. ",
    author: "Kalu Daniel Obinna",
  },
  {
    content:
      "Honest, friendly, and professional. I’ll definitely be coming back for my next car!",
    author: "Joel Okpara",
  },
  {
    content:
      "I got exactly what I was looking for at a great price. Super happy with my purchase!",
    author: "Japheth Basil",
  },
];

const Testimonial = () => {
  return (
    <section className="xl:mx-32 md:mx-20 mx-5 my-24 md:min-h-[80vh] min-h-fit">
      <div className="flex flex-col gap-y-2">
        <h5
          className="text-[32px] leading-10 md:text-[42px] font-normal md:w-full w-[80%] tracking-tighter text-black"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          Hear from our Customers
        </h5>
        <p
          className="text-[#969696] text-sm md:text-base font-normal tracking-tight max-w-[480px]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
          We’re not just selling cars... we’re building lasting relationships.
          When you buy from us, you’re becoming part of our family.
        </p>
      </div>
      <div className="overflow-x-auto testimony-container w-full flex gap-x-6 mt-10">
        {testimonial.map((item) => (
          <div
            className="border border-[#E1E1E1] flex flex-col shrink-0 px-5 py-10 rounded-lg"
            key={item.author}
          >
            <span className="text-5xl text-brand-green-100 font-medium relative top-5 italic">
              &quot;
            </span>
            <p className="max-w-[321px] text-black text-sm md:text-base font-normal ml-5">
              {item.content}
            </p>
            <span className="text-5xl text-brand-green-100 font-medium flex justify-end italic mr-5">
              &quot;
            </span>
            <span className=" text-[#969696] font-semibold text-[13px] mt-[-30px]  ml-5">
              {item.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
