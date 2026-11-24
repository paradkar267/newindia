"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Download, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  PhoneCall,
  Ship 
} from "lucide-react";
import BookingModal from "./BookingModal";
import ShippingBookingModal from "./ShippingBookingModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [desktopBrochuresOpen, setDesktopBrochuresOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrochuresOpen, setMobileBrochuresOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileBrochuresOpen(false);
    setDesktopProductsOpen(false);
    setDesktopBrochuresOpen(false);
  }, [pathname]);

  const brochures = [
    {
      name: "Canton Fair Webinar Brochure",
      path: "/Modern%20Online%20Webinar%20(2).pdf",
      type: "download",
      badge: "Free Event"
    },
    {
      name: "NIE Tour Brochure",
      path: "/NIE%20tour%20brochures.pdf",
      type: "download",
      badge: "Delegation"
    },
    {
      name: "All Product Catalogues",
      path: "/brochures",
      badge: "Catalogue"
    }
  ];

  const products = [
    { name: "Spices", path: "/spices", desc: "Turmeric, cumin, black pepper & authentic Indian spices" },
    { name: "Cereals & Pulses", path: "/cerealsandpulses", desc: "Basmati rice, wheat, grains & premium pulses" },
    { name: "Fresh Produce", path: "/fruitsandvegetables", desc: "Farm-fresh onions, lemons, mangoes & seasonal produce" },
    { name: "Organic Foods", path: "/organicfood", desc: "Certified pure natural organic agricultural produce" },
    { name: "Toys", path: "/toys", desc: "Traditional Indian wooden toys, educational & BIS certified toys" },
    { name: "Other Commodities", path: "/others", desc: "Specialty agro exports and custom trade sourcing" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", sub: products },
    { name: "About us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Brochures", sub: brochures },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  const handleBrochureClick = (item) => {
    if (item.type === "download") {
      window.open(item.path, "_blank", "noopener,noreferrer");
    }
    setMobileOpen(false);
    setDesktopBrochuresOpen(false);
  };

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  const navBgClass = isTransparent
    ? "bg-transparent border-b border-white/10"
    : scrolled
      ? "bg-[#FBF6EF]/95 backdrop-blur-md shadow-md border-b border-black/[0.06]"
      : "bg-[#FBF6EF] shadow-xs border-b border-black/[0.06]";

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        
        {/* Main Signature Navbar: Transparent on Hero, Warm Ivory on Scroll */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className={`w-full transition-all duration-300 relative ${navBgClass}`}
        >
          <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
            <div className={`flex transition-all duration-300 items-center justify-between ${
              scrolled ? "h-16 sm:h-18" : "h-18 sm:h-20 lg:h-22"
            }`}>
              
              {/* Left Side: Brand Logo with Circular Emblem Shape (Zero Boxy Edges) */}
              <Link
                href="/"
                className="relative flex items-center focus:outline-none shrink-0 transition-transform duration-200 hover:scale-105 z-30 py-1"
                aria-label="New India Export Home"
              >
                <div
                  className={`relative transition-all duration-300 ease-out flex items-center justify-center rounded-full bg-[#FBF6EF] shadow-lg border-2 border-[#F58220] ${
                    scrolled
                      ? "w-12 h-12 sm:w-14 sm:h-14 p-1.5 shadow-md"
                      : "w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 p-2 shadow-xl -mb-2 sm:-mb-3"
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="New India Export Logo"
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 640px) 80px, 100px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>

              {/* Center Navigation Links (White Text on Forest Green) */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
                {navItems.map((item) =>
                  item.sub ? (
                    <div
                      key={item.name}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => {
                        if (item.name === "Products") setDesktopProductsOpen(true);
                        if (item.name === "Brochures") setDesktopBrochuresOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "Products") setDesktopProductsOpen(false);
                        if (item.name === "Brochures") setDesktopBrochuresOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={item.name === "Products" ? desktopProductsOpen : desktopBrochuresOpen}
                        className={`inline-flex items-center gap-1.5 py-2 text-sm sm:text-base font-semibold tracking-wide transition-colors ${
                          (item.name === "Products" && desktopProductsOpen) ||
                          (item.name === "Brochures" && desktopBrochuresOpen)
                            ? isTransparent ? "text-[#F58220]" : "text-[#006B35]"
                            : isTransparent ? "text-white hover:text-[#F58220]" : "text-[#18201B] hover:text-[#006B35]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${
                            (item.name === "Products" && desktopProductsOpen) ||
                            (item.name === "Brochures" && desktopBrochuresOpen)
                              ? isTransparent ? "rotate-180 text-[#F58220]" : "rotate-180 text-[#006B35]"
                              : isTransparent ? "text-white/70" : "text-[#686F6B] group-hover:text-[#006B35]"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu for Products */}
                      <AnimatePresence>
                        {item.name === "Products" && desktopProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.16 }}
                            className="absolute left-0 top-full pt-1 z-50 w-72"
                          >
                            <div className="bg-white rounded-2xl p-2 shadow-2xl border border-black/[0.08]">
                              <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#686F6B] border-b border-black/[0.05] mb-1">
                                Export Categories
                              </div>
                              {products.map((prod) => (
                                <Link
                                  key={prod.name}
                                  href={prod.path}
                                  className="group flex flex-col px-3 py-2 rounded-xl hover:bg-[#EAF5EC] transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-[#202522] group-hover:text-[#006B35]">
                                      {prod.name}
                                    </span>
                                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-all text-[#006B35]" />
                                  </div>
                                  <span className="text-xs text-[#686F6B] line-clamp-1">
                                    {prod.desc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Dropdown Menu for Brochures */}
                        {item.name === "Brochures" && desktopBrochuresOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.16 }}
                            className="absolute left-0 top-full pt-1 z-50 w-80"
                          >
                            <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-black/[0.08]">
                              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#686F6B] border-b border-black/[0.05] mb-1">
                                Official Documents & Downloads
                              </div>
                              {brochures.map((b) =>
                                b.type === "download" ? (
                                  <button
                                    key={b.name}
                                    type="button"
                                    onClick={() => handleBrochureClick(b)}
                                    className="w-full text-left group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#EAF5EC] transition-colors"
                                  >
                                    <div className="flex flex-col">
                                      <span className="text-sm font-semibold text-[#202522] group-hover:text-[#006B35]">
                                        {b.name}
                                      </span>
                                      <span className="text-[11px] text-[#F58220] font-medium">
                                        {b.badge} • PDF Download
                                      </span>
                                    </div>
                                    <Download size={14} className="text-[#006B35]" />
                                  </button>
                                ) : (
                                  <Link
                                    key={b.name}
                                    href={b.path}
                                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#EAF5EC] transition-colors"
                                  >
                                    <span className="text-sm font-semibold text-[#202522] group-hover:text-[#006B35]">
                                      {b.name}
                                    </span>
                                    <ArrowRight size={14} className="text-[#006B35]" />
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div key={item.name} className="relative h-full flex flex-col justify-center">
                      <Link
                        href={item.path}
                        className={`py-2 text-sm sm:text-base font-semibold tracking-wide transition-colors ${
                          isActive(item.path)
                            ? isTransparent ? "text-white font-bold" : "text-[#006B35] font-bold"
                            : isTransparent ? "text-white/90 hover:text-[#F58220]" : "text-[#18201B] hover:text-[#006B35]"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {/* Orange underline indicator for active page */}
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="navUnderline"
                          className="h-1 w-7 bg-[#F58220] rounded-full mx-auto"
                        />
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Right Side Actions: Single responsive Book CTA + Tablet/Mobile Hamburger (< lg) */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={() => setShippingOpen(true)}
                  className="relative group inline-flex items-center gap-1.5 sm:gap-2 justify-center px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 min-h-[38px] rounded-lg sm:rounded-xl bg-[#F58220] hover:bg-[#E07216] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Ship size={15} />
                  <span className="sm:hidden">Book</span>
                  <span className="hidden sm:inline">Book shipping</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle navigation menu"
                  className={`lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${
                    isTransparent ? "text-white hover:bg-white/10" : "text-[#18201B] hover:bg-black/5"
                  }`}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between lg:hidden"
            >
              <div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-white text-[#18201B]">
                <div className="flex items-center gap-2 px-1 py-0.5">
                  <Image src="/logo.png" alt="New India Export Logo" width={82} height={68} className="object-contain" priority />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#686F6B] hover:text-[#18201B] rounded-lg hover:bg-black/5"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="px-5 py-4 overflow-y-auto flex-1 space-y-1">
                {navItems.map((item) =>
                  item.sub ? (
                    <div key={item.name} className="py-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (item.name === "Products") setMobileProductsOpen(!mobileProductsOpen);
                          if (item.name === "Brochures") setMobileBrochuresOpen(!mobileBrochuresOpen);
                        }}
                        className="flex w-full items-center justify-between py-2 text-base font-semibold text-[#202522]"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            (item.name === "Products" && mobileProductsOpen) ||
                            (item.name === "Brochures" && mobileBrochuresOpen)
                              ? "rotate-180 text-[#006B35]"
                              : "text-[#686F6B]"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {item.name === "Products" && mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 mt-1 space-y-1 border-l-2 border-[#006B35]/20 ml-2"
                          >
                            {products.map((prod) => (
                              <Link
                                key={prod.name}
                                href={prod.path}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#333835] hover:text-[#006B35]"
                              >
                                {prod.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}

                        {item.name === "Brochures" && mobileBrochuresOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 mt-1 space-y-1 border-l-2 border-[#F58220]/30 ml-2"
                          >
                            {brochures.map((b) =>
                              b.type === "download" ? (
                                <button
                                  key={b.name}
                                  type="button"
                                  onClick={() => handleBrochureClick(b)}
                                  className="flex w-full items-center justify-between px-3 py-2 text-sm text-[#333835] hover:text-[#006B35]"
                                >
                                  <span>{b.name}</span>
                                  <Download size={14} className="text-[#F58220]" />
                                </button>
                              ) : (
                                <Link
                                  key={b.name}
                                  href={b.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2 text-sm text-[#333835] hover:text-[#006B35]"
                                >
                                  {b.name}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-1 py-2 text-base font-semibold text-[#202522] hover:text-[#006B35]"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile Drawer Footer */}
              <div className="p-5 border-t border-neutral-100 bg-[#FBF6EF] space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setShippingOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F58220] text-white font-bold text-sm shadow-md"
                >
                  <Ship size={16} />
                  <span>Book your shipping</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#006B35] text-[#006B35] font-semibold text-xs hover:bg-[#EAF5EC]"
                >
                  <span>Export Class Registration Form</span>
                </button>
                <a
                  href="tel:+919028894149"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neutral-300 text-[#202522] font-medium text-xs"
                >
                  <PhoneCall size={14} className="text-[#006B35]" />
                  <span>Call: +91 90288 94149</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Shipping Booking Multi-Step Modal */}
      <ShippingBookingModal open={shippingOpen} setOpen={setShippingOpen} />

      {/* Global Booking / Export Class Modal */}
      <BookingModal open={quoteModalOpen} setOpen={setQuoteModalOpen} />
    </>
  );
}
