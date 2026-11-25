"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Coins, 
  Compass, 
  Globe2, 
  Building2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function AchievementsSummits() {
  const whyChooseUs = [
    {
      num: "01",
      tag: "Lab Verified",
      accent: "from-[#006B35] to-[#139C54]",
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15 text-[#006B35]",
      tagColor: "text-[#006B35]",
      dotColor: "bg-[#006B35]",
      title: "Quality Commitment",
      desc: "Strict multi-stage laboratory testing, international grade sorting, and zero compromise on standard specifications.",
      icon: <ShieldCheck size={22} />,
    },
    {
      num: "02",
      tag: "On-Time Dispatch",
      accent: "from-[#006B35] to-[#139C54]",
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15 text-[#006B35]",
      tagColor: "text-[#006B35]",
      dotColor: "bg-[#006B35]",
      title: "Reliable Supply Chain",
      desc: "Resilient logistical pipelines, cold-chain temperature monitoring, and on-schedule sea/air container dispatches.",
      icon: <Truck size={22} />,
    },
    {
      num: "03",
      tag: "Direct Sourcing",
      accent: "from-[#F58220] to-[#F9A44C]",
      iconBg: "bg-[#FFF6EE] border-[#F58220]/20 text-[#F58220]",
      tagColor: "text-[#D96A0F]",
      dotColor: "bg-[#F58220]",
      title: "Competitive Sourcing",
      desc: "Direct procurement from regional farm clusters and state cooperative societies eliminating superfluous intermediary costs.",
      icon: <Coins size={22} />,
    },
    {
      num: "04",
      tag: "Customs & IEC",
      accent: "from-[#006B35] to-[#139C54]",
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15 text-[#006B35]",
      tagColor: "text-[#006B35]",
      dotColor: "bg-[#006B35]",
      title: "International Trade Support",
      desc: "Comprehensive liaisoning, regulatory customs clearance, IEC documentation, and dedicated buyer account management.",
      icon: <Compass size={22} />,
    },
  ];

  const internationalSlides = [
    { 
      image: "/gallery/Spain.jpg", 
      title: "Spain Global Trade Summit", 
      desc: "Representing India at Spain's premier international food & agricultural trade delegation." 
    },
    { 
      image: "/gallery/SaudiArabia.jpg", 
      title: "Saudi Arabia Trade Expo", 
      desc: "Showcasing Indian agricultural excellence and spice quality in Riyadh & Jeddah expos." 
    },
    { 
      image: "/gallery/GulfFood.jpg", 
      title: "Gulfood Dubai", 
      desc: "Strategic participation in one of the world's most influential food trade exhibitions." 
    },
    { 
      image: "/gallery/WTC2023.jpg", 
      title: "European Trade Delegation", 
      desc: "Engaging overseas buyers, commodity distributors, and bilateral commerce leaders." 
    },
  ];

  const nationalSlides = [
    { 
      image: "/gallery/dgft.jpg", 
      title: "DGFT Regulatory Summit", 
      desc: "Active collaboration with Directorate General of Foreign Trade officials on export compliance." 
    },
    { 
      image: "/gallery/MumbaiWTC.jpg", 
      title: "World Trade Centre Mumbai", 
      desc: "Presenting Maharashtra's agricultural export potential at WTC international forums." 
    },
    { 
      image: "/gallery/DelhiIITF.jpg", 
      title: "Delhi IITF Expo", 
      desc: "Featured in India International Trade Fair for agro-export promotion and trade facilitation." 
    },
    { 
      image: "/gallery/ODOP.jpg", 
      title: "One District One Product (ODOP)", 
      desc: "Proudly representing Nagpur and Amravati GI-tagged oranges on the national stage." 
    },
  ];

  const [intIndex, setIntIndex] = useState(0);
  const [natIndex, setNatIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIntIndex((prev) => (prev + 1) % internationalSlides.length);
      setNatIndex((prev) => (prev + 1) % nationalSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [internationalSlides.length, nationalSlides.length]);

  const moveInt = (dir) =>
    setIntIndex((prev) => (prev + dir + internationalSlides.length) % internationalSlides.length);

  const moveNat = (dir) =>
    setNatIndex((prev) => (prev + dir + nationalSlides.length) % nationalSlides.length);

  return (
    <section className="relative w-full pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-20 lg:pb-24 bg-[#FBF6EF] overflow-hidden">
      {/* Seamless Radial Accent Glow (No Clipped Top Edge) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_40%_at_50%_6%,rgba(0,107,53,0.045),transparent_72%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 relative z-10">
        
        {/* WHY CHOOSE NEW INDIA EXPORT */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck size={13} className="text-[#006B35]" />
              <span>The Export Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A381E] font-heading tracking-tight leading-tight">
              Why Choose <span className="text-[#F58220]">New India Export</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#4A554E] max-w-2xl mx-auto leading-relaxed font-normal">
              Engineered for seamless international commerce, verifiable authenticity, and unwavering consistency.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {whyChooseUs.map((benefit, i) => (
              <motion.div
                key={benefit.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                className="relative group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-black/[0.07] hover:border-[#006B35]/30 shadow-sm hover:shadow-[0_20px_45px_-15px_rgba(10,56,30,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Crisp Top Gradient Accent Strip */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${benefit.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="space-y-3 sm:space-y-4 pt-1">
                  {/* Top Row: Icon Badge + Editorial Number */}
                  <div className="flex items-start justify-between gap-2">
                    <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl border shadow-xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${benefit.iconBg}`}>
                      {benefit.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold font-heading tracking-widest text-[#0A381E]/25 group-hover:text-[#F58220] transition-colors select-none pt-0.5">
                      {benefit.num}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-lg font-extrabold font-heading text-[#0A381E] group-hover:text-[#006B35] transition-colors leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-[#556059] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Pill */}
                <div className="pt-3 mt-3.5 sm:pt-4 sm:mt-5 border-t border-black/[0.06]">
                  <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-black/[0.05] max-w-full">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${benefit.dotColor}`} />
                    <span className={`text-[9.5px] sm:text-[11px] font-bold uppercase tracking-normal sm:tracking-wider whitespace-nowrap ${benefit.tagColor}`}>
                      {benefit.tag}
                    </span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUMMITS & GLOBAL PRESENCE */}
        <div className="space-y-8 sm:space-y-10 pt-10 sm:pt-12 border-t border-black/[0.07]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#006B35]">
                <span className="w-5 h-[1.5px] bg-[#F58220] inline-block shrink-0" />
                <span>Verified Milestones</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A381E] font-heading tracking-tight">
                Summits &amp; <span className="text-[#F58220]">Global Presence</span>
              </h2>
              <p className="text-xs sm:text-base text-[#4A554E] leading-relaxed">
                Active representation across premier international trade delegations and national ministry forums.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A301D] hover:bg-[#062214] text-white text-xs sm:text-sm font-semibold shadow-sm group shrink-0 transition-colors self-start md:self-auto"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                id: "international",
                headerLabel: "International Trade Exhibitions",
                kicker: "Global Presence",
                icon: <Globe2 size={16} className="text-[#006B35]" />,
                iconBoxClass: "bg-[#EAF5EC] border-[#006B35]/20",
                labelColor: "text-[#0A381E]",
                kickerColor: "text-[#F58220]",
                slides: internationalSlides,
                index: intIndex,
                setIndex: setIntIndex,
                move: moveInt,
              },
              {
                id: "national",
                headerLabel: "National Summits & Ministries",
                kicker: "National Leadership",
                icon: <Building2 size={16} className="text-[#D96A0F]" />,
                iconBoxClass: "bg-[#FFF6EE] border-[#F58220]/25",
                labelColor: "text-[#0A381E]",
                kickerColor: "text-[#6EE7B7]",
                slides: nationalSlides,
                index: natIndex,
                setIndex: setNatIndex,
                move: moveNat,
              },
            ].map((track) => {
              const current = track.slides[track.index];
              return (
                <div
                  key={track.id}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.08] shadow-[0_20px_50px_-24px_rgba(10,56,30,0.14)] flex flex-col justify-between group"
                >
                  {/* Card Top Bar */}
                  <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-black/[0.06] flex items-center justify-between gap-2 bg-white">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${track.iconBoxClass}`}>
                        {track.icon}
                      </span>
                      <span className={`text-xs sm:text-[13px] font-bold uppercase tracking-wider truncate font-heading ${track.labelColor}`}>
                        {track.headerLabel}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-[#686F6B] tabular-nums shrink-0">
                      {String(track.index + 1).padStart(2, "0")} / {String(track.slides.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Full-Bleed Photograph Carousel Canvas */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#082415]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.image}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={current.image}
                          alt={current.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 620px"
                          className="object-cover object-[50%_20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Prev / Next Controls */}
                    <button
                      type="button"
                      onClick={() => track.move(-1)}
                      aria-label={`Previous ${track.id} slide`}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/45 hover:bg-[#F58220] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => track.move(1)}
                      aria-label={`Next ${track.id} slide`}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/45 hover:bg-[#F58220] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Bottom Title + Interactive Progress Dots */}
                    <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-end justify-between gap-3">
                      <div className="text-white min-w-0">
                        <div className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] ${track.kickerColor}`}>
                          {track.kicker}
                        </div>
                        <h3 className="text-base sm:text-xl font-bold font-heading text-white leading-snug truncate mt-0.5">
                          {current.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 pb-1">
                        {track.slides.map((s, idx) => (
                          <button
                            key={s.image}
                            type="button"
                            onClick={() => track.setIndex(idx)}
                            aria-label={`View ${s.title}`}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              idx === track.index ? "w-5 bg-[#F58220]" : "w-1.5 bg-white/45 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Single Caption Bar (No Duplicate Title / Nested Box) */}
                  <div className="px-5 sm:px-6 py-4 bg-[#FCFBF8] border-t border-black/[0.05] min-h-[72px] flex items-center">
                    <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                      {current.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
