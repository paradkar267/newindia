"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, MessageCircle, Globe2, ShieldCheck, Handshake, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CerealsAndPulsesPage() {
  const [showAllVarieties, setShowAllVarieties] = useState(false);

  const basmatiRice = [
    { no: 1, name: "1121 White Sella Basmati Rice", moq: "1 Ton Min", length: "8.35+ mm" },
    { no: 2, name: "1121 Golden Sella Basmati Rice", moq: "1 Ton Min", length: "8.35+ mm" },
    { no: 3, name: "1509 Steam Basmati Rice", moq: "1 Ton Min", length: "8.35+ mm" },
    { no: 4, name: "Pusa Basmati Rice", moq: "1 Ton Min", length: "7.85+ mm" },
    { no: 5, name: "IR 64 Non Basmati Rice", moq: "1 Ton Min", length: "6.00+ mm" },
    { no: 6, name: "PR 106 Non Basmati Rice", moq: "1 Ton Min", length: "6.80+ mm" },
    { no: 7, name: "1509 White Sella Basmati Rice", moq: "1 Ton Min", length: "8.30+ mm" },
    { no: 8, name: "1509 Golden Sella Basmati Rice", moq: "1 Ton Min", length: "8.35+ mm" },
    { no: 9, name: "Sugandha White Sella Rice", moq: "1 Ton Min", length: "7.85+ mm" },
    { no: 10, name: "Sugandha Golden Sella Rice", moq: "1 Ton Min", length: "7.85+ mm" },
    { no: 11, name: "Sugandha Steam Rice", moq: "1 Ton Min", length: "7.85+ mm" },
    { no: 12, name: "PR 11 White Sella Rice", moq: "1 Ton Min", length: "6.80+ mm" },
  ];

  const displayedVarieties = showAllVarieties ? basmatiRice : basmatiRice.slice(0, 6);

  const nonBasmati = [
    "JAI SHREE RAM RICE",
    "AROMATIC CHINNOR RICE",
    "MASOORI RICE",
    "AROMATIC AMBIA MOHAR",
    "AROMATIC PARVATI SUT RICE",
  ];

  const otherItems = [
    { name: "SORGHUM (JOWAR)", img: "/cereals/jowar.jpg", desc: "Wholesome gluten-free millet rich in dietary fiber." },
    { name: "WHEAT (GEHU)", img: "/cereals/wheat.jpg", desc: "High protein, golden milling & durum export wheat." },
    { name: "MAIZE (YELLOW CORN)", img: "/cereals/maize.jpg", desc: "High starch, animal feed & food processing grain." },
    { name: "SOYABEAN", img: "/cereals/soyabean.jpg", desc: "Non-GMO, high oil & protein content legume." },
    { name: "PEARL MILLET (BAJRA)", img: "/cereals/pear.jpg", desc: "Drought-resilient nutritious grain high in iron." },
    { name: "RED GRAM (TOOR DAL)", img: "/cereals/redgram.jpg", desc: "Machine cleaned, polished & unpolished protein staple." },
    { name: "BLACK GRAM (URAD DAL)", img: "/cereals/blackgram.jpg", desc: "Whole and split varieties for global ethnic markets." },
    { name: "GREEN GRAM (MOONG DAL)", img: "/cereals/greengram.jpg", desc: "Graded whole moong & yellow split for high digestibility." },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full overflow-hidden bg-[#0A1A10] pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-28">
        {/* Authentic Reference Design Background Artwork with Bottom Curved Wave */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/cereals/handful-golden-rice-panicles.png"
            alt="Cereals, Grains & Pulses Export - New India Export"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>

        {/* Soft radial overlay on left side for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              <Leaf size={12} className="text-[#84E07B]" />
              <span>EXPORT DIRECT FROM INDIA</span>
            </div>

            {/* Signature Two-Tone Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight font-heading leading-[1.12] text-white drop-shadow-md">
              Cereals, Grains &amp; <span className="text-[#F58220]">Pulses</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed max-w-lg font-normal drop-shadow-sm">
              Export-grade Basmati rice, regional varieties, and high-quality pulses.
            </p>
          </div>
        </div>
      </section>

      {/* ==== BASMATI RICE SHOWCASE SECTION ==== */}
      <section id="basmati" className="relative pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        {/* Floating Decorative Leaves on Margins (Matching Reference) */}
        <div className="absolute top-1/3 -left-2 w-12 sm:w-16 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/cereals/cereals-leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 -right-2 w-14 sm:w-18 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/cereals/cereals-leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Leaf size={12} className="text-[#006B35]" />
              <span>PREMIUM EXPORT QUALITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading text-[#111814]">
              Basmati Rice <span className="text-[#F58220]">Varieties</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#556059] leading-relaxed">
              A perfect blend of tradition, purity and exceptional taste.
            </p>
          </div>

          {/* 2-Column Showcase (Exact Mockup Match) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Premium Basmati Cooked Bowl Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-md border border-black/[0.06] bg-[#F7F6F2] h-[260px] sm:h-[300px] lg:h-[320px] group"
            >
              <Image
                src="/cereals/basmati-bowl.jpg"
                alt="Sortex Cleaned 100% Pure Basmati Rice"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Right Column: Modern Corporate Specifications Table */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white rounded-3xl overflow-hidden shadow-md border border-black/[0.06] flex flex-col justify-between"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-[#004B28] text-white">
                    <tr>
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-16 text-center">S. No.</th>
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Crop / Variety</th>
                      <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-right sm:text-left">Minimum Order / MOQ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.06]">
                    {displayedVarieties.map((item) => (
                      <tr key={item.no} className="hover:bg-[#EAF5EC]/40 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-[#686F6B] text-center">{item.no}</td>
                        <td className="py-2.5 px-4 font-semibold text-[#18201B]">
                          <span>{item.name}</span>
                        </td>
                        <td className="py-2.5 px-4 font-bold text-[#006B35] text-right sm:text-left">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/20 text-[11px] font-bold">
                            <Leaf size={11} className="text-[#006B35]" />
                            <span>{item.moq}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer with Expand Toggle & Enquiry */}
              <div className="p-3 bg-[#FBF6EF] border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setShowAllVarieties(!showAllVarieties)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006B35] hover:text-[#004B28] transition-colors"
                >
                  <span>{showAllVarieties ? "Show Less" : "View All 12 Varieties"}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${showAllVarieties ? "rotate-180" : ""}`} />
                </button>

                <a
                  href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20quotation%20for%20Basmati%20Rice%20Varieties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs font-bold shadow-xs transition-all"
                >
                  <MessageCircle size={13} />
                  <span>Request Basmati RFQ</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==== NON BASMATI & REGIONAL AROMATIC RICE ==== */}
      <section className="pt-2 pb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-4">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F58220]">Regional Harvest</span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#18201B]">
            Non-Basmati &amp; Regional Aromatic Rice Varieties
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {nonBasmati.map((rice, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-black/[0.06] shadow-xs text-center space-y-1 hover:border-[#006B35] hover:shadow-md transition-all group"
            >
              <div className="text-[10px] font-bold text-[#F58220] uppercase">Aromatic Grain</div>
              <h4 className="text-xs sm:text-sm font-bold text-[#18201B] group-hover:text-[#006B35] transition-colors">{rice}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ==== OTHER CEREALS, MILLETS & PULSES GRID ==== */}
      <section className="pt-2 pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F58220]">Bulk Agro Commodities</span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#18201B]">
            Other Cereals, Millets &amp; Pulses
          </h3>
          <p className="text-xs sm:text-sm text-[#556059]">
            Cleaned, destoned, machine-polished, and bagged per buyer specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/[0.06] flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 w-full bg-[#F7F6F2] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold font-heading text-sm sm:text-base text-[#18201B] group-hover:text-[#006B35] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#556059] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/[0.05]">
                  <a
                    href={`https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006B35] hover:text-[#004B28] transition-colors"
                  >
                    <MessageCircle size={13} />
                    <span>Enquire Commodity →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==== BOTTOM CURVED WAVE FRAME ==== */}
      <div className="relative w-full h-14 sm:h-18 lg:h-22 overflow-hidden bg-[#FBF6EF]">
        <Image
          src="/cereals/cereals-bottom-wave.png"
          alt="Curved wave accent frame"
          fill
          className="object-cover object-bottom pointer-events-none select-none"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
