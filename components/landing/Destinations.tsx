"use client";

import { useBookingModal } from "@/components/BookingModalProvider";
import Image from "next/image";

const destinations = [
  {
    name: "Vrindavan",
    desc: "Visit Banke Bihari Temple, Prem Mandir, ISKCON Temple, and Nidhivan.",
    image: "/v.png", // Placeholder URL, replace with actual image path
  },
  {
    name: "Mathura",
    desc: "See the Krishna Janmabhoomi (Birthplace Temple) and Yamuna Aarti at Vishram Ghat.",
    image: "/mt.png", // Placeholder URL, replace with actual image path
  },
  {
    name: "Gokul & Raman Reti",
    desc: "Walk on the holy sand where child Krishna played.",
    image: "/g.png", // Placeholder URL, replace with actual image path
  },
  {
    name: "Barsana & Govardhan",
    desc: "Visit Radha Rani Temple in Barsana and the sacred Govardhan Hill.",
    image: "/b.png", // Placeholder URL, replace with actual image path
  }
];

export function Destinations() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <span className="text-orange-300 hidden md:inline-block">✧━━━━</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Top Places Covered in Our Packages
          </h2>
          <span className="text-orange-300 hidden md:inline-block">━━━━✧</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-100 flex flex-col hover:shadow-lg transition-shadow p-2">
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-stone-200 mb-4">
                <Image src={dest.image} alt={dest.name} fill className="object-cover" /> 
              </div>
              <div className="text-center px-2 pb-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#1a4a2a] mb-2">{dest.name}</h3>
                <p className="text-sm text-stone-700 font-medium">
                  {dest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={openModal}
            className="inline-flex rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-700 transition"
          >
            Plan Your Spiritual Journey
          </button>
        </div>
      </div>
    </section>
  );
}
