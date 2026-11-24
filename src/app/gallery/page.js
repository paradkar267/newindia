"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Globe2,
  Award,
  Ship,
  Play,
  ArrowRight,
  Camera,
} from "lucide-react";

const CATEGORY_META = {
  delegation: { label: "International Delegation", badgeClass: "text-[#006B35] bg-[#EAF5EC] border-[#006B35]/20" },
  summits: { label: "Summits & Awards", badgeClass: "text-[#C2410C] bg-[#FFF7ED] border-[#F58220]/25" },
  field: { label: "Farm & Port Ops", badgeClass: "text-[#004B28] bg-[#EAF5EC] border-[#006B35]/20" },
  video: { label: "Featured Video", badgeClass: "text-[#006B35] bg-[#EAF5EC] border-[#006B35]/20" },
};

const galleryItems = [
  { type: "video", src: "/gallery-video.mp4", poster: "/gallery-video-thumb.jpg", title: "New India Export Event Highlights & Delegation", category: "video" },
  { type: "image", src: "/gallery/Spain.jpg", title: "Spain Global Trade Summit", category: "delegation" },
  { type: "image", src: "/gallery/SaudiArabia.jpg", title: "Saudi Arabia Trade Expo", category: "delegation" },
  { type: "image", src: "/gallery/GulfFood.jpg", title: "Gulfood Dubai International Fair", category: "delegation" },
  { type: "image", src: "/gallery/WTC2023.jpg", title: "World Trade Center European Delegation", category: "delegation" },
  { type: "image", src: "/gallery/dgft.jpg", title: "Directorate General of Foreign Trade (DGFT) Summit", category: "summits" },
  { type: "image", src: "/gallery/MumbaiWTC.jpg", title: "World Trade Centre Mumbai Showcase", category: "summits" },
  { type: "image", src: "/gallery/DelhiIITF.jpg", title: "Delhi India International Trade Fair (IITF)", category: "summits" },
  { type: "image", src: "/gallery/ODOP.jpg", title: "One District One Product (ODOP) Exhibition", category: "summits" },
  { type: "image", src: "/gallery/PuneAwards.jpg", title: "Maharashtra State Export Awards, Pune", category: "summits" },
  { type: "image", src: "/gallery/MCED.jpg", title: "Maharashtra Centre for Entrepreneurship Development (MCED)", category: "summits" },
  { type: "image", src: "/gallery/FarmVisit.jpg", title: "Direct Farmer Procurement & Harvest Inspection", category: "field" },
  { type: "image", src: "/gallery/ICARYavatmal.jpg", title: "ICAR Agricultural Research Station, Yavatmal", category: "field" },
  { type: "image", src: "/gallery/ICDMihan.jpg", title: "Inland Container Depot (ICD) MIHAN Logistics Inspection", category: "field" },
  { type: "image", src: "/f1.jpg", title: "Export Verification & Certification", category: "summits" },
  { type: "image", src: "/f2.jpg", title: "National Trade Facilitation Forum", category: "summits" },
  { type: "image", src: "/f3.jpg", title: "Rural Farming Clusters Liaison", category: "field" },
  { type: "image", src: "/f4.jpg", title: "Bilateral Trade Negotiations", category: "delegation" },
  { type: "image", src: "/f5.jpg", title: "Agriculture Leadership Summit", category: "summits" },
  { type: "image", src: "/f6.jpg", title: "MSME Bharat Export Recognition Summit", category: "field" },
  { type: "image", src: "/f7.jpg", title: "International Buyer Meets", category: "delegation" },
  { type: "image", src: "/f8.jpg", title: "Export Promotion Council Meet", category: "summits" },
  { type: "image", src: "/f9.jpg", title: "Spice Processing Quality Audit", category: "field" },
  { type: "image", src: "/f10.jpg", title: "ODOP Exhibition & Export Showcase", category: "field" },
  { type: "image", src: "/f11.jpg", title: "Global Commerce Delegation", category: "delegation" },
  { type: "image", src: "/f12.jpg", title: "Trade Officers Conference", category: "summits" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const videoItem = galleryItems.find((item) => item.type === "video");
  const allPhotos = galleryItems.filter((item) => item.type === "image");

  const filteredPhotos = allPhotos.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "video") return false;
    return item.category === activeTab;
  });

  const tabs = [
    { id: "all", label: "All Media", count: galleryItems.length },
    { id: "delegation", label: "International Delegations", count: allPhotos.filter((i) => i.category === "delegation").length },
    { id: "summits", label: "National Summits & Awards", count: allPhotos.filter((i) => i.category === "summits").length },
    { id: "field", label: "Farm & Port Operations", count: allPhotos.filter((i) => i.category === "field").length },
    { id: "video", label: "Featured Video", count: videoItem ? 1 : 0 },
  ];

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length));
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredPhotos.length));
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, showPrev, showNext]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setLightboxIndex(null);
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 flex items-center justify-center text-center overflow-hidden bg-[#0A1A10] text-white">
        <Image
          src="/updates/Cargo ship and containers at sunset-4.png"
          alt="New India Export - Global Summits & Trade Logistics"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Balanced cinematic scrim for crisp typography without washing out golden harbor colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#051F11]/60 to-[#062415]/88 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] shadow-sm">
            <Sparkles size={13} className="text-[#F58220]" />
            <span>Visual Evidence &amp; Global Engagements</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.015em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] leading-[1.12]">
            Gallery &amp; <span className="text-[#F58220]">Global Summits</span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/95 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[0.005em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
            A glimpse into our trade exhibitions, farmer field visits, port operations, and international delegations.
          </p>

          {/* Compact Trust Pillar Summary Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold">
              <Globe2 size={13} className="text-[#F58220]" />
              <span>International Expos</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold">
              <Award size={13} className="text-[#84E07B]" />
              <span>Ministry &amp; WTC Forums</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold">
              <Ship size={13} className="text-[#F58220]" />
              <span>ICD Port &amp; Farm Audits</span>
            </span>
          </div>
        </div>
      </section>

      {/* ==== GALLERY WORKSPACE WITH LAYERED BOTANICAL & WORLD MAP BACKGROUND ==== */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF6EF]">
        {/* Responsive Corner Artwork pinned inside viewport on 100% desktop & mobile */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[440px] lg:w-[600px] max-w-[50vw]">
            <Image
              src="/about/about-map-ship-top-right.png"
              alt="World map background"
              width={498}
              height={440}
              className="w-full h-auto object-contain object-top-right opacity-80"
            />
          </div>
          <div className="absolute top-0 left-0 w-[110px] sm:w-[160px] lg:w-[220px] max-w-[22vw]">
            <Image
              src="/about/about-leaves-top-left.png"
              alt="Botanical border"
              width={220}
              height={520}
              className="w-full h-auto object-contain object-top-left opacity-80"
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 w-full h-[140px] sm:h-[220px] opacity-75">
            <Image
              src="/about/about-border-bottom.png"
              alt="Botanical footer border"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#006B35_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-8 sm:space-y-10">
          {/* Frosted Category Filter Bar */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-3xl sm:rounded-full bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-[0_10px_35px_-8px_rgba(0,107,53,0.08)]">
              {tabs.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                      active
                        ? "bg-[#004B28] text-white shadow-sm"
                        : "text-[#556059] hover:text-[#18201B] hover:bg-[#FBF6EF]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        active ? "bg-[#F58220] text-white" : "bg-[#EAF5EC] text-[#006B35]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Event Highlight Reel Card (Shown on All Media & Featured Video) */}
          {(activeTab === "all" || activeTab === "video") && videoItem && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 lg:p-10 border border-white shadow-[0_14px_44px_-10px_rgba(0,107,53,0.09)] grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center"
            >
              {/* Left Portrait Cinema Video Player */}
              <div className="md:col-span-5 lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[9/15] rounded-2xl overflow-hidden bg-[#0A1A10] shadow-xl border-2 border-[#006B35]/15">
                  <video
                    src={videoItem.src}
                    poster={videoItem.poster}
                    preload="metadata"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Editorial Highlights Summary */}
              <div className="md:col-span-7 lg:col-span-8 space-y-5">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/20 text-[#006B35] text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#006B35] animate-pulse" />
                    <Play size={11} className="fill-[#006B35]" />
                    <span>Featured Exhibition Reel</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111814] tracking-tight leading-tight">
                    {videoItem.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#556059] leading-relaxed max-w-2xl">
                    Watch our on-ground delegation walkthroughs, international exhibition floor highlights, and direct B2B trade meetings connecting Indian agri-producers with global buyers.
                  </p>
                </div>

                {/* Quick Filter Shortcuts matching exact content pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleTabChange("delegation")}
                    className="p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#EAF5EC]/70 border border-black/[0.05] text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#006B35]">
                      <span>International</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#556059] mt-1">Spain, Gulfood Dubai, Saudi Arabia &amp; WTC</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange("summits")}
                    className="p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#FFF7ED] border border-black/[0.05] text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#F58220]">
                      <span>Summits &amp; Awards</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#556059] mt-1">DGFT, IITF Delhi, ODOP &amp; State Export Awards</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange("field")}
                    className="p-3.5 rounded-2xl bg-[#FAF9F5] hover:bg-[#EAF5EC]/70 border border-black/[0.05] text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#004B28]">
                      <span>Field &amp; Port Ops</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#556059] mt-1">ICAR Research, Farm Grading &amp; ICD MIHAN</p>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Uniform Editorial Photo Grid (Left-to-Right Order) */}
          {filteredPhotos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredPhotos.map((item, i) => {
                const meta = CATEGORY_META[item.category] || CATEGORY_META.summits;
                return (
                  <motion.article
                    key={item.src}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                    onClick={() => setLightboxIndex(i)}
                    className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-black/[0.06] hover:border-[#006B35]/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                  >
                    {/* Crisp Aspect-Ratio Photo Frame (Preserves Faces & Subject Heads) */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1F2F0]">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Top Category Badge */}
                      <span
                        className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-2xs ${meta.badgeClass}`}
                      >
                        {meta.label}
                      </span>

                      {/* Expand Affordance */}
                      <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/45 backdrop-blur-md text-white flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity border border-white/20">
                        <Maximize2 size={14} />
                      </span>
                    </div>

                    {/* Clean Editorial Card Caption */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-2.5 bg-white">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                          <span className="w-3 h-[2px] bg-[#F58220] rounded-full inline-block" />
                          <span>New India Export</span>
                        </div>
                        <h3 className="text-sm sm:text-[15px] font-bold font-heading text-[#18201B] group-hover:text-[#006B35] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="pt-2 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-semibold text-[#686F6B] group-hover:text-[#006B35] transition-colors">
                        <span className="inline-flex items-center gap-1.5">
                          <Camera size={12} className="text-[#006B35]" />
                          <span>View Full Image</span>
                        </span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* Clean Corporate CTA Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white shadow-[0_12px_40px_-8px_rgba(0,107,53,0.07)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#006B35] block">
                CONNECT WITH OUR TRADE DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#111814]">
                Interested in Delegations or Bulk Commodity Sourcing?
              </h3>
              <p className="text-xs sm:text-sm text-[#556059]">
                Reach out to schedule factory inspections, lab sample reviews, or international trade meetings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <span>Contact Trade Desk</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#18201B] border border-black/[0.12] text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>About Company</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==== UPGRADED LIGHTBOX VIEWER ==== */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] bg-white/15 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            {filteredPhotos.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] bg-white/15 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next Button */}
            {filteredPhotos.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] bg-white/15 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Main Lightbox Frame */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] flex flex-col items-center gap-3 sm:gap-4 px-8 sm:px-14"
            >
              <div className="relative w-full h-[64vh] sm:h-[72vh]">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain rounded-2xl"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full max-w-2xl px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-center sm:text-left">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220] block">
                    {CATEGORY_META[activePhoto.category]?.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold leading-snug">{activePhoto.title}</h3>
                </div>
                <span className="text-xs font-semibold text-white/80 bg-black/40 px-3 py-1 rounded-full shrink-0">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
