"use client";

import { useBookingModal } from "@/components/BookingModalProvider";
import { Calendar, CalendarCheck } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Same-Day Vrindavan Express (1 Day)",
    bestFor: "Quick 1-day weekend trips from Delhi/NCR or Agra.",
    includes: "Private AC cab, driver allowance, tolls, and visits to major Mathura and Vrindavan temples.",
    image: "/c1.png", // Placeholder, you should add actual images to your public/images folder
  },
  {
    id: 2,
    title: "Mathura & Vrindavan Special (2 Days / 1 Night)",
    bestFor: "Families looking for a relaxed 2-day getaway.",
    includes: "1-night hotel stay with breakfast, private cab, and evening Yamuna Aarti.",
    image: "/c2.png",
  },
  {
    id: 3,
    title: "Complete Braj Dham Yatra (3 Days / 2 Nights)",
    bestFor: "Travelers who want to cover all sacred towns without rushing.",
    includes: "Hotel stay, private cab, covering Vrindavan, Mathura, Gokul, Barsana, Nandgaon, and Govardhan.",
    image: "/c3.png",
  },
  {
    id: 4,
    title: "Mathura, Vrindavan & Agra Taj Mahal Combo (3 Days / 2 Nights)",
    bestFor: "Outstation tourists who want to combine spirituality with heritage sightseeing.",
    includes: "Hotel stays, private cab covering Mathura-Vrindavan temples + Taj Mahal and Agra Fort.",
    image: "/c4.png",
  },
  {
    id: 5,
    title: "Full Braj 84 Kos Yatra (5 Days to 7 Days)",
    bestFor: "Devotees looking for a complete pilgrimage across the entire sacred Braj region.",
    includes: "Hotel stays, daily breakfast, vehicle, and guided visits to all 84 Kos holy sites and Kunds.",
    image: "/c5.png",
  },
  {
    id: 6,
    title: "VIP / Customized Family Package",
    bestFor: "Larger groups or families wanting luxury hotel options and VIP temple arrangements.",
    includes: "4-Star/Luxury hotel stay, Innova Crysta or Tempo Traveller, and flexible timing.",
    image: "/c6.png",
  }
];

export function WhatsIncludedAndWho() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12 flex items-center justify-center gap-4">
          <span className="text-orange-300 hidden md:inline-block">✧━━━━</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Choose the Right Package for Your Travel Plan
          </h2>
          <span className="text-orange-300 hidden md:inline-block">━━━━✧</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative h-40 w-full bg-stone-200">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-stone-900 text-orange-400 font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-orange-400 z-10">
                  {pkg.id}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-[15px] leading-tight text-green-900 mb-3 min-h-[45px]">
                  {pkg.title}
                </h3>

                <div className="text-sm mb-3 text-stone-700">
                  <span className="font-semibold text-stone-900">Best for: </span>
                  {pkg.bestFor}
                </div>

                <div className="text-sm mb-4 text-stone-700 flex-grow">
                  <span className="font-semibold text-stone-900">Includes: </span>
                  {pkg.includes}
                </div>

                <button
                  onClick={openModal}
                  className="w-full mt-auto bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-2 rounded-lg transition-colors text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fcf3d1] border border-[#f0e3b6] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-stone-800 font-medium">
            <Calendar className="w-6 h-6 text-stone-700" />
            <p className="text-lg">Lock in your travel dates early to secure the best cabs & hotels.</p>
          </div>

          <button
            onClick={openModal}
            className="w-full md:w-auto bg-[#1a4a2a] hover:bg-[#12381f] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <CalendarCheck className="w-5 h-5" />
            Claim Best Price for Travel Dates
          </button>
        </div>
      </div>
    </section>
  );
}
