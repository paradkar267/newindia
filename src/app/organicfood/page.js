"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Leaf, ArrowRight, ShieldCheck, Globe2, Handshake, X } from "lucide-react";

export default function OrganicFoodsPage() {
  const categories = [
    {
      name: "Organic Vegetables",
      highlight: "Vegetables",
      desc: "Chemical-free, pesticide-free fresh farm vegetables harvested with zero artificial additives.",
      img: "/veg1.jpg",
      link: "/fruitsandvegetables",
    },
    {
      name: "Organic Fruits",
      highlight: "Fruits",
      desc: "Naturally ripened, nutrient-dense fresh fruits maintaining optimal sweetness and juiciness.",
      img: "/veg.jpg",
      link: "/fruitsandvegetables",
    },
    {
      name: "Organic Spices",
      highlight: "Spices",
      desc: "Pure organic turmeric, cumin, black pepper, and coriander grown in certified organic soil.",
      img: "/Spices.jpg",
      link: "/spices",
    },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[440px] flex items-center overflow-hidden bg-[#0A1A10] py-8 sm:py-12 lg:py-14 border-b border-black/[0.05]">
        {/* Authentic Reference Design Background Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/organic/organic-hero-bg.png"
            alt="Certified Organic Foods Indian Harvest - New India Export"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Stronger mobile overlay so white text stays crisp across sunny wooden produce crate */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75 sm:bg-gradient-to-r sm:from-black/55 sm:via-black/25 sm:to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              <Leaf size={13} className="text-[#84E07B]" />
              <span>100% ORGANIC &amp; NATURAL</span>
            </div>

            {/* Signature Two-Tone Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-white drop-shadow-md">
              Certified <span className="text-[#F58220]">Organic Foods</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-white/95 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Fresh, pure, and 100% natural agricultural products sourced directly from accredited Indian organic farms.
            </p>
          </div>
        </div>
      </section>

      {/* ==== CATEGORIES SECTION ==== */}
      <section id="categories" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF6EF]">
        {/* Floating Decorative Leaves on Margins (Matching Reference) */}
        <div className="absolute top-1/4 -left-2 w-12 sm:w-16 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/organic/organic-leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 -right-2 w-14 sm:w-18 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/organic/organic-leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14 relative z-10">
          {/* Section Heading */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Leaf size={12} className="text-[#006B35]" />
              <span>EXPLORE OUR ORGANIC CATEGORIES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading text-[#111814]">
              Explore Our <span className="text-[#F58220]">Organic</span> <span className="text-[#006B35]">Categories</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#556059] leading-relaxed">
              Clean label, certified organic sourcing catering to premium health-conscious international markets.
            </p>
          </div>

          {/* 3 Premium Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-black/[0.07] hover:border-[#006B35]/20 transition-all flex flex-col justify-between group hover:-translate-y-1.5 duration-300"
              >
                {/* Photo with Overlay Badge */}
                <div
                  className="relative w-full h-56 sm:h-64 cursor-pointer bg-[#F7F6F2] overflow-hidden border-b border-black/[0.05] shrink-0"
                  onClick={() => setSelectedImg(cat.img)}
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-7 text-center flex flex-col justify-between flex-grow gap-4">
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#18201B] flex items-center justify-center gap-1.5 group-hover:text-[#006B35] transition-colors">
                      <Leaf size={15} className="text-[#006B35]" />
                      <span>
                        Organic <span className="text-[#F58220]">{cat.highlight}</span>
                      </span>
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#556059] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06]">
                    <Link
                      href={cat.link}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-[13px] font-bold shadow-xs hover:shadow-md transition-all group-hover:translate-x-0.5"
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== BOTTOM CURVED WAVE FRAME ==== */}
      <div className="relative w-full h-14 sm:h-18 lg:h-22 overflow-hidden bg-[#FBF6EF]">
        <Image
          src="/organic/organic-bottom-wave.png"
          alt="Curved wave accent frame"
          fill
          className="object-cover object-bottom pointer-events-none select-none"
          sizes="100vw"
        />
      </div>

      {/* ==== LIGHTBOX MODAL ==== */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative w-full max-w-3xl h-[70vh]">
              <Image
                src={selectedImg}
                alt="Organic Produce"
                fill
                className="object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
