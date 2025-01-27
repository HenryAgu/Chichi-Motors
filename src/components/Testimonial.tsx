import React from "react";

interface Testimonials {
  content: string;
  author: string;
}

const testimonial: Testimonials[] = [
    {
      content:
        "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you&apos;ll pay. We believe in clear, upfront pricing so you can make.",
      author: "Henry Agu Chukwuma",
    },
    {
      content:
        "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you&apos;ll pay. We believe in clear, upfront pricing so you can make.",
      author: "Kalu Daniel Obinna",
    },
    {
      content:
        "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you&apos;ll pay. We believe in clear, upfront pricing so you can make.",
      author: "Joel Okpara",
    },
    {
      content:
        "At Chi Chi Motors, there are no hidden fees or surprises. The price you see is the price you&apos;ll pay. We believe in clear, upfront pricing so you can make.",
      author: "Leonard Ijeoma",
    },
  ];
  

const Testimonial = () => {
  return (
    <section className="mx-32 my-24 mb-48">
      <div className="flex flex-col gap-y-2">
        <h5 className="text-[42px] font-normal tracking-tighter text-black">
          Hear from our Customers
        </h5>
        <p className="text-[#969696] text-base font-normal tracking-tight max-w-[480px]">
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
            <span className="text-5xl text-brand-green-100 font-medium pb-[-50px]">
              "
            </span>
            <p className="max-w-[321px] text-black text-base font-normal">
              {item.content}
            </p>
            <span className="text-5xl text-brand-green-100 font-medium flex justify-end">
              "
            </span>
            <span className=" text-[#969696] font-semibold text-[13px] mt-[-30px]">
              {item.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
