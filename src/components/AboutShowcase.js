"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutShowcase() {
  const slides = [
    { src: "/f1.jpg", caption: "Saudi Agriculture International Trade Expo", pos: "object-[26%_25%]" },
    { src: "/f2.jpg", caption: "Meeting Hon'ble Union Minister Shri Nitin Gadkari", pos: "object-[50%_18%]" },
    { src: "/f3.jpg", caption: "Export Leadership & Agro-Trade Keynote", pos: "object-[50%_18%]" },
    { src: "/f4.jpg", caption: "Bharat Manufacturing & Export Summit 2025 — Speaker", pos: "object-[50%_20%]" },
    { src: "/f5.jpg", caption: "Export Growth Summit & Industry Felicitation", pos: "object-[50%_22%]" },
    { src: "/f6.jpg", caption: "National Export Excellence Award Ceremony", pos: "object-[50%_24%]" },
    { src: "/f7.jpg", caption: "International Trade & Buyer Delegation", pos: "object-[50%_22%]" },
    { src: "/f8.jpg", caption: "Global Embassy & Bilateral Agro Promotion", pos: "object-[50%_22%]" },
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
    <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#FBF6EF] overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-40 pointer-events-none" />
      <div className="absolute -top-24 left-[-5%] w-96 h-96 bg-gradient-to-br from-[#EAF5EC] to-transparent rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute -bottom-24 right-[-5%] w-96 h-96 bg-gradient-to-tl from-[#FFF3E6] to-transparent rounded-full blur-3xl pointer-events-none opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Executive Showcase Container Card */}
        <div className="relative bg-white rounded-3xl p-5 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(6,58,30,0.08)] border border-[#006B35]/10 overflow-hidden">
          {/* Top Signature Saffron-to-Emerald Hairline */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#006B35] via-[#F58220] to-[#004B28]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* Left 6 Columns: Cinema-Framed Ambient Gallery Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative bg-[#062415] rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[460px] lg:h-[480px] border border-[#006B35]/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[index].src}
                    initial={{ opacity: 0.2, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.2 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[index].src}
                      alt={slides[index].caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className={`object-cover ${slides[index].pos}`}
                    />
                    {/* Top and bottom subtle vignettes for badge & dock legibility */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Status Pill */}
                <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                    <span>Founder Highlights</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white/95 tabular-nums">
                    {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Integrated Dark Frosted Control Dock */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent pt-12 pb-3.5 px-4 sm:px-5 z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1 space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {slides[index].caption}
                      </p>
                      <div className="flex items-center gap-1.5">
                        {slides.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              i === index ? "w-6 bg-[#F58220]" : "w-1.5 bg-white/35 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Prev / Next Navigation Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous image"
                        className="h-9 w-9 rounded-full bg-white/12 hover:bg-[#F58220] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                      >
                        <ChevronLeft size={17} />
                      </button>
                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next image"
                        className="h-9 w-9 rounded-full bg-white/12 hover:bg-[#F58220] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                      >
                        <ChevronRight size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 6 Columns: Executive Bio & Deep Emerald Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/20 text-[#006B35] text-[11px] font-bold uppercase tracking-[0.12em]">
                  <Award size={13} className="text-[#F58220] shrink-0" />
                  <span>Leadership &amp; Vision</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0D1F14] font-heading tracking-[-0.015em] leading-[1.15]">
                  The Visionary Behind{" "}
                  <span className="text-[#006B35]">New India</span>{" "}
                  <span className="text-[#F58220]">Export</span>
                </h2>

                <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-semibold text-[#4D5852]">
                  <span className="inline-flex items-center gap-1.5 text-[#004B28]">
                    <CheckCircle2 size={14} className="text-[#006B35]" />
                    Founder &amp; Managing Director
                  </span>
                  <span className="text-[#006B35]/30">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#F58220]" />
                    International Trade Speaker
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-[#4D5852] leading-[1.7]">
                <p>
                  <strong className="font-semibold text-[#111814]">Mr. Saurabh Nathuram Yadav</strong> is the driving force behind New India Export. With a bold vision to empower Indian farmers and elevate the global agricultural trade, he combines deep market expertise, innovation, and a strong commitment to transparency.
                </p>
                <p>
                  Under his leadership, the company bridges local agricultural producers with international markets, ensuring farmers thrive with fair value while overseas buyers receive unparalleled quality and precision in every shipment.
                </p>
              </div>

              {/* Deep Emerald Executive Statement Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#063A1E] to-[#042413] text-white p-5 sm:p-6 shadow-lg overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#F58220]/10 blur-xl pointer-events-none" />
                <div className="relative z-10 flex items-start gap-3.5">
                  <span className="w-9 h-9 rounded-xl bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] flex items-center justify-center shrink-0 mt-0.5">
                    <Quote size={16} />
                  </span>
                  <div className="space-y-2.5">
                    <p className="italic text-sm sm:text-[16px] font-medium text-white/95 leading-relaxed">
                      &ldquo;Empowering farmers, delivering excellence, and redefining Indian exports globally.&rdquo;
                    </p>
                    <div className="text-[11px] font-bold text-[#F58220] uppercase tracking-wider">
                      — Saurabh Nathuram Yadav · Founder &amp; Managing Director
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
