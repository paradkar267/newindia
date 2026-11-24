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
      <section className="relative w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[440px] flex items-center overflow-hidden bg-[#0A1A10] py-8 sm:py-12 lg:py-14 border-b border-black/[0.05]">
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

        {/* Stronger mobile overlay for crisp text contrast over bright wooden produce crates */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75 sm:bg-gradient-to-r sm:from-black/55 sm:via-black/25 sm:to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {products.map((product) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.45 }}
                className="flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-black/[0.07] shadow-sm hover:shadow-xl hover:border-[#006B35]/20 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#F7F6F2] border-b border-black/[0.05] shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Description & Specs */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3.5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220]">
                        <span className="w-5 h-[2px] bg-[#F58220] rounded-full inline-block" />
                        <span>{product.tag}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#111814] font-heading tracking-tight group-hover:text-[#006B35] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#556059] leading-relaxed font-normal">
                      {product.specs}
                    </p>

                    {/* 3 Key Quality Features */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-0.5">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18201B]"
                        >
                          <CheckCircle2 size={14} className="text-[#006B35] shrink-0" />
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
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-3.5 border-t border-black/[0.06]">
                    <a
                      href={`https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20quotation%20for%20${encodeURIComponent(
                        product.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Enquire for {product.name}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom 4-Pillar Feature Bar (Matches Reference Image Perfectly) */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-black/[0.06] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x divide-black/[0.06]">
            {/* Col 1 */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Globe2 size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs sm:text-base font-extrabold text-[#111814] font-heading leading-tight">25+ Countries</h4>
                <p className="text-[11px] sm:text-xs text-[#686F6B] leading-snug">Exporting Freshness Globally</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFF6EE] text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/20 shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs sm:text-base font-extrabold text-[#111814] font-heading leading-tight">100% Quality</h4>
                <p className="text-[11px] sm:text-xs text-[#686F6B] leading-snug">Assured Products</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Leaf size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs sm:text-base font-extrabold text-[#111814] font-heading leading-tight">Farm-Fresh</h4>
                <p className="text-[11px] sm:text-xs text-[#686F6B] leading-snug">From Indian Farms</p>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Handshake size={20} />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs sm:text-base font-extrabold text-[#111814] font-heading leading-tight">Reliable Partner</h4>
                <p className="text-[11px] sm:text-xs text-[#686F6B] leading-snug">Building Global Trust</p>
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
