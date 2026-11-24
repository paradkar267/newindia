"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Download, FileText, ExternalLink, Eye, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BrochuresPage() {
  const brochureImages = [
    { src: "/brochure/B1.jpg", title: "Corporate Cover & Introduction" },
    { src: "/brochure/B2.jpg", title: "Direct Farmer Procurement" },
    { src: "/brochure/B3.jpg", title: "Premium Spices Portfolio" },
    { src: "/brochure/B4.jpg", title: "Basmati Rice & Grains" },
    { src: "/brochure/B5.jpg", title: "Pulses & Lentils Range" },
    { src: "/brochure/B6.jpg", title: "Certified Organic Produce" },
    { src: "/brochure/B8.jpg", title: "Fresh Fruits & Cold Chain" },
    { src: "/brochure/B9.jpg", title: "Vegetables & Seasonal Harvest" },
    { src: "/brochure/B10.jpg", title: "Packaging & Quality Grades" },
    { src: "/brochure/B11.jpg", title: "Phytosanitary & Lab Testing" },
    { src: "/brochure/B12.jpg", title: "International Port Logistics" },
    { src: "/brochure/B13.jpg", title: "Export Documentation Workflow" },
    { src: "/brochure/B14.jpg", title: "Global Buyer Testimonials" },
    { src: "/brochure/B15.jpg", title: "Trade Summits & Accreditations" },
    { src: "/brochure/B16.jpg", title: "Consultancy & IEC Services" },
    { src: "/brochure/B17.jpg", title: "Back Cover & Contact Details" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#202522]">
      {/* ==== HEADER SECTION ==== */}
      <section className="relative w-full py-16 sm:py-28 lg:py-36 flex items-center justify-center text-center overflow-hidden bg-[#0A1A10] text-white">
        <Image
          src="/brochures-hero-bg.png"
          alt="New India Export Catalogues & Brochures - High Quality Global Trade Publications"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Balanced cinematic overlay: preserves luxury catalogue stacks on left and open glossy trade catalogue on right, with dark center gradient for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#004B28]/45 via-black/30 to-[#004B28]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-[#F58220]" />
            <span>Publications & Literature</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Brochures & Catalogues
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 text-base sm:text-lg font-normal leading-relaxed drop-shadow-md">
            Explore our visual catalogue pages of export commodities and trade capabilities.
          </p>
        </div>
      </section>

      {/* ==== VISUAL BROCHURE SPREADS GRID ==== */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#202522]">
                Visual Brochure Catalogue Pages
              </h2>
              <p className="text-xs sm:text-sm text-[#686F6B]">
                Click on any page to view high-resolution fullscreen preview.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#006B35] bg-[#EAF5EC] px-3 py-1.5 rounded-full">
              {brochureImages.length} Catalogue Pages
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brochureImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedImage(item.src)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-black/[0.08] cursor-pointer flex flex-col"
              >
                <div className="relative h-80 w-full bg-[#F1F2F0] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-white text-[#202522] shadow-lg">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-black/[0.04] bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                      Page {i + 1}
                    </span>
                    <h4 className="text-xs font-semibold text-[#202522] truncate max-w-[180px]">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowUpRight size={14} className="text-[#686F6B] group-hover:text-[#006B35]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== FULLSCREEN LIGHTBOX VIEWER ==== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white text-white hover:text-black p-2.5 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="relative w-full max-w-4xl h-[85vh]">
              <Image
                src={selectedImage}
                alt="Brochure High Resolution Preview"
                fill
                quality={100}
                className="object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
