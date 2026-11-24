"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Award, Sparkles } from "lucide-react";

export default function AboutShowcase() {
  const slides = [
    { src: "/f1.jpg", caption: "Global Trade Delegations & Export Accreditations" },
    { src: "/f2.jpg", caption: "National Export Promotion Summit" },
    { src: "/f3.jpg", caption: "Agriculture Excellence & Farmer Empowerment" },
    { src: "/f4.jpg", caption: "International Buyer Meets & Bilateral Trade" },
    { src: "/f5.jpg", caption: "Recognized Leadership in Agricultural Exports" },
    { src: "/f6.jpg", caption: "Export Quality Testing & Verification" },
    { src: "/f7.jpg", caption: "World Trade Center Exhibitions" },
    { src: "/f8.jpg", caption: "Ministry & Trade Authority Summits" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#FBF6EF] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md border border-black/[0.06] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Verified Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative bg-[#F1F2F0] rounded-2xl overflow-hidden shadow-inner h-[380px] sm:h-[440px] border border-black/[0.08] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[index].src}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[index].src}
                      alt={slides[index].caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain p-2 sm:p-4"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrow Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-black/[0.06] z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-black/[0.06] z-10"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm p-3 border-t border-black/[0.06] flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-[#202522] truncate pr-2">
                    {slides[index].caption}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-[#006B35]" : "w-1.5 bg-neutral-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visionary Bio & Leadership Statement */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={13} className="text-[#F58220]" />
                <span>Leadership & Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202522] tracking-tight leading-tight">
                The Visionary Behind <span className="text-[#006B35]">New India Export</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#686F6B] leading-relaxed font-light">
                <p>
                  <strong className="font-semibold text-[#202522]">Mr. Saurabh Nathuram Yadav</strong> is the driving force behind New India Export. With a bold vision to empower Indian farmers and elevate the global agricultural trade, he combines deep market expertise, innovation, and a strong commitment to transparency.
                </p>
                <p>
                  Under his leadership, the company bridges local agricultural producers with international markets, ensuring farmers thrive with fair value while overseas buyers receive unparalleled quality and precision in every shipment.
                </p>
              </div>

              {/* Quote Block */}
              <div className="p-5 rounded-2xl bg-[#EAF5EC]/60 border-l-4 border-[#006B35] space-y-2">
                <Quote size={22} className="text-[#006B35]" />
                <p className="italic text-base sm:text-lg font-medium text-[#202522]">
                  "Empowering farmers, delivering excellence, and redefining Indian exports globally."
                </p>
                <div className="text-xs font-bold text-[#006B35] uppercase tracking-wider">
                  — Saurabh Nathuram Yadav, Founder & Managing Director
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
