"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Laptop, 
  MessageCircle, 
  Download, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EventBookingModal from "@/components/EventBookingModal";

export default function EventPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const whatsappUrl = "https://wa.me/919028894149?text=Hi%2C%20I%20want%20to%20register%20for%20the%20Canton%20Fair%202026%20Free%20Online%20Workshop.";

  return (
    <div className="bg-[#FBF6EF] text-[#202522] min-h-screen">
      {/* HEADER HERO */}
      <section className="relative w-full py-14 sm:py-24 flex items-center justify-center text-center overflow-hidden bg-[#004B28] text-white">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
            <span>Featured International Workshop</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Canton Fair 2026<br />
            <span className="text-[#F58220]">Free Online Workshop</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            India–China Business & Sourcing Delegation • Practical Exhibition Guidance
          </p>
        </div>
      </section>

      {/* EVENT CORE DETAILS SECTION */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-5 sm:p-12 shadow-sm border border-black/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-bold uppercase tracking-wider">
                <span>Free Online Workshop</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#202522] leading-snug">
                  India–China Business & Sourcing Delegation
                </h2>
                <p className="text-sm sm:text-base text-[#686F6B] mt-2 leading-relaxed">
                  Learn how to prepare for the Canton Fair, identify genuine manufacturers, evaluate suppliers, negotiate effectively, and build reliable sourcing relationships in China.
                </p>
              </div>

              {/* Event Time Pill */}
              <div className="p-4 rounded-2xl bg-[#FBF6EF] border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#EAF5EC] text-[#006B35]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[#686F6B]">Date & Timing</div>
                    <div className="text-sm font-bold text-[#202522]">Sunday, 6 September 2026 • 1:00 PM IST</div>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#006B35] text-white text-xs font-bold uppercase tracking-wider">
                  100% Free
                </span>
              </div>

              {/* 4 Details Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FBF6EF] border border-black/[0.06] space-y-0.5">
                  <span className="text-[10px] text-[#686F6B] uppercase font-semibold">Date</span>
                  <div className="font-bold text-[#202522]">6 Sept 2026</div>
                  <div className="text-[#006B35] font-medium">Sunday</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF6EF] border border-black/[0.06] space-y-0.5">
                  <span className="text-[10px] text-[#686F6B] uppercase font-semibold">Time</span>
                  <div className="font-bold text-[#202522]">1:00 PM</div>
                  <div className="text-[#686F6B]">IST Timing</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF6EF] border border-black/[0.06] space-y-0.5">
                  <span className="text-[10px] text-[#686F6B] uppercase font-semibold">Mode</span>
                  <div className="font-bold text-[#202522]">Online</div>
                  <div className="text-[#686F6B]">Live Workshop</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FBF6EF] border border-black/[0.06] space-y-0.5">
                  <span className="text-[10px] text-[#686F6B] uppercase font-semibold">Fee</span>
                  <div className="font-bold text-[#006B35]">Free</div>
                  <div className="text-[#686F6B]">Pre-Register</div>
                </div>
              </div>

              {/* Delegation Preview Banner */}
              <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#F58220]/20 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#F58220]/15 text-[#F58220] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-xs sm:text-sm text-[#202522]">
                  <strong className="text-[#C2410C]">Delegation Preview:</strong> Canton Fair Phase 3 Business Delegation • <span className="font-semibold">31 October – 4 November 2026 | Guangzhou, China</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-[#006B35] hover:bg-[#004B28] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Register for Workshop</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Register on WhatsApp</span>
                </a>

                <a
                  href="/Modern%20Online%20Webinar%20(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-300 hover:border-[#006B35] bg-white text-[#202522] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download size={14} className="text-[#006B35]" />
                  <span>Webinar Brochure (PDF)</span>
                </a>

                <a
                  href="/NIE%20tour%20brochures.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-neutral-300 hover:border-[#006B35] bg-white text-[#202522] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download size={14} className="text-[#F58220]" />
                  <span>Tour Brochure (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Thumbnail Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-black/[0.08] shadow-xl bg-white p-2">
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/canton-webinar-thumb.jpg"
                    alt="Canton Fair 2026 Free Online Workshop"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.06] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-[#006B35] truncate">Sunday, 6 September 2026</div>
                      <div className="text-[10px] sm:text-[11px] text-[#686F6B] truncate">1:00 PM IST • Free Live Workshop</div>
                    </div>
                    <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-[10px] font-bold uppercase tracking-wider shrink-0">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <EventBookingModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
}
