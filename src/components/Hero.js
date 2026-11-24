"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Download,
  Sparkles,
  Ship,
  Leaf,
  Plane,
  Truck,
  ExternalLink,
  Building2,
  MapPin,
  Phone,
  Mail,
  FileText,
  Award,
  Package
} from "lucide-react";
import BookingModal from "./BookingModal";
import EventBookingModal from "./EventBookingModal";

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);

  const scrollToProducts = (e) => {
    e.preventDefault();
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#products");
    }
  };

  return (
    <>
      {/* =========================================================================
          HERO SECTION: Responsive Desktop Panorama + Clean Mobile/Tablet Showcase
         ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#042917] -mt-18 sm:-mt-20 lg:-mt-22">

        {/* MOBILE & TABLET HERO (< lg): High-contrast atmospheric header + seamless multimodal harbor panorama */}
        <div className="relative lg:hidden w-full bg-[#042917] overflow-hidden pt-24 sm:pt-28">
          {/* Ambient radial glow and subtle coordinate grid */}
          <div className="absolute -top-24 right-[-15%] w-72 h-72 rounded-full bg-[#008C45]/25 blur-3xl pointer-events-none" />
          <div className="absolute top-28 -left-16 w-56 h-56 rounded-full bg-[#F58220]/10 blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Hero Copy Stack: Crisp legibility, zero colliding background shapes */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 space-y-3.5 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                APEDA &amp; FSSAI Certified Exporter
              </span>
            </div>

            <h1 className="text-[31px] sm:text-[42px] font-extrabold text-white leading-[1.08] tracking-tight font-heading">
              Indian produce.<br />
              <span className="text-[#F58220]">Worldwide</span> delivery.
            </h1>

            <p className="text-[13.5px] sm:text-base text-white/85 max-w-md leading-relaxed">
              Source Indian spices, grains and fresh produce for your market.
            </p>

            {/* Primary CTA + Compact Multi-Modal Strip */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
              <div>
                <a
                  href="#products"
                  onClick={scrollToProducts}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-xl bg-[#F58220] hover:bg-[#E07216] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#F58220]/25 transition-all duration-300 active:scale-[0.98] group"
                >
                  <span>Explore products</span>
                  <span className="w-4.5 h-4.5 rounded-full bg-white text-[#F58220] flex items-center justify-center font-bold text-[10px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-white/80">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">
                  <Ship size={12} className="text-[#F58220]" />
                  <span>Sea Freight</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">
                  <Plane size={12} className="text-emerald-300" />
                  <span>Air Cargo</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">
                  <Truck size={12} className="text-[#F58220]" />
                  <span>ICD Rail</span>
                </span>
              </div>
            </div>
          </div>

          {/* Seamless Multi-Modal Harbor Panorama (Truck + Ocean Vessel at Sunset) */}
          <div className="relative w-full aspect-[2.2/1] sm:aspect-[2.6/1] mt-5 sm:mt-7">
            <Image
              src="/updates/Sunset port with ship and truck.png"
              alt="New India Export Multi-Modal Port, Container Truck & Ocean Vessel"
              fill
              priority
              quality={90}
              sizes="(max-width: 1023px) 100vw, 1024px"
              className="object-cover object-[30%_center] sm:object-center"
            />
            {/* Smooth atmospheric mist blending sky into emerald header canvas */}
            <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#042917] via-[#042917]/55 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            {/* Signature Saffron-Emerald Accent Horizon Line */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#F58220] via-[#ff9d47] to-[#006B35]" />
          </div>
        </div>

        {/* DESKTOP HERO (lg+): Full-Bleed Signature Panorama Artwork */}
        <div
          className="relative hidden lg:block w-full"
          style={{ aspectRatio: "1923 / 818" }}
        >
          <Image
            src="/hero.png"
            alt="New India Export - Indian Produce. Worldwide Delivery."
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center transition-all duration-700 ease-out"
          />

          {/* Overlaid Headline, Subtitle and CTA Button: Balanced in the open green sky */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-8 flex flex-col justify-start pt-24 xl:pt-28">
            <div className="ml-[17%] max-w-md lg:max-w-lg space-y-2.5 xl:space-y-3">

              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="text-[36px] xl:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md"
              >
                Indian produce.<br />
                Worldwide delivery.
              </motion.h1>

              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm xl:text-base text-white/95 max-w-md leading-relaxed font-normal drop-shadow"
              >
                Source Indian spices, grains and fresh produce for your market.
              </motion.p>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                className="pt-1"
              >
                <a
                  href="#products"
                  onClick={scrollToProducts}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#F58220] hover:bg-[#E07216] text-white font-bold text-[13px] shadow-md shadow-[#F58220]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Explore products</span>
                  <span className="w-4.5 h-4.5 rounded-full bg-white text-[#F58220] flex items-center justify-center font-bold text-[10px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            HERO SUB-STRIP: 4-Category Bar with attractive descriptive text
            Warm Ivory background matching global theme
           ========================================================================= */}
        <div className="w-full bg-[#FBF6EF] border-b border-[#006B35]/10 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 [&>*]:border-[#006B35]/10 [&>*:nth-child(-n+2)]:border-b md:[&>*:nth-child(-n+2)]:border-b-0 [&>*:nth-child(odd)]:border-r md:[&>*]:border-r md:[&>*:last-child]:border-r-0">

              <Link
                href="/spices"
                className="py-3.5 sm:py-5 px-2.5 sm:px-3 text-center group hover:bg-[#EAF5EC]/60 transition-all flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-[#004B28] group-hover:text-[#F58220] transition-colors font-heading">
                    Spices
                  </span>
                  <span className="text-xs text-[#F58220] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#686F6B] mt-0.5 font-medium">
                  Turmeric, Chilli & Whole Spices
                </span>
              </Link>

              <Link
                href="/cerealsandpulses"
                className="py-3.5 sm:py-5 px-2.5 sm:px-3 text-center group hover:bg-[#EAF5EC]/60 transition-all flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-[#004B28] group-hover:text-[#F58220] transition-colors font-heading">
                    Cereals & pulses
                  </span>
                  <span className="text-xs text-[#F58220] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#686F6B] mt-0.5 font-medium">
                  Basmati Rice, Wheat & Grains
                </span>
              </Link>

              <Link
                href="/fruitsandvegetables"
                className="py-3.5 sm:py-5 px-2.5 sm:px-3 text-center group hover:bg-[#EAF5EC]/60 transition-all flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-[#004B28] group-hover:text-[#F58220] transition-colors font-heading">
                    Fresh produce
                  </span>
                  <span className="text-xs text-[#F58220] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#686F6B] mt-0.5 font-medium">
                  Nagpur Oranges, Onions & Lemons
                </span>
              </Link>

              <Link
                href="/organicfood"
                className="py-3.5 sm:py-5 px-2.5 sm:px-3 text-center group hover:bg-[#EAF5EC]/60 transition-all flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm sm:text-lg md:text-xl font-bold text-[#004B28] group-hover:text-[#F58220] transition-colors font-heading">
                    Organic foods
                  </span>
                  <span className="text-xs text-[#F58220] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#686F6B] mt-0.5 font-medium">
                  100% Certified Chemical-Free
                </span>
              </Link>

            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          TRADE DELEGATIONS & EXPORT ADVISORY
         ========================================================================= */}
      <section className="w-full bg-[#FBF6EF] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

            {/* Card 1: International Sourcing Delegation */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-black/[0.07] p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#006B35] uppercase tracking-wider">Global Trade Delegations · 2026</span>
                  <span className="w-1 h-1 rounded-full bg-[#D0D5D1]" />
                  <span className="text-[11px] font-semibold text-[#F58220] uppercase tracking-wider">Canton Fair & Middle East</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-bold text-[#0D1F14] leading-snug">
                  International Sourcing Delegations & Supplier Auditing
                </h3>

                <p className="text-sm text-[#5A6460] leading-relaxed">
                  Connect directly with verified Indian agricultural producers, evaluate laboratory-certified export consignments, and coordinate private-label contracts for Middle East, European, and Asian markets.
                </p>

                <div className="flex flex-wrap items-center gap-5 text-[13px] text-[#5A6460]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#006B35]" />
                    B2B Sessions: 4 Sundays a Month
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#F58220]" />
                    12:00 PM – 1:00 PM IST (Online)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 mt-5 border-t border-black/[0.06]">
                <button
                  type="button"
                  onClick={() => setEventOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#006B35] hover:bg-[#004B28] text-white font-semibold text-sm transition-colors"
                >
                  Register for Delegation Workshop
                  <ArrowRight size={14} />
                </button>
                <a
                  href="/Modern%20Online%20Webinar%20(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-black/[0.12] hover:border-[#006B35]/40 text-[#0D1F14] font-semibold text-sm transition-colors"
                >
                  <Download size={13} className="text-[#F58220]" />
                  Download Delegation Brief
                </a>
              </div>
            </div>

            {/* Card 2: Export Trade Advisory */}
            <div className="lg:col-span-5 rounded-2xl bg-[#063A1E] text-white p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  <ShieldCheck size={12} />
                  Govt. Accredited Trade Desk
                </span>

                <h3 className="text-xl sm:text-[22px] font-bold text-white leading-snug">
                  Export Trade Advisory & Buyer Liaisoning
                </h3>

                <p className="text-sm text-white/75 leading-relaxed">
                  Direct support on DGFT IEC compliance, APEDA phytosanitary documentation, Letter of Credit execution, and global buyer matchmaking.
                </p>

                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                    </span>
                    Direct rail dispatch via Nagpur ICD MIHAN to JNPT Port
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                    </span>
                    FSSAI, APEDA & Spices Board lab inspection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#F58220]/20 border border-[#F58220]/40 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                    </span>
                    Custom private labeling & vacuum export packaging
                  </li>
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-white/50 uppercase tracking-wider block mb-0.5">Trade Desk Status</span>
                  <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting International Inquiries
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F58220] hover:bg-[#E07216] text-white font-semibold text-sm transition-colors text-center shrink-0"
                >
                  Consult Trade Desk
                </button>
              </div>
            </div>

          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 [&>*]:border-black/[0.06] [&>*:nth-child(-n+2)]:border-b md:[&>*:nth-child(-n+2)]:border-b-0 [&>*:nth-child(odd)]:border-r md:[&>*]:border-r md:[&>*:last-child]:border-r-0 bg-white rounded-2xl border border-black/[0.07] shadow-sm overflow-hidden">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 px-3.5 py-4 sm:px-6">
              <Globe2 size={20} className="text-[#006B35] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0D1F14]">Zero-Mile Hub</p>
                <p className="text-[11px] sm:text-xs text-[#7A8880] mt-0.5">Nagpur ICD MIHAN Dry Port</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 px-3.5 py-4 sm:px-6">
              <Package size={20} className="text-[#F58220] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0D1F14]">50,000+ MT</p>
                <p className="text-[11px] sm:text-xs text-[#7A8880] mt-0.5">Annual Agricultural Sourcing</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 px-3.5 py-4 sm:px-6">
              <Ship size={20} className="text-[#006B35] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0D1F14]">18+ Countries</p>
                <p className="text-[11px] sm:text-xs text-[#7A8880] mt-0.5">Active Global Delivery Ports</p>
              </div>
            </div>
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 px-3.5 py-4 sm:px-6">
              <ShieldCheck size={20} className="text-[#F58220] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0D1F14]">100% Verified</p>
                <p className="text-[11px] sm:text-xs text-[#7A8880] mt-0.5">APEDA & Geo-Chem Lab Tested</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          ABOUT NEW INDIA EXPORT - EXECUTIVE CORPORATE OVERVIEW
          Authentic ground operations, farm-gate provenance & multi-modal logistics
         ========================================================================= */}
      <section className="w-full bg-[#FBF6EF] py-14 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle Editorial Backdrop: Dot Matrix + Ambient Warm Glows */}
        <div className="absolute inset-0 bg-dot-pattern-light opacity-40 pointer-events-none" />
        <div className="absolute -top-20 right-[-5%] w-[420px] h-[420px] bg-gradient-to-bl from-[#EAF5EC] via-[#EAF5EC]/50 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[-5%] w-80 h-80 bg-gradient-to-tr from-[#FFF3E6] to-transparent rounded-full blur-3xl pointer-events-none opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left 7 Columns: Authoritative Story, Provenance & Pillars */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/20 text-[#006B35] text-[11px] font-bold uppercase tracking-[0.12em] shadow-2xs">
                  <Building2 size={13} className="text-[#F58220] shrink-0" />
                  <span>Corporate Overview · Verified Merchant Exporter</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D1F14] font-heading tracking-[-0.015em] leading-[1.15]">
                  Connecting India&apos;s Premier Agro-Clusters with{" "}
                  <span className="text-[#006B35]">Global</span>{" "}
                  <span className="text-[#F58220]">Markets</span>
                </h2>
              </div>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-[#4D5852] leading-[1.7]">
                <p>
                  Headquartered at India&apos;s zero-mile geographical hub in <strong className="text-[#111814] font-semibold">Nagpur, Maharashtra</strong>—with direct rail connectivity to major container dry ports (ICD MIHAN) and JNPT (Nhava Sheva)—<strong className="text-[#006B35] font-semibold">New India Export</strong> is an established merchant export house supplying premium agricultural commodities to international markets.
                </p>
                <p>
                  Working hand-in-hand with verified farmer cooperatives, state FPOs, and certified processing mills, we provide overseas buyers with complete provenance accountability: from direct farm-gate grading and phytosanitary testing to vacuum export packaging and cold-chain reefer logistics.
                </p>
              </div>

              {/* 3 Elevated Capability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">

                <div className="group p-4 rounded-2xl bg-white border border-black/[0.06] hover:border-[#006B35]/30 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15">
                      <MapPin size={15} />
                    </span>
                    <p className="text-xs font-extrabold text-[#006B35] uppercase tracking-wider">Direct Farm-Gate</p>
                  </div>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Zero-middleman sourcing across 40+ accredited farm clusters in Maharashtra, MP &amp; Punjab.
                  </p>
                </div>

                <div className="group p-4 rounded-2xl bg-white border border-black/[0.06] hover:border-[#F58220]/35 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#FFF4EA] text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/20">
                      <Award size={15} />
                    </span>
                    <p className="text-xs font-extrabold text-[#F58220] uppercase tracking-wider">Certified Quality</p>
                  </div>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Mandatory APEDA, FSSAI &amp; Spices Board laboratory analysis for every shipping container.
                  </p>
                </div>

                <div className="group p-4 rounded-2xl bg-white border border-black/[0.06] hover:border-[#006B35]/30 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15">
                      <Ship size={15} />
                    </span>
                    <p className="text-xs font-extrabold text-[#006B35] uppercase tracking-wider">Port Logistics</p>
                  </div>
                  <p className="text-xs text-[#5A6660] leading-relaxed">
                    Direct rail dispatch to JNPT &amp; Mundra with temperature-controlled reefers.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#006B35] to-[#004B28] hover:from-[#00582B] hover:to-[#003B20] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#006B35]/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Explore Our Ground Operations</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#EAF5EC] text-[#004B28] border border-[#006B35]/20 font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Connect With Trade Desk</span>
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Unobstructed Dual Real-Ground Operations Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none space-y-4">

                {/* Primary Card: Real Ground Farm Crop Inspection (Center-crop framing, zero sky clutter) */}
                <div className="group relative h-[300px] sm:h-[340px] w-full rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-[#141E18]">
                  <Image
                    src="/gallery/FarmVisit.jpg"
                    alt="New India Export Ground Farm Quality Verification in Maharashtra"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-[50%_54%] group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  {/* Balanced gradient scrim keeping caption crystal clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

                  {/* Top floating verification chip */}
                  <div className="absolute top-3.5 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Sparkles size={11} className="text-[#F58220]" />
                    <span>Direct Farm Sourcing</span>
                  </div>

                  {/* Clean unobstructed bottom caption */}
                  <div className="absolute bottom-4 left-5 right-5 text-white space-y-1 z-10">
                    <h3 className="text-base sm:text-lg font-bold font-heading leading-snug drop-shadow-md text-white">
                      On-Field Crop Inspection &amp; Quality Grading
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed line-clamp-2 font-normal">
                      Agronomists inspect moisture and purity across Vidarbha &amp; Central India farming clusters before container dispatch.
                    </p>
                  </div>
                </div>

                {/* Secondary Companion Card: ICD MIHAN Container Dry Port Railhead (Zero overlap) */}
                <div className="group rounded-2xl bg-white p-3 sm:p-3.5 border border-black/[0.07] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <div className="relative w-full sm:w-40 h-36 sm:h-28 rounded-xl overflow-hidden bg-[#141E18] shrink-0">
                    <Image
                      src="/gallery/ICDMihan.jpg"
                      alt="Nagpur ICD MIHAN Container Dry Port Railhead"
                      fill
                      sizes="240px"
                      className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-sm text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1 border border-white/20">
                      <Ship size={10} className="text-[#84E07B]" />
                      <span>ICD MIHAN</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2 px-0.5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220] block">
                        Zero-Mile Rail Gateway
                      </span>
                      <h4 className="text-sm sm:text-[15px] font-bold font-heading text-[#0D1F14] leading-snug">
                        Multi-Modal Rail Logistics
                      </h4>
                      <p className="text-xs text-[#5A6660] leading-snug">
                        Direct Rail Dispatch to JNPT / Nhava Sheva &amp; Mundra Ports
                      </p>
                    </div>

                    <div className="pt-1.5 border-t border-black/[0.06] flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#006B35] flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-[#006B35]" />
                        APEDA Licensed
                      </span>
                      <span className="text-[10px] text-[#686F6B] font-semibold uppercase tracking-wide">
                        Dry Port Hub
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          EXPORT-QUALITY PRODUCE SOURCED FOR GLOBAL MARKETS
          Exact 1:1 match to reference design using user-uploaded artwork (/showcase-bg.jpg)
         ========================================================================= */}
      <section className="relative w-full bg-[#FBF6EF] pt-8 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">

        {/* Authentic Reference Design Background Artwork (Desktop & Large screens - Ultra High Definition 2K) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none hidden lg:block">
          <Image
            src="/showcase-bg-2k.png"
            alt="International Trade Gateway"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Smooth Top & Bottom Transitions into Warm Ivory */}
        <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-32 bg-gradient-to-t from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />

        {/* Mobile / Tablet Background: Fixed header artwork height with soft blend */}
        <div className="absolute top-0 right-0 left-0 h-[480px] z-0 pointer-events-none select-none lg:hidden overflow-hidden">
          <Image
            src="/showcase-bg-2k.png"
            alt="International Trade Gateway"
            fill
            quality={100}
            unoptimized
            className="object-cover object-right-top opacity-85"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FBF6EF]/60 to-[#FBF6EF]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Section Header with Authority & Trust Markers */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">

              {/* Dual-Segment Orange-Bordered Badge */}
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-[#FFFBF5] border border-[#F58220]/45 shadow-2xs">
                <span className="flex items-center gap-1.5 text-[#006B35] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <Globe2 size={13} className="text-[#F58220] shrink-0" />
                  <span>Direct From India&apos;s Agricultural Heartlands</span>
                </span>
                <span className="hidden sm:inline text-[#F58220]/40 font-light">|</span>
                <span className="flex items-center gap-1.5 text-[#006B35] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <ShieldCheck size={13} className="text-[#006B35] shrink-0" />
                  <span>APEDA & FSSAI Certified</span>
                </span>
              </div>

              {/* Signature Two-Tone Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold text-[#111814] tracking-tight font-heading leading-[1.15]">
                Export-Quality Produce Sourced for{" "}
                <span className="relative inline-block text-[#006B35]">
                  Global
                  <span className="absolute bottom-1 left-0 w-full h-[3.5px] bg-[#006B35] rounded-full" />
                </span>{" "}
                <span className="text-[#F58220]">Markets</span>
              </h2>

              {/* Subtitle Description */}
              <p className="text-xs sm:text-[13px] md:text-sm text-[#556059] leading-relaxed max-w-xl font-normal">
                Direct farm-gate procurement from India's premier agricultural clusters. Full international compliance with custom export packaging, phytosanitary clearance, and multi-modal cold chain shipping.
              </p>
            </div>

            {/* View All Commodities CTA Button */}
            <div className="shrink-0 pb-1">
              <Link
                href="/brochures"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-[13px] font-bold shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>View all commodities</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 4 Premium Photographic Category Cards (2 columns on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              {
                href: "/spices",
                img: "/Spices.jpg",
                alt: "Export Spices and Whole Herbs",
                badge: "SPICES BOARD CERTIFIED",
                title: "Spices & Herbs",
                desc: "High-curcumin Turmeric, Guntur Red Chilli, Malabar Cardamom, Cumin & premium Indian spices sourcing from certified clusters.",
                tags: ["Turmeric", "Red Chilli", "Cumin", "Cardamom"],
                cta: "Explore Spices Catalog",
              },
              {
                href: "/cerealsandpulses",
                img: "/Pulses.jpg",
                alt: "Export Cereals and Pulses",
                badge: "APEDA REGISTERED",
                title: "Cereals & Pulses",
                desc: "Premium-grade 1121 & Traditional Basmati rice, high-protein export wheat, sorghum (jowar), and protein-rich pulses in bulk container loads.",
                tags: ["Basmati Rice", "Wheat", "Jowar", "Pulses"],
                cta: "Explore Grain Catalog",
              },
              {
                href: "/fruitsandvegetables",
                img: "/Veg1.jpg",
                alt: "Fresh Produce and Fruits",
                badge: "FARM-GATE HARVEST",
                title: "Fresh Produce",
                desc: "GI-tagged Nagpur oranges, Ratnagiri Alphonso mangoes, Lush pomegranates & other exotic fruits, fresh from accredited farms.",
                tags: ["Nagpur Orange", "Alphonso", "Red Onions", "Lemons"],
                cta: "Explore Fresh Produce",
              },
              {
                href: "/organicfood",
                img: "/Organic.jpg",
                alt: "Certified Organic Foods",
                badge: "CHEMICAL-FREE",
                title: "Organic Foods",
                desc: "Certified pesticide-free organic wheat, medicinal natural jaggery blocks, herbs, moringa powder, and organic pulses with complete traceability.",
                tags: ["Organic Wheat", "Natural Jaggery", "Moringa", "Millets"],
                cta: "Explore Organic Catalog",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.06] hover:border-[#006B35]/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 sm:h-44 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-3 sm:p-5 space-y-1.5 sm:space-y-2.5">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F58220] block leading-tight">
                      {card.badge}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold font-heading text-[#18201B] group-hover:text-[#006B35] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#556059] leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#FBF6EF] border border-[#EBE4D8] text-[9px] sm:text-[10px] font-medium text-[#556059]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-3 sm:px-5 pb-3 sm:pb-5 pt-1 flex items-center justify-between gap-1.5 text-[11px] sm:text-xs font-bold text-[#18201B] group-hover:text-[#006B35] transition-colors">
                  <span className="leading-tight">{card.cta}</span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full bg-[#EAF5EC] group-hover:bg-[#006B35] text-[#006B35] group-hover:text-white flex items-center justify-center text-[10px] sm:text-xs transition-colors shadow-2xs">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom 4-Pillar Feature Bar (Matches Reference Image Perfectly) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-black/[0.06]">

            {/* Col 1 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Globe2 size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">25+ Countries</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Direct shipments to US, UK, EU, UAE & SE Asia</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#FFF6EE] text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/20 shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">100% Tested</h4>
                <p className="text-xs text-[#686F6B] leading-snug">APEDA, FSSAI & Spices Board laboratory analysis</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Leaf size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Farm-Gate</h4>
                <p className="text-xs text-[#686F6B] leading-snug">Direct farmer & FPO cluster procurement</p>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 lg:pl-6">
              <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center shrink-0 border border-[#006B35]/15 shadow-2xs">
                <Ship size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-extrabold text-[#111814] font-heading">Air & Sea</h4>
                <p className="text-xs text-[#686F6B] leading-snug">JNPT/mundra port container & air cargo handling</p>
              </div>
            </div>

          </div>

        </div>

      </section>







      {/* Global Booking / Class Registration Modal */}
      <BookingModal open={bookingOpen} setOpen={setBookingOpen} />

      {/* Canton Fair Event Modal */}
      <EventBookingModal open={eventOpen} setOpen={setEventOpen} />
    </>
  );
}
