"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  Download, 
  MessageCircle, 
  CheckCircle2, 
  Laptop,
  MapPin,
  Phone,
  Mail,
  FileText,
  Globe2,
  Layers,
  Factory,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CantonFairEventPage() {
  const whatsappUrl = "https://wa.me/919028894149?text=Hi%2C%20I%20want%20to%20register%20for%20the%20Canton%20Fair%202026%20Free%20Online%20Workshop.";
  const webinarBrochureUrl = "/Modern%20Online%20Webinar%20(2).pdf";
  const tourBrochureUrl = "/NIE%20tour%20brochures.pdf";

  const whatYouWillLearn = [
    "What to do before, during and after the Canton Fair",
    "Canton Fair dates, phases and product categories",
    "Registration and invitation process",
    "How to identify and shortlist genuine manufacturers",
    "Supplier evaluation and negotiation",
    "Building reliable supplier relationships"
  ];

  const delegationTimeline = [
    { date: "30 October 2026", title: "Arrival in China & Airport Transfer", desc: "Delegation reception, airport pickup and hotel check-in." },
    { date: "31 October 2026", title: "Canton Fair Registration & Orientation", desc: "Buyer badge collection, venue orientation and initial floor review." },
    { date: "1 November 2026", title: "Canton Fair Phase 3 Sourcing", desc: "Guided sourcing, business matchmaking and manufacturer discussions." },
    { date: "2 November 2026", title: "Factory & Manufacturing Visits", desc: "On-site industrial visits, manufacturing capability inspections." },
    { date: "3 November 2026", title: "Market Exploration & Supplier Follow-ups", desc: "Wholesale market visits, price negotiation and contract follow-ups." },
    { date: "4 November 2026", title: "HK City Tour & Delegation Wrap-up", desc: "Business networking wrap-up, Hong Kong city excursion." },
    { date: "5 November 2026", title: "Airport Drop & Return Journey", desc: "Transfer to international airport for departure to India." }
  ];

  const sourcingSectors = [
    { title: "Electronics and Technology", desc: "Consumer electronics, lighting, electronic components & smart solutions." },
    { title: "Machinery and Equipment", desc: "Industrial machinery, processing equipment & precision tools." },
    { title: "Energy and New Energy", desc: "Renewable energy equipment, solar solutions, energy storage & power systems." },
    { title: "Automotive and Electric Vehicles", desc: "EVs, automotive parts, accessories, commercial transport & battery tech." },
    { title: "Agricultural Machinery", desc: "Farm machinery, agro-processing tools, irrigation tech & harvesting solutions." }
  ];

  const delegationHighlights = [
    "Professional on-ground support in China",
    "Canton Fair buyer badge & registration assistance",
    "Pre-screened supplier discovery & matchmaking",
    "Factory visits & wholesale market exploration",
    "Structured B2B networking with Indian delegates",
    "Airport, hotel & exhibition venue transfers",
    "Premium 4-star accommodation throughout the tour",
    "Experienced multilingual trade & sourcing guide"
  ];

  return (
    <div className="bg-[#FBF6EF] text-[#202522] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative w-full py-20 sm:py-24 flex items-center justify-center text-center overflow-hidden bg-[#004B28] text-white">
        <Image 
          src="/canton-fair-bg.jpg"
          alt="Canton Fair 2026 Delegation"
          fill
          priority
          quality={90}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004B28] via-[#004B28]/80 to-transparent" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
            <span>FREE ONLINE WORKSHOP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Canton Fair 2026<br />
            <span className="text-[#F58220]">Free Online Workshop</span>
          </h1>

          <p className="text-lg sm:text-2xl font-light text-emerald-200">
            India–China Business & Sourcing Delegation
          </p>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Learn how to prepare for the Canton Fair, identify genuine manufacturers, evaluate suppliers, negotiate effectively and build reliable sourcing relationships in China.
          </p>
        </div>
      </section>

      {/* WORKSHOP DETAILS CARD */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-sm space-y-8">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF5EC] border border-[#006B35]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Calendar size={22} className="text-[#006B35]" />
              <span className="text-sm sm:text-base font-bold text-[#004B28]">
                Sunday, 6 September 2026 • 1:00 PM IST • Online Workshop
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#006B35] text-white text-xs font-bold uppercase tracking-wider">
              100% Free
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.04]">
              <span className="text-xs text-[#686F6B] uppercase font-semibold">Date</span>
              <div className="font-bold text-[#202522] mt-0.5">6 Sept 2026</div>
              <div className="text-[11px] text-[#006B35] font-medium">Sunday</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.04]">
              <span className="text-xs text-[#686F6B] uppercase font-semibold">Time</span>
              <div className="font-bold text-[#202522] mt-0.5">1:00 PM</div>
              <div className="text-[11px] text-[#686F6B]">IST Timing</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.04]">
              <span className="text-xs text-[#686F6B] uppercase font-semibold">Mode</span>
              <div className="font-bold text-[#202522] mt-0.5">Online</div>
              <div className="text-[11px] text-[#686F6B]">Live Webinar</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.04]">
              <span className="text-xs text-[#686F6B] uppercase font-semibold">Fee</span>
              <div className="font-bold text-[#006B35] mt-0.5">Free</div>
              <div className="text-[11px] text-[#686F6B]">Advance RSVP</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold flex items-center gap-2 shadow-sm text-sm"
            >
              <MessageCircle size={18} />
              <span>Register on WhatsApp</span>
            </a>

            <a
              href={webinarBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-neutral-300 hover:border-[#006B35] bg-white text-[#202522] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <Download size={14} className="text-[#006B35]" />
              <span>Webinar Brochure (PDF)</span>
            </a>

            <a
              href={tourBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-neutral-300 hover:border-[#006B35] bg-white text-[#202522] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <Download size={14} className="text-[#F58220]" />
              <span>Tour Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
            <span>Workshop Syllabus</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#202522]">
            What You Will Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatYouWillLearn.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-black/[0.06] p-5 rounded-2xl flex items-center gap-3.5 shadow-xs"
            >
              <CheckCircle2 size={20} className="text-[#006B35] shrink-0" />
              <span className="text-sm font-semibold text-[#202522]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DELEGATION TOUR PREVIEW */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#C2410C] text-xs font-semibold uppercase tracking-wider">
            <span>On-Ground Business Delegation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#202522]">
            Canton Fair Phase 3 Business Delegation
          </h2>
          <p className="text-sm text-[#686F6B]">
            31 October – 4 November 2026 | Guangzhou, China & Hong Kong
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.06] shadow-sm space-y-8">
          {/* Sectors */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#202522]">Industries & Sourcing Sectors Covered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sourcingSectors.map((sector, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.04] space-y-1">
                  <h4 className="font-bold text-sm text-[#006B35]">{sector.title}</h4>
                  <p className="text-xs text-[#686F6B] leading-relaxed">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 pt-4 border-t border-black/[0.06]">
            <h3 className="text-lg font-bold text-[#202522]">Delegation Inclusions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {delegationHighlights.map((hl, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#EAF5EC]/60 border border-[#006B35]/15 flex items-start gap-2 text-xs">
                  <CheckCircle2 size={15} className="text-[#006B35] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#202522]">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 pt-4 border-t border-black/[0.06]">
            <h3 className="text-lg font-bold text-[#202522]">Delegation Tour Itinerary</h3>
            <div className="space-y-2.5">
              {delegationTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#FBF6EF] border border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-xs font-bold text-[#006B35] bg-white px-3 py-1 rounded-lg border border-black/[0.06] shrink-0">
                    {item.date}
                  </span>
                  <div className="flex-1 sm:pl-3">
                    <span className="text-xs sm:text-sm font-bold text-[#202522]">{item.title}</span>
                    <p className="text-xs text-[#686F6B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-4 max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202522]">
          Start Your Canton Fair Journey
        </h3>
        <p className="text-sm text-[#686F6B]">
          Connect with our trade officers to register for the free online session or reserve a delegation slot.
        </p>
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#006B35] hover:bg-[#004B28] text-white font-semibold text-sm shadow-md transition-all"
          >
            <MessageCircle size={18} />
            <span>Register Free on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
