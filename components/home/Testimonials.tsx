"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      review:
        "MaxAlign Dental Clinic gave me the best orthodontic care! The invisible aligners worked perfectly and the staff was very friendly.",
      img:"/assets/t1.jpg",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      review:
        "The teeth whitening treatment was amazing. I got results in just one session. Highly recommended!",
      img:"/assets/t2.jpg",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      review:
        "Professional, clean, and super advanced clinic. The cavity filling was painless.",
      img:"/assets/t3.jpg",
      rating: 5,
    },
    {
      name: "Priya Nair",
      review:
        "Very polite staff and modern equipment. Best dental experience ever!",
      img:"/assets/t4.jpg",
      rating: 5,
    },
    {
      name: "Kunal Verma",
      review:
        "Quick service, highly skilled doctor! Definitely recommend this clinic.",
      img:"/assets/t2.jpg",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < reviews.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B7A75]">
          What Our Patients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by thousands — real experiences from our happy patients.
        </p>

        {/* Slider Box */}
        <div className="relative mt-14">
          {/* Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500"
              style={{
                transform: `translateX(-${index * 33.33}%)`,
              }}
            >
              {reviews.map((item, i) => (
                <div key={i} className="w-full md:w-1/3 p-3 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                    
                    {/* User Image */}
                    <div className="flex justify-center">
                      <Image
                        src={item.img}
                        width={90}
                        height={90}
                        alt={item.name}
                        className="rounded-full shadow-md"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mt-4 text-[#FFD700]">
                      {[...Array(item.rating)].map((_, s) => (
                        <FaStar key={s} className="text-xl" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="mt-4 text-gray-700 text-[16px] leading-relaxed">
                      "{item.review}"
                    </p>

                    {/* Name */}
                    <h4 className="mt-6 font-semibold text-[#0B7A75] text-lg">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg rounded-full border hover:bg-gray-100 transition"
          >
            <HiChevronLeft className="text-3xl text-[#0B7A75]" />
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg rounded-full border hover:bg-gray-100 transition"
          >
            <HiChevronRight className="text-3xl text-[#0B7A75]" />
          </button>
        </div>
      </div>
    </section>
  );
}
