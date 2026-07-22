"use client";

import React, { createContext, useContext, useState } from "react";
import { BookingForm } from "./landing/BookingForm";
import { X } from "lucide-react";

interface BookingModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function BookingModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BookingModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg my-auto animate-in fade-in zoom-in duration-200">
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 lg:-right-12 z-10 p-2 bg-white rounded-full text-gray-900 shadow-xl hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <BookingForm onSuccess={closeModal} />
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (context === undefined) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
