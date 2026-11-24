"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Package,
  Leaf, 
  Ship, 
  ShieldCheck, 
  Handshake,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  const services = [
    {
      icon: <Leaf size={20} className="text-[#006B35]" />,
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15",
      title: "Agricultural Exports",
      desc: "Premium farm-fresh spices, pulses, cereals, and organic food sourced directly from accredited Indian farms.",
      link: "/spices",
      img: "/services/service-agri.jpg",
    },
    {
      icon: <Ship size={20} className="text-[#006B35]" />,
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15",
      title: "Global Logistics",
      desc: "End-to-end multi-modal freight handling, ocean container tracking, and cold-chain cargo solutions.",
      link: "/booking",
      img: "/services/service-logistics.jpg",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#F58220]" />,
      iconBg: "bg-[#FFF6EE] border-[#F58220]/20",
      title: "Quality Assurance",
      desc: "Rigorous laboratory testing, phytosanitary certification, fumigation, and international grading standards.",
      link: "/about",
      img: "/services/service-quality.jpg",
    },
    {
      icon: <Handshake size={20} className="text-[#006B35]" />,
      iconBg: "bg-[#EAF5EC] border-[#006B35]/15",
      title: "Trade Support",
      desc: "Complete documentation, IFC code assistance, DGFT compliance, and foreign buyer liaisoning services.",
      link: "/contact",
      img: "/services/service-trade.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF6EF] pt-14 sm:pt-18 lg:pt-22 pb-28 sm:pb-36 lg:pb-48 xl:pb-56">
      {/* Authentic Master Artwork Background with World Map, Corner Waves, Floating Leaves & Bottom Landscape */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/services/services-bg.png"
          alt="Core Capabilities & Export Services - New India Export"
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      {/* Smooth Top & Bottom Transitions into Warm Ivory */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-32 bg-gradient-to-t from-[#FBF6EF] via-[#FBF6EF]/60 to-transparent pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
            <Package size={13} className="text-[#006B35]" />
            <span>OUR CORE CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A381E] font-heading tracking-tight leading-tight">
            Specialized Export &amp; <span className="text-[#F58220]">Trade Services</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#4A554E] max-w-2xl mx-auto leading-relaxed font-normal">
            Engineered for international buyers who demand reliability, quality assurance, and seamless execution.
          </p>
        </div>

        {/* 4 Service Cards Grid (Matching Exact Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-black/[0.06] hover:border-[#006B35]/25 flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Upper Text Content */}
              <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Icon Box */}
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-2xs ${service.iconBg}`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold font-heading text-[#0A381E] group-hover:text-[#006B35] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#556059] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006B35] hover:text-[#004B28] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom Image with Orange Curved Wave Overlay (Matching Exact Reference) */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden mt-2 bg-[#F7F6F2]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Curved Wave Divider across the top of the photo */}
                <svg
                  viewBox="0 0 400 45"
                  fill="none"
                  className="absolute top-0 left-0 w-full h-7 sm:h-8 z-10 pointer-events-none drop-shadow-2xs"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 L400,0 L400,8 C280,14 130,38 0,32 Z" fill="#ffffff" />
                  <path d="M0,32 C130,38 280,14 400,8" stroke="#F58220" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}