"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, Eye, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BrochuresSection() {
  const brochures = [
    {
      title: "Company Profile",
      desc: "Comprehensive overview of New India Export credentials, organizational capacity, mission, and export capabilities.",
      pdf: "/BrochureFinal.pdf",
      badge: "Official Profile",
      pages: "Comprehensive PDF",
    },
    {
      title: "Product Catalogue",
      desc: "Complete visual catalogue of Indian spices, Basmati rice, pulses, wheat, cereals, and organic food commodities.",
      pdf: "/brochure/NIE%20X%20VIRTUAL%20SHIPMENT%20WORKSHOP%20(5%20DAYS)%20BROCHURE.pdf",
      badge: "Full Portfolio",
      pages: "Export Specifications",
    },
    {
      title: "Export Bi-Fold Brochure",
      desc: "Summary publication detailing export commodities, global shipping workflows, and quality assurance benchmarks.",
      pdf: "/bifold-brochure.pdf",
      badge: "Export Guide",
      pages: "Bi-Fold Publication",
    },
    {
      title: "Canton Fair Webinar Brochure",
      desc: "Event syllabus, international delegation itinerary, and China sourcing workshop preparation documentation.",
      pdf: "/Modern%20Online%20Webinar%20(2).pdf",
      badge: "Webinar Guide",
      pages: "Free Workshop",
    },
    {
      title: "NIE Trade Tour Brochure",
      desc: "Overseas trade delegation details, bilateral business schedule, and international buyer meeting agenda.",
      pdf: "/NIE%20tour%20brochures.pdf",
      badge: "Delegation Tour",
      pages: "Official Itinerary",
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#004B28] text-white border-b border-black/[0.04] overflow-hidden">
      {/* Cinematic Background Image from updates folder */}
      <div className="absolute inset-0">
        <Image
          src="/updates/brochures-bg.png"
          alt="Indian Harvest Catalogue on Green Desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B20]/95 via-[#004B28]/90 to-[#003B20]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              <FileText size={13} className="text-[#F58220]" />
              <span>Official Literature</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-normal normal-case">Verified Trade Publications</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Brochures & Trade Publications
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Download verified company profiles, commodity specifications, and international delegation documents.
            </p>
          </div>

          <Link
            href="/brochures"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#004B28] border border-white/20 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-300 group shrink-0 backdrop-blur-md"
          >
            <span>View Brochure Image Gallery</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Brochure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brochures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#EAF5EC] shadow-xs border border-black/[0.04] flex items-center justify-center text-[#006B35]">
                    <FileText size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAF5EC] text-[#006B35]">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#202522]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#F58220] mt-0.5">
                    {item.pages}
                  </div>
                  <p className="text-xs sm:text-sm text-[#686F6B] mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between gap-3">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#004B28] hover:bg-[#F58220] text-white text-xs font-semibold shadow-md transition-all duration-300 group"
                >
                  <Download size={14} className="text-white" />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
