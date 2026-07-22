"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function BookingForm({ onSuccess }: { onSuccess?: () => void }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
      date: formData.get("date"),
      optionalContact: formData.get("optionalContact"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        if (onSuccess) onSuccess();
        router.push("/thank-you");
      } else {
        setError(result.message || "Failed to submit booking.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 max-w-lg w-full mx-auto">
      <div className="bg-[#1f2937] px-8 py-5">
        <h3 className="text-white text-2xl font-bold">Book this tour</h3>
      </div>
      <div className="p-8">
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm border border-red-100">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            name="name"
            required
            type="text" 
            placeholder="Name" 
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input 
              name="email"
              required
              type="email" 
              placeholder="Email" 
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              name="contactNumber"
              required
              type="tel" 
              placeholder="Contact Number" 
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <input 
                name="date"
                required
                type="date" 
                placeholder="dd-mm-yyyy" 
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              />
            </div>
            <input 
              name="optionalContact"
              type="text" 
              placeholder="Contact (Optional)" 
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea 
            name="message"
            placeholder="Message" 
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] disabled:bg-blue-400 text-white font-medium py-3.5 rounded-md transition-colors text-lg"
          >
            {isSubmitting ? "Submitting..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
