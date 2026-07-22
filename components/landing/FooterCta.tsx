"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useBookingModal } from "@/components/BookingModalProvider";

export function FooterCta() {
  const { openModal } = useBookingModal();

  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Start Your Spiritual Journey Today</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-orange-500" />
            <span className="text-lg">Vrindavan, Mathura, UP</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-orange-500" />
            <span className="text-lg">+91 9259129929</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-orange-500" />
            <span className="text-lg">info@vrindaauratour.com</span>
          </div>
        </div>

        <Button onClick={openModal} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-xl mb-16 shadow-lg shadow-orange-500/20">
          Book Your Personalized Tour Today
        </Button>

        <div className="border-t border-stone-800 pt-8 text-sm">
          © {new Date().getFullYear()} Vrinda Aura Tour. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
