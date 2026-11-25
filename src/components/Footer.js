"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone, MessageCircle, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-[#052E18] text-white overflow-hidden border-t-2 border-[#F58220]">
        {/* Subtle Farmland Contour Silhouette (Bottom-Left) */}
        <svg
          viewBox="0 0 600 220"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-0 left-0 w-[420px] sm:w-[540px] h-auto opacity-30"
        >
          <defs>
            <linearGradient id="farmFieldFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1B7A43" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#0D4B28" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#052E18" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,125 C110,118 220,145 360,220 L0,220 Z" fill="url(#farmFieldFade)" />
          <path d="M0,142 C115,134 210,162 325,220" stroke="#2D9658" strokeWidth="1.2" strokeOpacity="0.32" />
          <path d="M0,158 C105,152 195,176 285,220" stroke="#2D9658" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M0,174 C95,169 175,190 245,220" stroke="#2D9658" strokeWidth="1.2" strokeOpacity="0.24" />
          <path d="M0,190 C85,186 150,202 205,220" stroke="#2D9658" strokeWidth="1.2" strokeOpacity="0.2" />
          <path d="M0,206 C70,204 120,212 160,220" stroke="#2D9658" strokeWidth="1.2" strokeOpacity="0.16" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-16 sm:pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-10 border-b border-white/20">

            {/* Col 1: Brand & Identity */}
            <div className="col-span-2 lg:col-span-4 space-y-5">
              <Link href="/" className="inline-flex items-center gap-3.5 group">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-[#FBF6EF] rounded-2xl p-1.5 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.png"
                    alt="New India Export Logo"
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold font-heading tracking-tight text-white leading-tight">
                    NEW INDIA <span className="text-[#F58220]">EXPORT</span>
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/80 font-normal mt-0.5">
                    Anywhere to everywhere
                  </p>
                </div>
              </Link>

              <p className="text-sm text-white/85 leading-relaxed max-w-[270px] font-normal">
                Indian spices, grains and fresh produce for international buyers.
              </p>

              <p className="text-xs sm:text-[13px] text-white/65 font-normal">
                Merchant exporter
              </p>
            </div>

            {/* Col 2: Explore */}
            <div className="col-span-1 lg:col-span-2 space-y-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold font-heading text-white">
                  Explore
                </h4>
                <div className="w-7 h-[2px] bg-[#F58220] mt-2" />
              </div>
              <ul className="space-y-2.5 text-[13px] sm:text-sm text-white/85 font-normal">
                <li>
                  <Link href="/" className="hover:text-[#F58220] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#F58220] transition-colors">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#F58220] transition-colors">
                    Summits &amp; Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#F58220] transition-colors">
                    Global Events
                  </Link>
                </li>
                <li>
                  <Link href="/brochures" className="hover:text-[#F58220] transition-colors">
                    Brochures &amp; Catalogues
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F58220] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Export categories */}
            <div className="col-span-1 lg:col-span-3 space-y-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold font-heading text-white">
                  Export categories
                </h4>
                <div className="w-7 h-[2px] bg-[#F58220] mt-2" />
              </div>
              <ul className="space-y-2.5 text-[13px] sm:text-sm text-white/85 font-normal">
                <li>
                  <Link href="/spices" className="hover:text-[#F58220] transition-colors">
                    Spices &amp; Seasonings
                  </Link>
                </li>
                <li>
                  <Link href="/cerealsandpulses" className="hover:text-[#F58220] transition-colors">
                    Cereals &amp; Pulses
                  </Link>
                </li>
                <li>
                  <Link href="/organicfood" className="hover:text-[#F58220] transition-colors">
                    Certified Organic Food
                  </Link>
                </li>
                <li>
                  <Link href="/fruitsandvegetables" className="hover:text-[#F58220] transition-colors">
                    Fresh Fruits &amp; Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="/toys" className="hover:text-[#F58220] transition-colors">
                    Indian Toys &amp; Handicrafts
                  </Link>
                </li>
                <li>
                  <Link href="/others" className="hover:text-[#F58220] transition-colors">
                    Specialty Agro Commodities
                  </Link>
                </li>
                <li className="pt-0.5">
                  <a
                    href="/Modern%20Online%20Webinar%20(2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#F58220] hover:underline font-medium"
                  >
                    <FileText size={14} className="shrink-0" />
                    <span>Canton Fair brochure (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Head office */}
            <div className="col-span-2 lg:col-span-3 space-y-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold font-heading text-white">
                  Head office
                </h4>
                <div className="w-7 h-[2px] bg-[#F58220] mt-2" />
              </div>
              <ul className="space-y-3 text-[13px] sm:text-sm text-white/85 font-normal">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#F58220] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Shop No M02, Premium Plaza Commercial Complex, Dharampeth, Nagpur – 440010
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#F58220] shrink-0" />
                  <a href="tel:+919028894149" className="hover:text-[#F58220] transition-colors">
                    +91 90288 94149
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#F58220] shrink-0" />
                  <a href="mailto:Newindexport@gmail.com" className="hover:text-[#F58220] transition-colors break-all sm:break-normal">
                    Newindexport@gmail.com
                  </a>
                </li>
              </ul>

              <div className="pt-1.5">
                <a
                  href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20your%20export%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/50 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#052E18] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Credits */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-white/80" suppressHydrationWarning>
            <p>© {new Date().getFullYear()} New India Export. All rights reserved.</p>
            <p>
              Developed &amp; managed by{" "}
              <a
                href="https://bizleap.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F58220] transition-colors font-medium"
              >
                Bizleap
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Logo Button */}
      <a
        href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20your%20export%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with New India Export"
        title="Chat on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-[#25D366] hover:bg-[#1FB857] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-18 sm:bottom-6 right-4 sm:right-22 z-40 h-12 w-12 rounded-full bg-white text-[#006B35] shadow-lg hover:shadow-xl hover:bg-[#EAF5EC] transition-all border border-neutral-200 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
