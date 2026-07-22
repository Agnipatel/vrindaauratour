"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/components/BookingModalProvider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useBookingModal();

  const links = [
    { name: "Home", href: "#" },
    { name: "Why Us", href: "#why-us" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-600">Vrinda Aura</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Button onClick={openModal} className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button onClick={() => { setIsOpen(false); openModal(); }} className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
