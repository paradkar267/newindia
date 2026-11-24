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
      title: "Quality Commitment",
      desc: "Strict multi-stage laboratory testing, international grade sorting, and zero compromise on standard specifications.",
      icon: <ShieldCheck size={26} className="text-[#006B35]" />,
    },
    {
      title: "Reliable Supply Chain",
      desc: "Resilient logistical pipelines, cold-chain temperature monitoring, and on-schedule sea/air container dispatches.",
      icon: <Truck size={26} className="text-[#006B35]" />,
    },
    {
      title: "Competitive Sourcing",
      desc: "Direct procurement from regional farm clusters and state cooperative societies eliminating superfluous intermediary costs.",
      icon: <Coins size={26} className="text-[#F58220]" />,
    },
    {
      title: "International Trade Support",
      desc: "Comprehensive liaisoning, regulatory customs clearance, IEC documentation, and dedicated buyer account management.",
      icon: <Compass size={26} className="text-[#006B35]" />,
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
    <section className="relative w-full py-20 lg:py-28 bg-[#FBF6EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* WHY CHOOSE NEW INDIA EXPORT */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
              <span>The Export Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202522] tracking-tight">
              Why Choose New India Export
            </h2>
            <p className="text-base sm:text-lg text-[#686F6B]">
              Engineered for seamless international commerce, verifiable authenticity, and unwavering consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#FBF6EF] rounded-3xl p-7 border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-white shadow-xs border border-black/[0.06] flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#202522]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686F6B] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUMMITS & GLOBAL PRESENCE */}
        <div className="space-y-12 pt-12 border-t border-black/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
                <span>Verified Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202522] tracking-tight">
                Summits & Global Presence
              </h2>
              <p className="text-sm sm:text-base text-[#686F6B]">
                Active representation across premier international trade delegations and national ministry forums.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006B35] hover:text-[#004B28] group shrink-0"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* INTERNATIONAL SUMMITS CARD */}
            <div className="bg-[#FBF6EF] rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-[#006B35]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#006B35]">
                    International Trade Exhibitions
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#686F6B] bg-white px-2.5 py-1 rounded-full border border-black/[0.06]">
                  {intIndex + 1} / {internationalSlides.length}
                </span>
              </div>

              {/* Slide Image Box */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-black/5 border border-black/[0.06]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={internationalSlides[intIndex].image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={internationalSlides[intIndex].image}
                      alt={internationalSlides[intIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Buttons */}
                <button
                  type="button"
                  onClick={() => moveInt(-1)}
                  aria-label="Previous international slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => moveInt(1)}
                  aria-label="Next international slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F58220]">
                    Global Presence
                  </div>
                  <div className="text-sm sm:text-base font-bold">
                    {internationalSlides[intIndex].title}
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-4 bg-white rounded-2xl border border-black/[0.06] space-y-1">
                <h4 className="text-base font-bold text-[#202522]">
                  {internationalSlides[intIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#686F6B] leading-relaxed">
                  {internationalSlides[intIndex].desc}
                </p>
              </div>
            </div>

            {/* NATIONAL SUMMITS CARD */}
            <div className="bg-[#FBF6EF] rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#F58220]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#F58220]">
                    National Summits & Ministries
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#686F6B] bg-white px-2.5 py-1 rounded-full border border-black/[0.06]">
                  {natIndex + 1} / {nationalSlides.length}
                </span>
              </div>

              {/* Slide Image Box */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-black/5 border border-black/[0.06]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={nationalSlides[natIndex].image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={nationalSlides[natIndex].image}
                      alt={nationalSlides[natIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Buttons */}
                <button
                  type="button"
                  onClick={() => moveNat(-1)}
                  aria-label="Previous national slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => moveNat(1)}
                  aria-label="Next national slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-[#202522] shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    National Leadership
                  </div>
                  <div className="text-sm sm:text-base font-bold">
                    {nationalSlides[natIndex].title}
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-4 bg-white rounded-2xl border border-black/[0.06] space-y-1">
                <h4 className="text-base font-bold text-[#202522]">
                  {nationalSlides[natIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#686F6B] leading-relaxed">
                  {nationalSlides[natIndex].desc}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
