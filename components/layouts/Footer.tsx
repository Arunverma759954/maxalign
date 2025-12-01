"use client";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram,  FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1F26] to-[#062023] text-white pt-16 pb-8 relative">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-[#4EE0D4]">MaxAlign Dental Clinic</h2>
          <p className="mt-4 text-gray-300">
            Your trusted destination for orthodontics, cosmetic dentistry, and complete dental care in Marathahalli, Bangalore.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            {/* <a href="#" className="text-[#4EE0D4] hover:text-white text-2xl transition"><FaFacebook /></a> */}
            <a href="https://www.instagram.com/maxalign.dental/" className="text-[#4EE0D4] hover:text-white text-2xl transition"><FaInstagram /></a>
            {/* <a href="#" className="text-[#4EE0D4] hover:text-white text-2xl transition"><FaLinkedin /></a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#4EE0D4]">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
            <li><Link href="/appointment" className="hover:text-white transition">Book Appointment</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#4EE0D4]">Our Services</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li><Link href="#" className="hover:text-white transition">Orthodontics</Link></li>
            <li><Link href="#" className="hover:text-white transition">Teeth Whitening</Link></li>
            <li><Link href="#" className="hover:text-white transition">Cavity Filling</Link></li>
            <li><Link href="#" className="hover:text-white transition">Dental Implants</Link></li>
            <li><Link href="#" className="hover:text-white transition">Root Canal Treatment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#4EE0D4]">Contact Us</h3>
          <ul className="mt-4 space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#4EE0D4] text-xl" />
              <span>1st floor, Anjanadri Krest, SY no. 104/3A,
            Munnekollal Main Rd, Marathahalli, Bengaluru, Karnataka 560037</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#4EE0D4] text-xl" />
              <span>+91 9321533345</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#4EE0D4] text-xl" />
              <span>maxaligndental@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-600/40"></div>

      {/* Desktop Footer - Copyright & Designed By */}
      <div className="hidden sm:flex justify-between items-center max-w-7xl mx-auto px-6 py-4 border-t border-gray-600/40 mt-6 text-gray-400">
        {/* Left: Copyright */}
        <span>© {new Date().getFullYear()} MaxAlign Dental Clinic. All Rights Reserved.</span>

        {/* Right: Designed & Developed */}
        <span>
          Designed & Developed by{" "}
          <a href="https://digitalsolution.com" target="_blank" className="text-[#4EE0D4] hover:text-white transition">
            Digitalsolution.com
          </a>
        </span>
      </div>

      {/* Mobile Fixed Footer - Logo + Call & WhatsApp */}
      <div className="fixed bottom-0 left-0 w-full bg-[#062023] flex items-center justify-between px-4 py-3 sm:hidden z-50 border-t border-gray-600/40">
        {/* Logo Left */}
        <Link href="/" className="text-[#4EE0D4] font-bold">MaxAlign</Link>

        {/* Call & WhatsApp Buttons Right */}
        <div className="flex gap-2">
          <a href="tel:+919321533345" className="bg-[#4EE0D4] text-[#062023] p-2 rounded flex items-center justify-center hover:bg-white transition">
            <FaPhoneAlt />
          </a>
          <a href="https://wa.me/919321533345" target="_blank" className="bg-[#25D366] text-white p-2 rounded flex items-center justify-center hover:bg-green-600 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>

   {/* Floating WhatsApp Button - Desktop Only */}
<a
  href="https://wa.me/919321533345"
  target="_blank"
  className="hidden sm:flex fixed bottom-5 right-5 z-50 bg-[#25D366] w-14 h-14 rounded-full items-center justify-center shadow-lg hover:bg-green-600 transition"
>
  <FaWhatsapp className="text-white text-2xl" />
</a>


    </footer>
  );
}
