"use client";
import { useEffect, useState } from "react";
import { FaSmile, FaTooth, FaStar } from "react-icons/fa";

const stats = [
  {
    value: 10,
    label: "Years of Expertise",
    icon: <FaTooth className="text-4xl md:text-5xl text-[#0B7A75]" />,
    description: "Max Align pioneers precision smile design. Our advanced technology ensures flawless alignment.",
    suffix: "+",
  },
  {
    value: 5000,
    label: "Smiles Transformed",
    icon: <FaSmile className="text-4xl md:text-5xl text-[#0B7A75]" />,
    description: "Trusted by patients nationwide. We deliver life-changing dental confidence.",
    suffix: "+",
  },
  {
    value: 99,
    label: "Success Rate",
    icon: <FaStar className="text-4xl md:text-5xl text-[#0B7A75]" />,
    description: "Proven clinical excellence. Your dream smile guaranteed.",
    suffix: "%",
  },
];

export default function CounterSection() {
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const increments = [10, 50, 1]; // Step increment for each counter
    const interval = setInterval(() => {
      setCounters((prev) => {
        return prev.map((count, idx) => {
          if (count < stats[idx].value) {
            const next = count + increments[idx];
            return next > stats[idx].value ? stats[idx].value : next;
          }
          return count;
        });
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-white via-[#E0F7F6]/50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/assets/banner/dental-bg.jpg')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B7A75]">
          Comprehensive Dental Care
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Affordable Dental Clinic in Marathahalli for All Age Groups
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-2xl transition"
            >
              <div>{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#4EE0D4]">
                {counters[index]}
                {stat.suffix}
              </h3>
              <h4 className="text-xl font-semibold text-[#0B7A75]">{stat.label}</h4>
              <p className="text-gray-600 text-center text-sm md:text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
