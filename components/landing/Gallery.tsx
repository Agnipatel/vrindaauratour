"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/v.png", alt: "Vrindavan Temple", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/mt.png", alt: "Mathura", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/g.png", alt: "Gokul", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/b.png", alt: "Barsana", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  // Adding a few more placeholders just in case, but reusing the existing ones
  { src: "/v.png", alt: "Pilgrims", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/mt.png", alt: "Aarti", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-4">
            <span className="text-orange-300 hidden md:inline-block">✧━━━━</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Glimpses of the Divine Journey
            </h2>
            <span className="text-orange-300 hidden md:inline-block">━━━━✧</span>
          </div>
          <p className="text-stone-600 mt-2">Memories captured by our pilgrims across Braj</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow group ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-stone-300"></div> {/* Fallback bg */}
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-medium text-lg drop-shadow-md">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
