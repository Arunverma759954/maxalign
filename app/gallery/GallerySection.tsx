"use client";
import { useState } from "react";

export default function GallerySection() {
  const galleryImages = [
    "/assets/gallery/g1.webp",
    "/assets/gallery/g2.webp",
    "/assets/gallery/g3.webp",
    "/assets/gallery/g4.webp",
    "/assets/gallery/g5.webp",
    "/assets/gallery/g6.webp",
    "/assets/gallery/g7.webp",
    "/assets/gallery/g8.webp",
    "/assets/gallery/g9.webp",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full relative overflow-hidden">

      {/* Banner Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
        <div className="text-center px-6 z-10 max-w-2xl animate-fadeSlideInLeft">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white 
                         relative inline-block 
                         tracking-tight
                         text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                      4px_4px_0_rgba(0,0,0,0.2),
                                      6px_6px_0_rgba(0,0,0,0.1)]">
            Our Gallery
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl drop-shadow-lg">
            Explore the moments and transformations that define Maxalign Dental Clinic.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black mb-6">
          A Glimpse Into Our Work
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our gallery showcases real patient smiles, our advanced dental technology, and the caring environment we provide at Maxalign Dental Clinic. Each image tells a story of precision, care, and transformation.
        </p>
      </div>

      {/* Our Collection Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
          Our Collection
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-[90%] md:max-w-[700px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
