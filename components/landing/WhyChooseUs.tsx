"use client";

import { MapPin, Car, SlidersHorizontal, HeadphonesIcon } from "lucide-react";
import { useBookingModal } from "@/components/BookingModalProvider";

export function WhyChooseUs() {
  const { openModal } = useBookingModal();

  const features = [
    {
      icon: MapPin,
      title: "Local Experts",
      desc: "We live here. We know the shortcuts, best eating spots, and quietest times to visit."
    },
    {
      icon: Car,
      title: "Clean & Private Cabs",
      desc: "Well-maintained Sedans, SUVs, and Tempo Travellers driven by polite local drivers."
    },
    {
      icon: SlidersHorizontal,
      title: "Customizable Plans",
      desc: "Want to skip a temple or stay longer at Prem Mandir? We adjust the plan for you."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Local Support",
      desc: "Our team is always a call away to help you throughout your trip."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">

        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <span className="text-orange-300 hidden md:inline-block">✧━━━━</span>
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900">
            Why Families & Devotees Book With Us
          </h2>
          <span className="text-orange-300 hidden md:inline-block">━━━━✧</span>
        </div>

        <div className="border border-orange-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col lg:flex-row">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row gap-4 p-6 lg:w-1/4 ${i !== features.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-orange-100' : ''
                }`}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center text-[#1a4a2a]">
                  <feature.icon className="w-10 h-10" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[16px] font-bold text-stone-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-stone-600 leading-snug">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={openModal}
            className="inline-flex rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-700 transition"
          >
            Confirm Your Seat
          </button>
        </div>
      </div>
    </section>
  );
}
