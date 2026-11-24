"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sprout, 
  Ship, 
  Leaf, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Globe2
} from "lucide-react";

export default function AboutUsSection() {
  const highlights = [
    { 
      text: "Direct food from farm", 
      desc: "Fresh harvests procured directly from farmer collectives and verified growers.",
      icon: <Sprout size={24} className="text-[#006B35]" /> 
    },
    { 
      text: "Merchant exporter", 
      desc: "Licensed international trade operations adhering to DGFT, APEDA and global standards.",
      icon: <Ship size={24} className="text-[#006B35]" /> 
    },
    { 
      text: "Organic food", 
      desc: "Certified chemical-free, natural produce preserving taste, purity, and nutrition.",
      icon: <Leaf size={24} className="text-[#F58220]" /> 
    },
    { 
      text: "Quality service", 
      desc: "Rigorous quality inspection, international grade packaging, and transparent shipment tracking.",
      icon: <Award size={24} className="text-[#006B35]" /> 
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 border-b border-black/[0.04] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#EAF5EC] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main 2-column introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Sourcing & Inspection Collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative pb-8 lg:pb-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08]">
                <Image
                  src="/gallery/FarmVisit.jpg"
                  alt="Agricultural Farm Inspection & Sourcing"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 text-white">
                  <span className="text-xs font-semibold text-[#F58220] uppercase tracking-wider">
                    Farm Origin Sourcing
                  </span>
                  <p className="text-sm font-bold">
                    Direct on-field inspection & grading across rural India
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-5 sm:-bottom-6 right-2 sm:-right-6 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-black/[0.08] max-w-[240px] sm:max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#EAF5EC] text-[#006B35]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#202522]">Strict Quality Standards</div>
                    <div className="text-[11px] text-[#686F6B]">Phytosanitary & Lab Certified</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Company Vision & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
              <span>About New India Export</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202522] tracking-tight leading-tight">
              Bringing India's Finest Products to <span className="text-[#006B35]">Global Markets</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#686F6B] leading-relaxed font-light">
              <p>
                <strong className="font-semibold text-[#202522]">New India Export</strong> focuses on exporting premium agro-commodities from India to destinations all over the world. We prioritize quality, quantity, variety, accuracy, relationships, and services.
              </p>
              <p>
                Our mission is to spread India’s authentic agricultural produce, culture, and high-standard products worldwide — bridging the gap between committed Indian farmers and international importers seeking integrity and consistent supply.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#006B35] hover:bg-[#004B28] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Highlight Grid */}
        <div className="pt-8 border-t border-black/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#FBF6EF] rounded-2xl p-6 border border-black/[0.06] shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-black/[0.04]">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#202522]">
                  {item.text}
                </h3>
                <p className="text-xs sm:text-sm text-[#686F6B] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
