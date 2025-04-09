"use client";

import Image from "next/image";

const images = [
  "/images/altima-foto-11.png",
  "/images/altima-poto-2.png",
  "/images/altima-poto-3.png",
  "/images/altima-poto-4.png",
  "/images/altima-poto-5.png",
  "/images/altima-poto-6.png",
  "/images/altima-poto-7.png",
  "/images/altima-foto-8.png",
  "/images/altima-foto-9.png",
  "/images/altima-foto-10.png",
  "/images/altima-foto-11.png",
  "/images/altima-foto-12.png",
  "/images/Louvre-Abu-Dhabi.png",
  "/images/pulau-yas.png",
  "/images/Qasr-Al-Watan.png",
  "/images/TamasyaCorniche.png"
];

export default function PortfolioCard() {
  return (
    <div className="px-4 py-10 lg:px-20">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Optima Portfolio ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
