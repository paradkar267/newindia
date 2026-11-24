"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, ExternalLink, MessageCircle, Globe2, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function OthersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full overflow-hidden bg-[#0A1A10] pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18 lg:pb-24 border-b border-black/[0.05]">
        {/* Authentic Reference Design Background Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/specialty/specialty-hero-bg.png"
            alt="Specialty Agro Commodities - New India Export"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
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
              <span>SPECIALTY COMMODITIES</span>
            </div>

            {/* Signature Two-Tone Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-white drop-shadow-md">
              Specialty Agro <span className="text-[#F58220]">Commodities</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-white/95 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Custom sourcing, contract farming produce, and bespoke agricultural exports.
            </p>
          </div>
        </div>
      </section>

      {/* ==== SPECIALTY OFFERINGS CONTENT SECTION ==== */}
      <section id="offerings" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF6EF]">
        {/* Floating Decorative Leaves on Margins (Matching Reference) */}
        <div className="absolute top-1/4 -left-2 w-12 sm:w-16 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/specialty/specialty-leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 -right-2 w-14 sm:w-18 h-44 pointer-events-none opacity-85 select-none z-0">
          <Image src="/specialty/specialty-leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14 relative z-10">
          {/* Main Specialty Offerings Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Photo Banner */}
            <div className="lg:col-span-5 relative w-full h-72 sm:h-84 lg:h-96 rounded-2xl overflow-hidden bg-[#F7F6F2] shadow-inner group">
              <Image
                src="/Others.jpg"
                alt="Specialty Commodities and Custom Sourcing"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220]">
                  <span className="w-5 h-[2px] bg-[#F58220] rounded-full inline-block" />
                  <span>OUR SPECIALTY OFFERINGS</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111814] font-heading tracking-tight leading-tight">
                  Specialty Commodities &amp; Custom Sourcing
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#556059] leading-relaxed font-normal">
                We are working hard to expand our catalog with certified specialty herbs, processed agro-byproducts, and tailored export shipments.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Request Custom Sourcing</span>
                </Link>

                <a
                  href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20have%20a%20custom%20product%20sourcing%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-[#18201B] border border-black/[0.12] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
                >
                  <MessageCircle size={15} className="text-[#006B35]" />
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom 4-Pillar Feature Bar (Matches Reference Image Perfectly) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-black/[0.06]">
            {/* Col 1 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Leaf size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Premium Quality</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Assured</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Globe2 size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Global Export</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Ready</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Handshake size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Reliable Partner</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Worldwide</p>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Sustainable</h4>
                <p className="text-xs text-[#686F6B] leading-snug">&amp; Eco-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== BOTTOM CURVED WAVE FRAME ==== */}
      <div className="relative w-full h-14 sm:h-18 lg:h-22 overflow-hidden bg-[#FBF6EF]">
        <Image
          src="/specialty/specialty-bottom-wave.png"
          alt="Curved wave accent frame"
          fill
          className="object-cover object-bottom pointer-events-none select-none"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
