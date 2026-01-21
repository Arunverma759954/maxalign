"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch {
      setLoading(false);
      setStatus("❌ Server error. Try again later.");
    }
  };
  return (
    <section className="w-full relative overflow-hidden bg-white">

      {/* Banner Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
        <div className="text-center px-6 z-10 max-w-2xl animate-fadeSlideInLeft">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white 
                         relative inline-block tracking-tight
                         text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                      4px_4px_0_rgba(0,0,0,0.2),
                                      6px_6px_0_rgba(0,0,0,0.1)]">
            Contact Us
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl drop-shadow-lg">
            Connecting Near & Far — For emergency dental care or to schedule an appointment, contact our office or visit our clinic.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black mb-6">
          Get In Touch With Us
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Fill out the form below, call, email, or visit us. Our friendly team is here to help you with all your dental care needs.
        </p>
      </div>

      {/* Form Section (Light Background) */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl mx-auto">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Contact Us
          </h3>
         <form
          className="grid grid-cols-1 gap-6 bg-white p-10 rounded-3xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl border bg-gray-50"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl border bg-gray-50"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="p-4 rounded-xl border bg-gray-50"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            placeholder="Your Message"
            className="p-4 rounded-xl border bg-gray-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#0B7A75] to-black text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center font-medium text-gray-700">
              {status}
            </p>
          )}
        </form>
      </div>
      </div>

      {/* Dark Contact Info Section (Bigger Divs) */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {[
          {
            title: "Visit Us",
            content: "1st floor, Anjanadri Krest, SY no. 104/3A, Munnekollal Main Rd, Marathahalli, Bengaluru, Karnataka 560037",
          },
          {
            title: "Contact Us",
            content: "09321533345",
          },
          {
            title: "Working Hours",
            content: "Mon to Sun : 10:00 To 8:30",
          },
          {
            title: "Email Us",
            content: "info@maxaligndental.com",
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl shadow-lg bg-gradient-to-br from-[#041f20] via-[#083f41] to-[#041f20] hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
          >
            <h3 className="text-[#0B7A75] font-extrabold text-2xl mb-3">
              {item.title}
            </h3>
            <p className="text-gray-200 text-lg">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Full Width Map Section */}
      <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg my-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.301860574687!2d77.706165!3d12.952526000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135075e27577%3A0xcf30be6c865fa9ad!2sMaxAlign%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1764048316363!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
