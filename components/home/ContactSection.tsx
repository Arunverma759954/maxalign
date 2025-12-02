"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};


  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side - Contact Info + Map */}
        <div className="bg-white text-black rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0B7A75]">Contact Now</h2>

         <div className="space-y-2 text-gray-800">
          <p><strong>Maxalign Dental Clinic, Marathahalli, Bengaluru</strong></p>
          <p>1st floor, Anjanadri Krest, SY no. 104/3A,</p>
          <p>Munnekollal Main Rd, Marathahalli, Bengaluru, Karnataka 560037</p>
        
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919321533345" className="text-blue-600 hover:underline">
              9321533345
            </a>
          </p>
        
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:maxaligndental@gmail.com" className="text-blue-600 hover:underline">
              maxaligndental@gmail.com
            </a>
          </p>
        
          <p><strong>Hours:</strong> Mon to Sat 9:00AM to 9:00PM</p>
        </div>

          <p className="mt-4 text-gray-700">
            Our Dental Clinic Marathahalli is easily accessible by public and private transport. We serve patients from across Bengaluru, including Whitefield, Bellandur, and HAL road.
          </p>

          {/* Map */}
          <div className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow-inner">
           <iframe
            title="Maxalign Dental Clinic Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.301860574687!2d77.706165!3d12.952526000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135075e27577%3A0xcf30be6c865fa9ad!2sMaxAlign%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1764651523572!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          </div>
        </div>

        {/* Right Side - Appointment Form */}
        <div className="bg-[#0B7A75] rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">Make an Appointment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none resize-none"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-[#4EE0D4] hover:bg-[#36c9c0] text-black font-semibold px-6 py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
