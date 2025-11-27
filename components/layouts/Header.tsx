"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPhone } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/maxalign-logo.png"
              alt="Logo"
              width={140}
              height={80}
              className="cursor-pointer border-0" // remove any border
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-[17px] font-medium">
          <Link href="/" className="hover:text-[#0B7A75] transition">Home</Link>
          <Link href="/about" className="hover:text-[#0B7A75] transition">About</Link>
          <Link href="/services" className="hover:text-[#0B7A75] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#0B7A75] transition">Gallery</Link>
          <Link href="/blogs" className="hover:text-[#0B7A75] transition">Blogs</Link>
          <Link href="/contact" className="hover:text-[#0B7A75] transition">Contact Us</Link>
        </nav>

        {/* Desktop CTA with Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9321533345"
            className="flex items-center gap-2 text-[#0B7A75] font-medium hover:text-[#096863] transition"
          >
            <HiPhone size={24} /> 9321533345
          </a>
          <Link href="/appointment">
            <button className="bg-[#0B7A75] hover:bg-[#096863] text-white px-6 py-2.5 rounded-md font-semibold shadow-lg transition">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:9321533345">
            <HiPhone size={28} className="text-[#0B7A75]" />
          </a>
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <IoClose size={32} className="text-black" />
            ) : (
              <GiHamburgerMenu size={30} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0C3436] text-white px-6 py-5 space-y-4 text-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/" className="block hover:text-[#4EE0D4]">Home</Link>
        <Link href="/about" className="block hover:text-[#4EE0D4]">About</Link>
        <Link href="/services" className="block hover:text-[#4EE0D4]">Services</Link>
        <Link href="/gallery" className="block hover:text-[#4EE0D4]">Gallery</Link>
        <Link href="/blogs" className="block hover:text-[#4EE0D4]">Blogs</Link>
        <Link href="/contact" className="block hover:text-[#4EE0D4]">Contact Us</Link>

        <a
          href="tel:9321533345"
          className="flex items-center gap-2 text-[#4EE0D4] font-medium"
        >
          <HiPhone size={20} /> 9321533345
        </a>

        <Link href="/appointment">
          <button className="w-full bg-[#0B7A75] hover:bg-[#096863] text-white px-5 py-2 rounded-md font-semibold mt-2 shadow-lg">
            Book Appointment
          </button>
        </Link>
      </div>
    </header>
  );
}
