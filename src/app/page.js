"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const Card = ({ href, imageSrc, alt, title, description }) => (
  <Link href={href}>
    <div className="relative w-full p-2 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-slideUp">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={alt}
          width={500}
          height={300}
          className="rounded-lg w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg transition-transform transform hover:-translate-y-1">
          Adopt Me
        </button>
      </div>
    </div>
  </Link>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const triggerAnimation = useCallback(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  useEffect(() => {
    triggerAnimation();
  }, [triggerAnimation]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/9421538/9421538-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Help Us Find a Forever Home
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-white mb-8 sm:mb-12 drop-shadow-md">
            Adopt a pet and save a life. Every animal deserves love and care.
          </p>
          <Link href="#cards-section">
            <button className="bg-white text-yellow-500 hover:text-yellow-400 py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-md sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all">
              Explore Pets
            </button>
          </Link>
        </div>
      </div>

      {/* Card Section */}
      <div
        id="cards-section"
        className={`cards py-10 px-4 flex flex-wrap justify-center gap-6 sm:gap-8 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Card
          href="/adopt/cats"
          imageSrc="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Cat looking for a home"
          title="Cats"
          description="Increased awareness about animal welfare has boosted cat adoptions."
        />
        <Card
          href="/adopt/dogs"
          imageSrc="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Dog waiting for adoption"
          title="Dogs"
          description="Only 10% of pets in India are adopted, while the rest face abandonment."
        />
        <Card
          href="/adopt/other"
          imageSrc="https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Other animals"
          title="Other Animals"
          description="Parrots, rabbits, and many more animals are also waiting for a loving home."
        />
      </div>
    </>
  );
}
