export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section className="w-full relative overflow-hidden bg-white">
        {/* Banner Section */}
        <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black flex items-center justify-center">
          <div className="text-center px-6 z-10 max-w-2xl animate-fadeSlideInLeft">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white 
                           relative inline-block 
                           tracking-tight
                           text-shadow-[2px_2px_0_rgba(0,0,0,0.3),
                                        4px_4px_0_rgba(0,0,0,0.2),
                                        6px_6px_0_rgba(0,0,0,0.1)]">
              About Us
            </h1>
            <p className="text-gray-200 mt-6 text-lg md:text-xl drop-shadow-lg">
              We provide modern dental care with advanced technology, expert specialists,
              and a personalized approach for every patient.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/max-align-about.jpg"
              alt="About Maxalign Dental Clinic"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
              About Maxalign Dental Clinic
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At Maxalign Dental Clinic, we are committed to delivering exceptional dental care with a personal touch. Our modern, patient-friendly facility ensures comfort, cleanliness, and clinical excellence.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Led by Dr. Ayushi Verma, B.D.S., M.D.S., and a Certified Invisalign Provider, we specialize in aligning teeth discreetly and effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0B7A75] mb-1">Experienced Team</h3>
                <p className=" text-black">Top-notch dental experts ensuring high-quality care.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0B7A75] mb-1">Comprehensive Services</h3>
                <p className=" text-black">All dental procedures from basic care to advanced treatments.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0B7A75] mb-1">State-of-the-Art Technology</h3>
                <p className=" text-black">Modern equipment and digital diagnostics for precision.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md">
                <h3 className="font-semibold text-[#0B7A75] mb-1">Emergency Services</h3>
                <p className=" text-black">Quick response to urgent dental needs, ensuring comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
<section className="w-full py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Mission Card */}
    <div className="p-8 rounded-2xl  bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black text-white shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
      <p className="text-lg leading-relaxed mb-4">
        At Maxalign Dental Clinic, our mission is to deliver compassionate and modern dental care that ensures the highest standards of patient comfort and oral health. 
      </p>
      <p className="text-lg leading-relaxed mb-4">
        We aim to educate our patients about the best oral hygiene practices, provide individualized treatment plans, and use cutting-edge technology to make every procedure safe, efficient, and effective.
      </p>
      <p className="text-lg leading-relaxed">
        Our team is committed to building lasting relationships with our patients, ensuring that every visit contributes to long-term dental wellness and a confident, radiant smile.
      </p>
    </div>

    {/* Vision Card */}
    <div className="p-8 rounded-2xl  bg-gradient-to-r from-[#0B7A75] via-[#083f41] to-black text-white shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
      <p className="text-lg leading-relaxed mb-4">
        Our vision is to be recognized as a leading dental clinic known for excellence, innovation, and patient-centered care. We aspire to set new benchmarks in orthodontics, cosmetic dentistry, and preventive care.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        We strive to integrate the latest technologies, such as digital diagnostics and minimally invasive procedures, to improve outcomes and enhance the overall patient experience.
      </p>
      <p className="text-lg leading-relaxed">
        By fostering a culture of continuous learning, collaboration, and compassion, we aim to empower our patients to achieve optimal oral health and smile with confidence for a lifetime.
      </p>
    </div>
  </div>
</section>


 {/* Why Choose Us Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
              Why Choose Us
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Maxalign Dental Clinic stands out for its expert team, cutting-edge technology, and personalized care approach. We ensure every patient feels comfortable and confident.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-[#0B7A75] mb-2">Expert Team</h3>
                <p className=" text-black">Highly qualified professionals delivering top-quality dental care.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-[#0B7A75] mb-2">Advanced Technology</h3>
                <p className=" text-black">Modern tools and digital solutions for precise treatments.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-[#0B7A75] mb-2">Personalized Care</h3>
                <p className=" text-black">Tailored treatments ensuring comfort and best results for every patient.</p>
              </div>
              <div className="p-4 bg-[#0B7A75]/10 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-[#0B7A75] mb-2">Safe & Clean</h3>
                <p className=" text-black">Strict hygiene and safety protocols for a worry-free dental experience.</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/about-us-img-2.jpg" // Replace with your image
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
