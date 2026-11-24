"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Play, Eye, Sparkles, Filter } from "lucide-react";

export default function GalleryPage() {
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
    { type: "image", src: "/f6.jpg", title: "Commodity Quality Testing", category: "field" },
    { type: "image", src: "/f7.jpg", title: "International Buyer Meets", category: "delegation" },
    { type: "image", src: "/f8.jpg", title: "Export Promotion Council Meet", category: "summits" },
    { type: "image", src: "/f9.jpg", title: "Spice Processing Quality Audit", category: "field" },
    { type: "image", src: "/f10.jpg", title: "Container Loading Operations", category: "field" },
    { type: "image", src: "/f11.jpg", title: "Global Commerce Delegation", category: "delegation" },
    { type: "image", src: "/f12.jpg", title: "Trade Officers Conference", category: "summits" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#202522]">
      {/* ==== HEADER SECTION ==== */}
      <section className="relative w-full py-20 sm:py-24 flex items-center justify-center text-center overflow-hidden bg-[#004B28] text-white">
        <Image
          src="/Hero.jpg"
          alt="New India Export Gallery"
          fill
          priority
          quality={90}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004B28] via-[#004B28]/80 to-transparent" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
            <span>Visual Evidence & Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Gallery & Global Summits
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            A glimpse into our trade exhibitions, farmer field visits, port operations, and international delegations.
          </p>
        </div>
      </section>

      {/* ==== FILTER TABS & MASONRY GALLERY ==== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "All Media" },
              { id: "delegation", label: "International Delegations" },
              { id: "summits", label: "National Summits & Awards" },
              { id: "field", label: "Farm & Port Operations" },
              { id: "video", label: "Featured Video" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#006B35] text-white shadow-sm"
                    : "bg-white text-[#686F6B] hover:text-[#202522] border border-black/[0.06] hover:bg-neutral-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Masonry / Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                className="relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid bg-white border border-black/[0.06] group cursor-pointer"
                onClick={() => item.type === "image" && setLightboxItem(item)}
              >
                {item.type === "video" ? (
                  <div className="relative">
                    <video
                      src={item.src}
                      poster={item.poster}
                      preload="metadata"
                      controls
                      playsInline
                      className="w-full h-auto rounded-3xl object-cover"
                    />
                    <div className="p-4 bg-white border-t border-black/[0.04]">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF5EC] text-[#006B35] text-[11px] font-bold uppercase tracking-wider mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006B35] animate-pulse" />
                        <span>Featured Event Video</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#202522]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="text-white space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#F58220]">
                          New India Export
                        </span>
                        <h4 className="text-sm font-bold leading-snug drop-shadow-sm">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==== LIGHTBOX MODAL ==== */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white text-white hover:text-black p-2.5 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  quality={95}
                  className="object-contain rounded-2xl"
                />
              </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-lg font-bold">{lightboxItem.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
