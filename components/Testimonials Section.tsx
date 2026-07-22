"use client";

import { useBookingModal } from "@/components/BookingModalProvider";
import { Landmark, UserPlus, CircleDollarSign, Clock, CarFront, IndianRupee, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
    const { openModal } = useBookingModal();

    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 flex items-center justify-center gap-4">
                    <span className="text-orange-300 hidden md:inline-block">✧━━━━</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
                        Most Vrindavan Trips Become Stressful. How We Fix It.
                    </h2>
                    <span className="text-orange-300 hidden md:inline-block">━━━━✧</span>
                </div>

                <div className="bg-[#fcfaf5] rounded-3xl overflow-hidden border border-[#f0e8d5] shadow-sm mb-12 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row">
                        {/* Common Travel Problems */}
                        <div className="flex-1">
                            <div className="bg-red-800 text-white text-center py-3 font-semibold text-lg">
                                Common Travel Problems
                            </div>
                            <div className="p-6 md:p-8 space-y-8">
                                {/* Problem 1 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-stone-100 p-2 rounded-lg shrink-0 h-min border border-stone-200">
                                        <Landmark className="w-8 h-8 text-stone-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Missing Temple Timings:</h4>
                                        <p className="text-stone-600 text-sm">Arriving when temples are closed for afternoon breaks.</p>
                                    </div>
                                </div>
                                <hr className="border-stone-200" />
                                {/* Problem 2 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-stone-100 p-2 rounded-lg shrink-0 h-min border border-stone-200">
                                        <UserPlus className="w-8 h-8 text-stone-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Exhausting Walks for Elders:</h4>
                                        <p className="text-stone-600 text-sm">Long walks in hot weather through crowded streets.</p>
                                    </div>
                                </div>
                                <hr className="border-stone-200" />
                                {/* Problem 3 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-stone-100 p-2 rounded-lg shrink-0 h-min border border-stone-200">
                                        <CircleDollarSign className="w-8 h-8 text-stone-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Surprise Extra Costs:</h4>
                                        <p className="text-stone-600 text-sm">Unclear cab bills with extra fees for fuel, tolls, or parking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider with Arrows - visible on md screens */}
                        <div className="hidden md:flex flex-col justify-center items-center relative w-12 bg-[#fcfaf5]">
                            <div className="absolute top-0 bottom-0 w-[1px] bg-[#e6dcc3]"></div>
                            <div className="absolute top-[90px] bg-[#fcfaf5] p-1 rounded-full text-red-800">
                                <ArrowRightCircle className="w-6 h-6 fill-white" />
                            </div>
                            <div className="absolute top-[210px] bg-[#fcfaf5] p-1 rounded-full text-red-800">
                                <ArrowRightCircle className="w-6 h-6 fill-white" />
                            </div>
                            <div className="absolute top-[325px] bg-[#fcfaf5] p-1 rounded-full text-red-800">
                                <ArrowRightCircle className="w-6 h-6 fill-white" />
                            </div>
                        </div>

                        {/* The Vrinda Aura Way */}
                        <div className="flex-1">
                            <div className="bg-[#1a4a2a] text-white text-center py-3 font-semibold text-lg">
                                The Vrinda Aura Way
                            </div>
                            <div className="p-6 md:p-8 space-y-8 bg-[#f5fbf7] h-full border-l border-[#e6dcc3] md:border-l-0">
                                {/* Solution 1 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-full shrink-0 h-min border border-green-200">
                                        <Clock className="w-8 h-8 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-700 mb-1 underline decoration-green-300 underline-offset-4">Smart Scheduling:</h4>
                                        <p className="text-stone-700 text-sm">Drivers who know the exact aarti and door opening hours.</p>
                                    </div>
                                </div>
                                <hr className="border-green-200" />
                                {/* Solution 2 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-full shrink-0 h-min border border-green-200">
                                        <CarFront className="w-8 h-8 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-700 mb-1 underline decoration-green-300 underline-offset-4">E-Rickshaw Support:</h4>
                                        <p className="text-stone-700 text-sm">Priority drop-offs and local transport right up to temple gates.</p>
                                    </div>
                                </div>
                                <hr className="border-green-200" />
                                {/* Solution 3 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-full shrink-0 h-min border border-green-200">
                                        <IndianRupee className="w-8 h-8 text-green-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-700 mb-1 underline decoration-green-300 underline-offset-4">100% Fixed Pricing:</h4>
                                        <p className="text-stone-700 text-sm">Clear quotes with fuel, driver, tolls, and parking included.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <div className="bg-[#fcf3d1] border border-[#f0e3b6] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl shrink-0">🙏</div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-1">Want a trip to Vrindavan with zero headaches?</h3>
                            <p className="text-stone-700 text-sm">Let our local team manage your schedule so you can focus 100% on devotion.</p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={openModal}
                        className="w-full md:w-auto shrink-0 bg-[#1a4a2a] hover:bg-[#12381f] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                    >
                        Skip the Crowds -<br className="md:hidden" /> Plan My Hassle-Free Trip
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.76.45 3.42 1.25 4.86l-1.4 5.14 5.25-1.37C8.5 21.46 10.2 22 12 22c5.52 22 10-4.48 10-10S17.52 2 12 2zm5.55 14.16c-.32.91-1.63 1.55-2.28 1.62-.64.07-1.47.16-4.5-1.12-3.64-1.54-5.99-5.32-6.17-5.56-.18-.24-1.47-1.97-1.47-3.75s.93-2.66 1.25-3.03c.32-.36.7-.45.93-.45.24 0 .47.01.67.01.21 0 .5-.08.77.58.28.69.96 2.37 1.05 2.55.09.18.14.4.02.63-.12.23-.18.37-.36.58-.18.21-.38.46-.54.62-.18.17-.37.35-.16.71.21.36.94 1.56 2.01 2.52 1.38 1.23 2.54 1.62 2.91 1.8.36.18.57.15.79-.11.21-.26.93-1.09 1.18-1.47.24-.37.49-.31.83-.18.34.13 2.13 1 2.49 1.18.36.18.61.27.69.43.08.16.08.92-.24 1.83z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}