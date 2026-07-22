"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, PhoneCall } from "lucide-react";

const faqs = [
  {
    q: "Do you pick up from Delhi Airport or homes in Delhi NCR?",
    a: "Yes. We offer 24/7 doorstep pickup and drop-off from Delhi Airport, railway stations, or your home in Delhi, Gurgaon, or Noida.",
  },
  {
    q: "Is this tour suitable for elderly people who cannot walk much?",
    a: "Yes! We organize electric rickshaws for narrow lanes where cars cannot go, so senior citizens don't have to walk long distances.",
  },
  {
    q: "Are meals included in the package?",
    a: "Daily breakfast is included with hotel stays. For lunch and dinner, our drivers take you to clean, pure-vegetarian restaurants.",
  },
  {
    q: "How do I confirm my booking?",
    a: "You can talk to us on WhatsApp or phone, choose your package, and pay a small advance to lock in your cab and hotel.",
  }
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-5 py-2 text-sm font-semibold">
            FAQs
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-orange-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-7 py-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-orange-600 transition-transform duration-300 shrink-0 ml-4 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6 text-gray-600 leading-8">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-[#fcfaf5] rounded-3xl p-8 border border-[#e6dcc3] shadow-sm mb-12 text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-3">Still have doubts or custom requests?</h3>
          <p className="text-stone-600 mb-6">We reply instantly on WhatsApp to answer all your travel questions.</p>
          <a 
            href="#" // Add your WhatsApp link here
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-8 rounded-full transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Live on WhatsApp Now
          </a>
        </div>

        {/* Final CTA */}
        <div className="bg-[#1a4a2a] rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to visit Vrindavan?</h2>
            <p className="text-lg text-green-100 mb-2">Let us handle all the travel arrangements.</p>
            <p className="text-green-200 mb-8 max-w-xl mx-auto">Speak with a local travel expert today and get a custom itinerary in 5 minutes.</p>
            
            <a 
              href="#" // Add your phone link here
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg text-lg"
            >
              <PhoneCall className="w-6 h-6" />
              Call Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}