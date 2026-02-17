"use client";

import Image from "next/image";
import Link from "next/link";

export default function RegularDentalCheckups() {
  const latestBlogs = [
    { title: "Top 5 Benefits of Professional Teeth Whitening", img: "/assets/blogs/b2.jpg", link: "/blogs/professional-teeth-whitening", date: "19-07-2025" },
    { title: "Why Max Align is one of the Best Dental Clinics in Marathahalli", img: "/assets/blogs/b1.jpg", link: "/blogs/max-align-best-dental-clinic", date: "13-07-2025" },
    { title: "The Importance of Regular Dental Check-Ups", img: "/assets/blogs/b3.jpg", link: "/blogs/importance-of-dental-checkups", date: "10-07-2025" },
    { title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore", img: "/assets/blogs/b2.jpg", link: "/blogs/teeth-whitening", date: "08-07-2025" },
    { title: "The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter", img: "/assets/blogs/b1.jpg", link: "/blogs/winter-dental-care", date: "05-07-2025" },
  ];

  return (
    <>
      {/* ===================== TOP BANNER ===================== */}
  <div className="bg-white">  
<section
  className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center
    bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]"
>
  <div className="text-center px-6 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
      Common Dental Problems in Bangalore and How to Prevent Them

    </h1>
  </div>
</section>

      {/* ===================== BLOG SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT COLUMN - Image inside content box */}
        <div className="md:col-span-2">
          <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src="/assets/blogs/b3.jpg"
                alt="Common Dental Problems in Bangalore"
                width={900}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 md:p-10">
          {/* Meta */}
          <p className="text-gray-600 text-sm mb-4">Admin • 9 jan 2026</p>

          {/* Blog Content */}
          <div className="text-gray-700 space-y-6 leading-relaxed">

            <p className="italic">
              <strong>Meta Description:</strong><br />
              We have listed the most prevalent dental issues in Bangalore such as tooth decay and gum disease and how preventive dentistry and professional dental treatment in MaxAlign Dental can ensure your smile is healthy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Problems of the dentists in Bangalore: An emerging concern.
            </h2>

            <p>
              The busy life and lifestyle of Bangalore, the shift in food habits, stress, and infrequent visits to dental clinics have contributed to the apparent increase in dental issues in Bangalore. Tooth decay to the gum disease, there are a lot of oral diseases that quietly put pressure on people, provided they are not taken care of.
            </p>

            <p>
              The good news? This is because most of the dental issues can be avoided entirely through proper oral care and regular check-ups in a family dental clinic in Bangalore such as MaxAlign Dental.
            </p>

            <p>
              We shall look at the most prevalent dental complications in Bangalore, the reasons and the ways professional dental attention can be used to avoid the problems over time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Tooth Decay - A Common Dental Health issue in Bangalore.
            </h2>

            <p>
              Tooth decay is still one of the most widespread dental problems in Bangalore that occurs and affects children, adults, and seniors. Excessive intake of sweet food, acidic beverages and lack of proper brushing are significant factors.
            </p>

            <h3 className="font-semibold">Why tooth decay happens:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plaque buildup</li>
              <li>Unless done on a regular basis, brushing and flossing</li>
              <li>Skipping dental checkups</li>
            </ul>

            <h3 className="font-semibold">How to prevent tooth decay:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Floride Toothpaste and brush your teetn twice a day</li>
              <li>Restrict snacks and beverages that contain sugar</li>
              <li>Check in with a dentist on a regular basis</li>
            </ul>

            <p>
              In MaxAlign Dental, dentists identify early cavities and cure them when they are not painful and costly.
            </p>

          

            <h2 className="text-2xl font-semibold text-gray-900">
              Periodontal Disease in Bangalore Owing to Lack of Oral Health.
            </h2>

            <p>
              Another common dental issue among the people of Bangalore is gum disease which is mostly brought about by inadequate oral health habits and lack of timely dental consultation. The signs of bleeding gums, swelling, and bad breath are the early signs.
            </p>

            <h3 className="font-semibold">Common causes of gum disease:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plaque and tartar buildup</li>
              <li>Smoking or tobacco use</li>
              <li>Negligence of professional dental cleaning</li>
            </ul>

            <p>
              Gum disease prevention tips:
              <br />
              Among these is good oral hygiene.
              <br />
              MaxAlign Dental Preventive dentistry is based on the ability to keep the gums in a healthy and infection-free state.
            </p>

          

            <h2 className="text-2xl font-semibold text-gray-900">
              Periodontal Diseases that are the result of untreated cavities.
            </h2>

            <p>
              Cavities that have not been treated normally result in severe dental infections that may extend to other parts of the body when neglected. Dental infections are becoming a widespread occurrence because of late treatment.
            </p>

            <h3 className="font-semibold">Signs of dental infection:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent tooth pain</li>
              <li>Swelling or pus</li>
              <li>Fever or jaw discomfort</li>
            </ul>

            <h3 className="font-semibold">Infection prevention of dental:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't ignore tooth pain</li>
              <li>Get cavities treated early</li>
              <li>Go to a specialist in the field of dentistry in Bangalore</li>
            </ul>

           

            <h2 className="text-2xl font-semibold text-gray-900">
              Concluding Remarks: The Secret of a Healthy Smile is Prevention.
            </h2>

            <p>
              Being a common ailment does not necessarily mean that dental problems are unavoidable. Most of the dental problems in Bangalore are preventable with proper oral health and regular checkups as well as preventive dentistry.
            </p>

            <p>
              In MaxAlign Dental the emphasis is on primary diagnosis and patient education and long-term oral health- the aim is to make all the patients smile confidently.
            </p>

           </div>
            </div>
          </article>
        </div>

        {/* ===================== RIGHT SIDEBAR ===================== */}
        <aside className="space-y-6">

          <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">
            Latest Blogs
          </h3>

          <div className="space-y-4">
            {latestBlogs.map((blog, index) => (
              <Link key={index} href={blog.link} className="flex gap-4 items-start hover:opacity-90 transition group">
                <Image src={blog.img} alt={blog.title} width={80} height={80} className="rounded-xl object-cover shrink-0 w-20 h-20" />
                <div className="min-w-0 flex-1">
                  <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">{blog.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <Link
            href="/appointment"
            className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <p className="text-white font-bold text-lg">Ready for your best smile?</p>
            <p className="text-white/90 text-sm mt-1 mb-4">Expert care at Maxalign Dental</p>
            <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">
              BOOK APPOINTMENT
            </span>
          </Link>
        </aside>
      </section>
      </div>
    </>
  );
}
