"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      desc: "Finding the right dental clinic can be a challenge. Here is why Max Align stands out...",
      img: "/assets/blogs/b1.jpg",
       link: "/blogs/max-align-best-dental-clinic",
    },
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      desc: "Reveal a brighter, more confident smile with safe and long-lasting whitening...",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/professional-teeth-whitening",
    },
    {
      title: "The Importance of Regular Dental Check-Ups",
      desc: "Skipping dental visits? Here’s why regular check-ups are essential...",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
    },
    {
      title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore",
      desc: "The season of winter brings a relief to Bangalore and it is ...",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/teeth-whitening",
    },
    {
      title: " The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter",
      desc: "Winter has a tendency of transforming day-to-day habits ....",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/winter-dental-care",
    },
     {
      title: "Common Dental Problems in Bangalore and How to Prevent Them",
      desc: "The busy life and lifestyle of Bangalore, the shift...",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/common-dental-problems-in-Bangalore",
    },
  
    
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Blogs & Updates
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Stay updated with the latest dental tips, treatments, and expert advice from Max Align Dental Clinic.
          </p>
        </div>

        {/* BLOG GRID - Image inside content box, premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.link}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0B7A75]/20"
            >
              <div className="overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={400}
                  height={260}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0B7A75] transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-3 line-clamp-3 text-sm leading-relaxed">
                  {blog.desc}
                </p>
                <span className="inline-flex items-center mt-4 text-[#0B7A75] font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
