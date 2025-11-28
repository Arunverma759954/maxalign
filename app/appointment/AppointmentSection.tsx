"use client";
import { useState } from "react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="w-full relative overflow-hidden bg-gray-50">
      {/* Banner */}
      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
        <div className="text-center px-6 z-10 max-w-2xl animate-fadeSlideInLeft">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-shadow-lg">
            Book an Appointment
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl drop-shadow-md">
            Schedule your visit with Maxalign Dental Clinic. Our team is ready to provide you with exceptional dental care.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0B7A75] mb-8 text-center">
            Appointment Form
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none"
              required
            >
              <option value="">Select Service</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
              <option value="Orthodontics">Orthodontics</option>
              <option value="Emergency Care">Emergency Care</option>
            </select>
            <textarea
              name="message"
              placeholder="Additional Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B7A75] outline-none md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform md:col-span-2"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
