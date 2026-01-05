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
      link: "/blogs/WinterDentalCareBlog",
    },
    
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B7A75]">
            Latest Blogs & Updates
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Stay updated with the latest dental tips, treatments, and expert advice 
            from Max Align Dental Clinic.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition border border-gray-200"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={260}
                className="rounded-t-xl w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B7A75]">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-2 line-clamp-3">
                  {blog.desc}
                </p>

                <Link href={blog.link}>
                  <button className="mt-4 text-[#0B7A75] font-semibold hover:text-[#0a5e5a] transition">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
