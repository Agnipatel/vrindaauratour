"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useBookingModal } from "@/components/BookingModalProvider";

const slides = [
  {
    image: "/c1.png", // Replace with your actual slider image 1
    title: "Experience the Divine Journey",
    subtitle: "Explore the sacred lands of Vrindavan, Mathura, and beyond with our tailored pilgrimage packages.",
  },
  {
    image: "/c2.png", // Replace with your actual slider image 2
    title: "Hassle-Free Pilgrimage",
    subtitle: "We handle the travel, hotels, and schedules so you can focus entirely on your devotion.",
  },
  {
    image: "/c3.png", // Replace with your actual slider image 3
    title: "Comfortable & Reliable",
    subtitle: "Travel safely in clean, private cabs with our experienced local guides and drivers.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Fallback background color just in case */}
          <div className="absolute inset-0 bg-stone-800"></div>

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg max-w-4xl transition-all duration-700 transform translate-y-0">
          {slides[currentSlide].title}
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-stone-200 mb-10 max-w-2xl drop-shadow-md">
          {slides[currentSlide].subtitle}
        </p>

        <button
          onClick={openModal}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full transition-colors shadow-xl hover:scale-105 transform duration-200"
        >
          View Tour Packages
        </button>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}