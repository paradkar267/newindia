"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, CheckCircle2, Globe2, ShieldCheck, Handshake, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FruitsVegetablesPage() {
  const products = [
    {
      name: "FRESH LEMON",
      tag: "EXPORT GRADE QUALITY",
      image: "/fruits/lemons.jpg",
      specs: "Fresh lemons are grown in the fertile lands of India, known for their superior quality, rich taste and high nutritional value. Ideal for international markets.",
      features: ["Export Quality", "Rich in Vitamin C", "Long Shelf Life"],
      packaging: "10 / 20 / 25 KGS • 25/26 Lemon in 1KG • 8 KGS Top-Bottom Corrugated Box.",
    },
    {
      name: "RED ONION",
      tag: "PREMIUM QUALITY",
      image: "/fruits/onion.jpg",
      specs: "Red onions from India are known for their vibrant color, strong flavor and excellent quality. Sourced from trusted farms for global markets.",
      features: ["Export Grade", "Long Shelf Life", "Natural & Fresh"],
      packaging: "Net, PP, Mesh/Leno, or Jute bags • Sizes: 25 kg, 30 kg, 50 kg • Onion Diameter: 55mm+ Export Grade.",
    },
    {
      name: "GREEN CHILLY",
      tag: "SPICE HARVEST QUALITY",
      image: "/fruits/chili.jpg",
      specs: "Chilly is a prime agricultural produce exported to the Middle East and Europe on a large scale. Sorted for firmness, vibrant green color, and uniform length.",
      features: ["Medium to Hot Pungency", "Uniform Length Grading", "Cold Chain Preserved"],
      packaging: "4.5 KGS Top-Bottom Corrugated Box or in Leno/Mesh Bags.",
    },
    {
      name: "ALPHONSO / HAPUS MANGO",
      tag: "GI CERTIFIED QUALITY",
      image: "/fruits/mango.jpg",
      specs: "Origin: Ratnagiri / Devgad geographical indication. Rich source of Vitamin A and minerals. Procured directly from accredited coastal orchards, ensuring unadulterated aroma.",
      features: ["Devgad / Ratnagiri GI", "Natural Tree Ripened", "Carbide-Free Certified"],
      packaging: "1 or 2 dozen mangoes in corrugated box • 5 dozen in export corrugated box.",
    },
    {
      name: "NAGPUR & KINNOW ORANGE",
      tag: "SIGNATURE CITRUS HARVEST",
      image: "/fruits/orange.jpg",
      specs: "Fresh Indian oranges are rich in Vitamin C and antioxidants, known for their natural sweetness, juiciness, and vibrant color. Sourced directly from trusted Vidarbha growers.",
      features: ["Vidarbha GI Tagged", "High Juice Content", "Export Waxing & Graded"],
      packaging: "Export Corrugated Boxes with individual paper wrap and fruit trays (7kg / 10kg).",
    },
    {
      name: "FRESH BRINJAL (EGGPLANT)",
      tag: "FARM-GATE FRESHNESS",
      image: "/fruits/brinjal.jpg",
      specs: "Fresh brinjals are hand-picked from farms to ensure firmness, shine, and deep vibrant color. Rich in dietary fiber and essential nutrients, perfect for international cuisines.",
      features: ["Hand-Picked Firmness", "High Dietary Fiber", "Ventilated Box Packed"],
      packaging: "Ventilated Corrugated Boxes • Standard 5kg / 10kg export packs.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full overflow-hidden bg-[#0A1A10] pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28">
        {/* Authentic Reference Design Background Artwork with Bottom Curved Wave */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/produce/rustic-farm-crate-produce.png"
            alt="Fruits and Vegetables Export - New India Export"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>

        {/* Soft overlay on left side for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              <Leaf size={13} className="text-[#84E07B]" />
              <span>FRESH HARVEST FROM INDIA</span>
            </div>

            {/* Signature Two-Tone Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-white drop-shadow-md">
              Fruits &amp; <span className="text-[#F58220]">Vegetables</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-white/95 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Freshness from accredited Indian farms – cold-chain handled and dispatched worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ==== PRODUCT CATALOG SECTION ==== */}
      <section id="catalog" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF7F2]">
        {/* Floating Decorative Leaves on Margins (Matching Reference) */}
        <div className="absolute top-1/4 -left-2 w-12 sm:w-16 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/produce/produce-leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 -right-2 w-14 sm:w-18 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/produce/produce-leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14 relative z-10">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              {/* Image Container */}
              <div className="relative w-full lg:w-1/2 h-64 sm:h-76 lg:h-84 rounded-2xl overflow-hidden bg-[#F7F6F2] shadow-inner group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Description & Specs */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220]">
                    <span className="w-5 h-[2px] bg-[#F58220] rounded-full inline-block" />
                    <span>{product.tag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111814] font-heading tracking-tight">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-[15px] text-[#556059] leading-relaxed font-normal">
                  {product.specs}
                </p>

                {/* 3 Key Quality Features */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18201B]"
                    >
                      <CheckCircle2 size={15} className="text-[#006B35]" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* Packaging Specs */}
                {product.packaging && (
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-black/[0.06] text-xs text-[#686F6B] leading-relaxed">
                    <span className="font-bold text-[#006B35]">Export Packaging: </span>
                    {product.packaging}
                  </div>
                )}

                {/* Action CTA Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20quotation%20for%20${encodeURIComponent(
                      product.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Enquire for {product.name}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom 4-Pillar Feature Bar (Matches Reference Image Perfectly) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-black/[0.06]">
            {/* Col 1 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Globe2 size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">25+ Countries</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Exporting Freshness Globally</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#FFF6EE] text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/20 shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">100% Quality</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Assured Products</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Leaf size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Farm-Fresh</h4>
                <p className="text-xs text-[#686F6B] leading-snug">From Indian Farms</p>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Handshake size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Reliable Partner</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Building Global Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== BOTTOM CURVED WAVE FRAME ==== */}
      <div className="relative w-full h-14 sm:h-18 lg:h-22 overflow-hidden bg-[#FAF7F2]">
        <Image
          src="/produce/produce-bottom-wave.png"
          alt="Curved wave accent frame"
          fill
          className="object-cover object-bottom pointer-events-none select-none"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
