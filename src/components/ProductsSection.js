"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Spices & Seasonings",
      subBadge: "AROMATIC & CURCUMIN-RICH",
      desc: "High-curcumin, rich aroma and authentic Indian spices.",
      tags: ["Turmeric", "Cumin", "Cardamom", "Chilli"],
      img: "/products/card-spices.jpg",
      link: "/spices",
    },
    {
      name: "Grains, Cereals & Pulses",
      subBadge: "PREMIUM QUALITY",
      desc: "Export-grade quality grains and pulses for global nutrition.",
      tags: ["Rice", "Wheat", "Toor Dal", "Chickpeas"],
      img: "/products/card-grains.jpg",
      link: "/cerealsandpulses",
    },
    {
      name: "Fresh Fruits & Vegetables",
      subBadge: "FARM FRESH",
      desc: "Premium quality fresh produce from India's fertile lands.",
      tags: ["Mango", "Grapes", "Pomegranate", "Onion"],
      img: "/products/card-fruits.jpg",
      link: "/fruitsandvegetables",
    },
    {
      name: "Certified Organic Food",
      subBadge: "PURE & NATURAL",
      desc: "Chemical-free, pesticide-free produce.",
      tags: ["Organic Vegetables", "Organic Fruits", "Organic Spices"],
      img: "/products/card-organic.jpg",
      link: "/organicfood",
    },
    {
      name: "Indian Toys & Handicrafts",
      subBadge: "TRADITIONAL CRAFTS",
      desc: "Safe, non-toxic handcrafted wooden toys.",
      tags: ["Wooden Toys", "Handicrafts", "Decorative Items"],
      img: "/products/card-toys.jpg",
      link: "/toys",
    },
    {
      name: "Specialty Agro Products",
      subBadge: "HIGH VALUE PRODUCTS",
      desc: "Unique agricultural products for global markets.",
      tags: ["Millets", "Herbs", "Superfoods"],
      img: "/products/card-specialty.jpg",
      link: "/others",
    },
  ];

  return (
    <section id="products" className="relative scroll-mt-20 lg:scroll-mt-24 w-full py-12 sm:py-20 lg:py-24 bg-[#FBF6EF] overflow-hidden">
      {/* Master Artwork Background from mockup with farmland, mountains, and curved corner accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/products/what-we-export-bg.png"
          alt="Agricultural background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Smooth Top & Bottom Transitions into Warm Ivory */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-32 bg-gradient-to-t from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Top Green Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/20 text-[#006B35] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="text-xs">🍃</span>
              <span className="font-extrabold text-[#006B35]">EXPORT PORTFOLIO</span>
              <span className="text-gray-400 font-normal">|</span>
              <span className="font-semibold text-[#006B35]/90 normal-case">Certified Global Trade</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#063A1E] leading-tight">
              What We <span className="text-[#F58220]">Export</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
              Delivering India&apos;s finest agricultural commodities, grains, and farm-fresh produce to international markets with strict quality parameters and multi-modal logistics.
            </p>
          </div>

          {/* Action Link: View Complete Product Catalogues */}
          <Link
            href="/brochures"
            className="self-start md:self-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0A301D] hover:bg-[#062214] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-colors group shrink-0"
          >
            <span>View Complete Product Catalogues</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Bento Product Cards Grid (2 columns on mobile, 3 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7">
          {products.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#141916] border border-white/10 hover:border-[#F58220]/70 flex flex-col justify-end min-h-[250px] sm:min-h-[380px]"
            >
              {/* Card Photo Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141916] via-[#141916]/55 sm:via-[#141916]/40 to-black/10 group-hover:via-[#141916]/25 transition-colors duration-500" />
              </div>

              {/* Card Bottom Content Area */}
              <div className="relative z-10 p-3.5 sm:p-7 text-white space-y-1.5 sm:space-y-3 pt-16 sm:pt-28">
                {/* Orange Sub-badge */}
                <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest text-[#F58220] leading-tight">
                  {item.subBadge}
                </div>

                {/* Main Title */}
                <h3 className="text-sm sm:text-2xl font-bold font-heading tracking-tight text-white group-hover:text-amber-200 transition-colors drop-shadow-xs leading-snug">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-sm text-white/80 line-clamp-2 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[9px] sm:text-[11px] text-white/95 border border-white/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-2.5 sm:pt-3.5 flex items-center justify-between gap-1.5 border-t border-white/10 text-[11px] sm:text-xs">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 sm:gap-1.5 font-bold text-white group-hover:text-[#F58220] transition-colors leading-tight"
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={13} className="shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={item.link}
                    aria-label={`Explore ${item.name}`}
                    className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-full border border-white/30 group-hover:border-[#F58220] group-hover:bg-[#F58220] flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <ArrowRight size={12} className="text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
