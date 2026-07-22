import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-8 md:p-12 max-w-lg w-full text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
          Your booking request has been received successfully. Our team will contact you shortly to confirm your personalized spiritual itinerary.
        </p>

        <Link 
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-md shadow-orange-500/20"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
