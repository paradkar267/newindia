"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone, MessageCircle, FileText, ExternalLink, ShieldCheck } from "lucide-react";
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
      <footer className="relative bg-[#004B28] text-white overflow-hidden border-t border-[#006B35]">
        {/* Subtle decorative brand gradient line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#F58220] via-white/40 to-[#006B35]" />

        {/* Background decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Col 1 & 2: Brand & Identity */}
            <div className="lg:col-span-2 space-y-5">
              <Link href="/" className="inline-flex items-center gap-3.5 group">
                <div className="relative h-16 w-24 bg-white rounded-xl p-1.5 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.png"
                    alt="New India Export Logo"
                    fill
                    sizes="100px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    NEW INDIA <span className="text-[#F58220]">EXPORT</span>
                  </h3>
                  <p className="text-xs text-white/70 tracking-wider uppercase font-medium">
                    Anywhere to Everywhere
                  </p>
                </div>
              </Link>

              <p className="text-sm text-white/80 leading-relaxed max-w-md font-light">
                New India Export is a premier merchant exporter delivering India's finest agricultural excellence, certified organic produce, and authentic spices to international markets with reliability, precision, and trust.
              </p>

              <div className="flex items-center gap-2 text-xs text-emerald-200 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 w-fit">
                <ShieldCheck size={16} className="text-[#F58220]" />
                <span>Certified Indian Merchant Exporter & Trade Facilitator</span>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90 pb-1 border-b border-white/10 w-fit">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75 font-light">
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
                    Summits & Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#F58220] transition-colors">
                    Global Events
                  </Link>
                </li>
                <li>
                  <Link href="/brochures" className="hover:text-[#F58220] transition-colors">
                    Brochures & Catalogues
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F58220] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Export Categories */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90 pb-1 border-b border-white/10 w-fit">
                Export Categories
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75 font-light">
                <li>
                  <Link href="/spices" className="hover:text-[#F58220] transition-colors">
                    Spices & Seasonings
                  </Link>
                </li>
                <li>
                  <Link href="/cerealsandpulses" className="hover:text-[#F58220] transition-colors">
                    Cereals & Pulses
                  </Link>
                </li>
                <li>
                  <Link href="/organicfood" className="hover:text-[#F58220] transition-colors">
                    Certified Organic Food
                  </Link>
                </li>
                <li>
                  <Link href="/fruitsandvegetables" className="hover:text-[#F58220] transition-colors">
                    Fresh Fruits & Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="/toys" className="hover:text-[#F58220] transition-colors">
                    Indian Toys & Handicrafts
                  </Link>
                </li>
                <li>
                  <Link href="/others" className="hover:text-[#F58220] transition-colors">
                    Specialty Agro Commodities
                  </Link>
                </li>
                <li>
                  <a
                    href="/Modern%20Online%20Webinar%20(2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#F58220] hover:underline pt-1"
                  >
                    <FileText size={13} />
                    <span>Canton Fair Brochure (PDF)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact & Head Office */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90 pb-1 border-b border-white/10 w-fit">
                Head Office
              </h4>
              <ul className="space-y-3 text-sm text-white/80 font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#F58220] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Shop No M02, Premium Plaza Commercial Complex, Dharampeth, Nagpur – 440010
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#F58220] shrink-0" />
                  <a href="tel:+919028894149" className="hover:text-[#F58220] transition-colors">
                    +91 90288 94149
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#F58220] shrink-0" />
                  <a href="mailto:Newindexport@gmail.com" className="hover:text-[#F58220] transition-colors">
                    Newindexport@gmail.com
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20your%20export%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#006B35] hover:bg-[#00381E] border border-white/15 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
                >
                  <MessageCircle size={16} className="text-[#F58220]" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Credits */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70" suppressHydrationWarning>
            <p>© {new Date().getFullYear()} New India Export. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Developed & Managed by</span>
              <a
                href="https://bizleap.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#F58220] transition-colors underline"
              >
                BIZLEAP
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Pill */}
      <a
        href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20your%20export%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with New India Export"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <MessageCircle size={22} className="fill-white" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide pr-1">
          Chat with Us
        </span>
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
            className="fixed bottom-20 sm:bottom-6 right-6 sm:right-44 z-40 p-3 rounded-full bg-white text-[#006B35] shadow-lg hover:shadow-xl hover:bg-[#EAF5EC] transition-all border border-neutral-200"
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
