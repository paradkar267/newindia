"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Star, Leaf, Handshake, Package, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#202522]">
      {/* ==== HEADER SECTION ==== */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32 flex items-center justify-center text-center overflow-hidden bg-[#0A1A10] text-white">
        <Image
          src="/about-hero-bg.png"
          alt="About New India Export - Global Agricultural Multi-Modal Port Logistics"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle cinematic gradient to enhance text clarity while keeping vivid port sunset */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white drop-shadow-lg leading-[1.15]">
            About <span className="text-[#F58220]">New India Export</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/95 text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow-md">
            Committed to delivering India&apos;s agricultural authenticity, purity, and excellence worldwide.
          </p>
        </div>
      </section>

      {/* ==== ABOUT CONTENT SECTION ==== */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF6EF]">
        {/* Ivory world map with botanical border background - permanently visible across 100% zoom and all screen sizes */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Top-Right: Dotted World Map + Cargo Ship + Flight Path Arc */}
          <div className="absolute top-0 right-0 w-[340px] sm:w-[460px] md:w-[540px] lg:w-[620px] xl:w-[680px] max-w-[50vw] pointer-events-none">
            <Image
              src="/about/about-map-ship-top-right.png"
              alt="World map and shipping routes"
              width={498}
              height={440}
              quality={100}
              priority
              className="w-full h-auto object-contain object-top-right opacity-90 drop-shadow-xs"
            />
          </div>

          {/* Top-Left: Botanical Leaves Hanging */}
          <div className="absolute top-0 left-0 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] max-w-[22vw] pointer-events-none">
            <Image
              src="/about/about-leaves-top-left.png"
              alt="Botanical border leaves"
              width={220}
              height={520}
              quality={100}
              priority
              className="w-full h-auto object-contain object-top-left opacity-90 drop-shadow-xs"
            />
          </div>

          {/* Bottom-Right: Lush Botanical Leaves */}
          <div className="absolute bottom-0 right-0 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] max-w-[35vw] pointer-events-none">
            <Image
              src="/about/about-leaves-bottom-right.png"
              alt="Botanical leaves bottom"
              width={500}
              height={326}
              quality={100}
              className="w-full h-auto object-contain object-bottom-right opacity-90 drop-shadow-xs"
            />
          </div>

          {/* Bottom Border: Organic wave & leaf flourishes */}
          <div className="absolute bottom-0 inset-x-0 w-full h-[180px] sm:h-[240px] md:h-[280px] pointer-events-none opacity-85">
            <Image
              src="/about/about-border-bottom.png"
              alt="Botanical footer border"
              fill
              quality={100}
              className="object-cover object-bottom"
            />
          </div>

          {/* Delicate Global Grid Texture behind cards */}
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#006B35_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Who We Are Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_-8px_rgba(0,107,53,0.07)] hover:shadow-2xl rounded-3xl p-7 sm:p-10 lg:p-12 border border-white/90 space-y-6 transition-all duration-300"
          >
            {/* Header Accent & Pill Badge */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                <Leaf size={12} className="text-[#006B35]" />
                <span>Origin &amp; Foundation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-10 rounded-full bg-[#006B35]" />
                <div className="h-1.5 w-3 rounded-full bg-[#F58220]" />
              </div>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#111814] tracking-tight leading-tight">
              Who <span className="text-[#006B35]">We Are</span>
            </h2>

            {/* Lead Narrative */}
            <div className="border-l-3 border-[#006B35] pl-4 sm:pl-5 py-1">
              <p className="text-base sm:text-lg text-[#18201B] font-medium leading-relaxed">
                <strong className="font-bold text-[#006B35]">NEW INDIA EXPORT</strong> focuses on exporting premium Indian products to customers all over the world. We have built a strong, passionate team that works with dedication and courage to fulfill the goals of our company.
              </p>
            </div>

            {/* Supporting Context Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2 border-t border-black/[0.06]">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-black/[0.04] space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#006B35] block">HERITAGE &amp; STANDARDS</span>
                <p className="text-xs sm:text-sm text-[#556059] leading-relaxed">
                  Our focus lies in maintaining excellence in{" "}
                  <strong className="font-semibold text-[#18201B]">
                    quality, quantity, variety, accuracy, and long-term relations.
                  </strong>{" "}
                  All our products meet international and national quality standards, reflecting the authenticity and richness of India’s agricultural and organic heritage.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-black/[0.04] space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220] block">GLOBAL TRUST</span>
                <p className="text-xs sm:text-sm text-[#556059] leading-relaxed">
                  We aim to spread India’s diverse culture, taste, and quality across the globe — building trust through every shipment we make.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision + Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_12px_40px_-8px_rgba(0,107,53,0.07)] hover:shadow-2xl p-7 sm:p-9 border border-white/90 space-y-5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/20 shadow-2xs">
                    <Globe size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006B35] block">GLOBAL HORIZON</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111814]">
                      Our <span className="text-[#006B35]">Vision</span>
                    </h3>
                  </div>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#EAF5EC]/40 border border-[#006B35]/15 space-y-3">
                  <p className="text-xs sm:text-sm text-[#556059] leading-relaxed">
                    To create a strong and reliable platform in the{" "}
                    <strong className="text-[#18201B] font-semibold">Export-Import Community</strong>, representing the best of Indian agriculture, spices, and organic excellence globally.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#004B28] italic border-t border-[#006B35]/15 pt-2.5">
                    “We believe that customer satisfaction is our greatest review, and we strive to achieve it with every transaction.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_12px_40px_-8px_rgba(245,130,32,0.07)] hover:shadow-2xl p-7 sm:p-9 border border-white/90 space-y-5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/25 shadow-2xs">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220] block">GUIDING PRINCIPLES</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111814]">
                      Our <span className="text-[#F58220]">Core Values</span>
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {[
                    "No compromises on product quality",
                    "Building long-lasting client relationships",
                    "Timely supply and transparent services",
                    "Focus on organic and farm-fresh sourcing",
                    "Dedication to accuracy and trust"
                  ].map((val, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-black/[0.04] text-xs sm:text-[13px] font-medium text-[#18201B] hover:bg-white hover:border-[#006B35]/25 hover:shadow-2xs transition-all"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 text-[11px] font-bold">
                        ✓
                      </span>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Specialities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_12px_40px_-8px_rgba(0,107,53,0.07)] p-8 sm:p-12 border border-white/90 space-y-8"
          >
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202522]">
                Our Specialities
              </h3>
              <p className="text-sm text-[#686F6B]">
                Key cornerstones that make New India Export the chosen trade partner.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                {
                  icon: Leaf,
                  title: "Organic Food",
                  desc: "Delivering pure, natural, and chemical-free food.",
                },
                {
                  icon: Package,
                  title: "Direct From Farm",
                  desc: "We source directly from farmers ensuring freshness.",
                },
                {
                  icon: Globe,
                  title: "Merchant Exporter",
                  desc: "Serving global clients with wide export capabilities.",
                },
                {
                  icon: Handshake,
                  title: "Quality & Service",
                  desc: "Committed to supply, quality, and customer trust.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-[#FBF6EF] rounded-2xl p-6 border border-black/[0.04] hover:shadow-md transition-all group"
                >
                  <div className="p-3.5 rounded-2xl bg-white text-[#006B35] shadow-xs mb-3 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-[#202522] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#686F6B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Category Shortcuts */}
          <div className="text-center space-y-6 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#202522]">
              Explore Our Product Categories
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Spices", link: "/spices" },
                { label: "Cereals & Pulses", link: "/cerealsandpulses" },
                { label: "Organic Foods", link: "/organicfood" },
                { label: "Fruits & Vegetables", link: "/fruitsandvegetables" },
                { label: "Others", link: "/others" },
              ].map((btn, i) => (
                <Link
                  key={i}
                  href={btn.link}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-[#006B35] text-[#202522] hover:text-white border border-neutral-300 hover:border-[#006B35] text-xs sm:text-sm font-semibold shadow-xs transition-all duration-300"
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
