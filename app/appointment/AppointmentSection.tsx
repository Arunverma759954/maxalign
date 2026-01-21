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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setStatus("✅ Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to book appointment.");
      }
    } catch {
      setLoading(false);
      setStatus("❌ Server error. Try again later.");
    }
  };
  return (
    <section className="w-full relative overflow-hidden bg-gray-50">
      {/* Banner */}
      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
        <div className="md:text-center px-6 pt-15 md:pt-0 z-10 max-w-2xl animate-fadeSlideInLeft">
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
          <h2 className="text-3xl font-extrabold text-[#0B7A75] mb-8 md:text-center">
            Appointment Form
          </h2>
         <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="p-4 rounded-xl border" />
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="p-4 rounded-xl border" />
            <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" className="p-4 rounded-xl border" />
            <input name="date" value={formData.date} onChange={handleChange} type="date" required className="p-4 rounded-xl border" />
            <input name="time" value={formData.time} onChange={handleChange} type="time" required className="p-4 rounded-xl border" />

            <select name="service" value={formData.service} onChange={handleChange} required className="p-4 rounded-xl border">
              <option value="">Select Service</option>
              <option>Orthodontic Treatment</option>
              <option>Teeth Whitening</option>
              <option>Cavity Treatment</option>
              <option>Gum Disease</option>
              <option>Invisalign</option>
              <option>Dental Implants</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message"
              className="p-4 rounded-xl border md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#0B7A75] to-black text-white py-4 rounded-xl font-semibold md:col-span-2"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>

            {status && (
              <p className="md:col-span-2 text-center font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
