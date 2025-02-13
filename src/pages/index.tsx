import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/apartment (2).jpg",
  "/assets/apartment (3).jpg",
  "/assets/apartment (4).jpg",
  "/assets/apartment (5).jpg",
  "/assets/apartment (1).jpg"
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-background text-text">
      <Navbar />
      <div className="flex items-center gap-5 pb-4 px-4 md:px-8">
        <Image 
          src="/assets/logo.png" 
          alt="Maldif Real Estate Logo" 
          width={148}
          height={148} 
          className="rounded-full"
        />
        <span className="text-4xl md:text-7xl font-bold text-black">MALDIF REAL ESTATE</span>
      </div>

      <header className="relative flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-8">
      <div className="relative w-full md:w-3/5 h-auto">
  <div className="w-full h-0 pb-[56.25%] relative rounded-lg overflow-hidden">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      src="https://www.youtube.com/embed/OFSRT2VhsQE?autoplay=1&mute=1&loop=1&playlist=OFSRT2VhsQE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

        <div className="w-full md:w-2/5 text-center md:text-left px-4 md:px-8 mt-4 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-bold">Welcome to Maldif Real Estate</h2>
          <p className="text-base md:text-lg leading-relaxed mt-2">
            Maldif Real Estate is a leading company in Ethiopia providing modern
            housing solutions to fulfill your dreams. We offer luxury, comfort, and
            quality homes tailored to your needs.
          </p>
        </div>
      </header>

      <div className="relative w-full px-4 md:px-8 my-8">
        <div className="flex gap-4 overflow-hidden">
          {images.slice(index, index + 3).map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Apartment Image ${i + 1}`}
              width={300}
              height={200}
              className="rounded-lg object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={prevSlide} className="p-2 bg-gray-300 rounded">⬅️</button>
          <button onClick={nextSlide} className="p-2 bg-gray-300 rounded">➡️</button>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center my-16 px-4 md:px-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Maldif Real Estate is a leading company in Ethiopia providing modern
            housing solutions to fulfill your dreams. Our team is dedicated to creating
            comfortable and luxurious living spaces for our valued clients.
          </p>
        </div>
        <Image
          src="/assets/house7.jpg"
          alt="About us"
          width={600}
          height={400}
          className="w-full md:w-1/2 rounded-lg mt-4 md:mt-0"
        />
      </section>

      <section className="flex flex-col md:flex-row gap-11 bg-primary text-white py-8 md:py-16 px-4 md:px-8">
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/House (9).png"
            alt="Achievements"
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-11">
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold">100+ Happy Clients</h3>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold">50+ Projects Completed</h3>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold">10 Years Experience</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
