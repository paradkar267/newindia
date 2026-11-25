"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection({ showBackground = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "Spices & Seasonings",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const messageBody = `*New Export Trade Enquiry - New India Export*
• *Name:* ${formData.name}
• *Company:* ${formData.company || "N/A"}
• *Country:* ${formData.country || "India"}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}
• *Product:* ${formData.product}
• *Message:* ${formData.message}`;

      const encoded = encodeURIComponent(messageBody);

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "5dfb3e12-4f27-417a-81d2-c2021ffd842b",
            subject: `New Export Enquiry: ${formData.product} from ${formData.name}`,
            ...formData,
          }),
        });
      } catch (err) {
        console.warn("Web3Forms fallback notification:", err);
      }

      setSubmitted(true);
      window.open(`https://wa.me/919028894149?text=${encoded}`, "_blank");
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setError("Something went wrong. Please connect with us directly on WhatsApp or phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#FBF6EF] overflow-hidden">
      {showBackground && (
        <>
          {/* Ivory Stone Export Still Life Background Artwork */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            {/* Continuous soft stone base for tall / narrow viewports */}
            <Image
              src="/updates/Ivory stone export still life.png"
              alt="Ivory Stone Export Trade Desk Background - New India Export"
              fill
              quality={90}
              unoptimized
              sizes="100vw"
              className="object-cover object-center md:opacity-55 md:blur-[2px] md:scale-105"
            />

            {/* Desktop 100%-width crisp still life showing grain trays (left) & export ledger/pen (right) */}
            <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full aspect-[1860/845] [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_86%,transparent_100%)]">
              <Image
                src="/updates/Ivory stone export still life.png"
                alt="Ivory Stone Export Trade Desk Still Life - New India Export"
                fill
                quality={100}
                unoptimized
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Seamless Warm Ivory Edge Transitions */}
          <div className="absolute top-0 inset-x-0 h-14 sm:h-20 bg-gradient-to-b from-[#FBF6EF] via-[#FBF6EF]/65 to-transparent pointer-events-none z-1" />
          <div className="absolute bottom-0 inset-x-0 h-14 sm:h-20 bg-gradient-to-t from-[#FBF6EF] via-[#FBF6EF]/65 to-transparent pointer-events-none z-1" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

        {/* Clean Editorial Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#006B35] whitespace-nowrap">
            <span className="w-5 h-[1.5px] bg-[#F58220] inline-block shrink-0" />
            <span>Nagpur Agro-Corridor</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111814] tracking-tight font-heading leading-tight">
            Connect with Our{" "}
            <span className="text-[#006B35] whitespace-nowrap">Export Trade Desk</span>
          </h2>

          <p className="text-sm sm:text-base text-[#556059] leading-relaxed max-w-2xl mx-auto font-normal">
            Direct commercial liaison for container bookings, custom CIF/FOB port quotations, laboratory COA testing, and institutional contracts.
          </p>
        </div>

        {/* Unified Architectural Split Panel (framed inside wide stone table edges) */}
        <div className="max-w-[960px] mx-auto bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.08] shadow-[0_24px_60px_-28px_rgba(10,48,29,0.16)] grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Monolith: Corporate Office & Direct Trade Channels */}
          <div className="lg:col-span-5 bg-[#0A301D] text-white p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-7">
              {/* Identity Header */}
              <div className="space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F58220]">
                  Corporate Export Desk
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
                  New India Export
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Bridging verified Indian growers and FPOs with global buyers across 25+ international destinations.
                </p>
              </div>

              {/* Clean Typographic Contact Rows (No Nested Boxes) */}
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                <div className="py-4 flex items-start gap-3.5">
                  <MapPin size={17} className="text-[#F58220] shrink-0 mt-0.5" />
                  <div className="space-y-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-white/55 font-semibold block">
                      Registered Head Office
                    </span>
                    <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed">
                      SHOP NO M02, Premium Plaza Commercial Complex, Dharampeth, Nagpur – 440010, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3.5">
                  <Phone size={17} className="text-emerald-300 shrink-0 mt-0.5" />
                  <div className="space-y-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-white/55 font-semibold block">
                      Direct Trade Line
                    </span>
                    <a
                      href="tel:+919028894149"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#F58220] transition-colors block tracking-wide"
                    >
                      +91 90288 94149
                    </a>
                    <p className="text-[11px] text-white/60">
                      Voice &amp; WhatsApp • Mon–Sat, 9 AM – 8 PM IST
                    </p>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3.5">
                  <Mail size={17} className="text-emerald-300 shrink-0 mt-0.5" />
                  <div className="space-y-1 min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-white/55 font-semibold block">
                      Commercial Correspondence
                    </span>
                    <div className="space-y-0.5">
                      <a
                        href="mailto:eximnewindia@gmail.com"
                        className="text-xs sm:text-[13px] font-medium text-white hover:text-[#F58220] transition-colors block break-all sm:break-normal"
                      >
                        eximnewindia@gmail.com
                      </a>
                      <a
                        href="mailto:Newindexport@gmail.com"
                        className="text-xs sm:text-[13px] text-white/75 hover:text-white transition-colors block break-all sm:break-normal"
                      >
                        Newindexport@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Registrations & WhatsApp Link */}
            <div className="space-y-4">
              <div className="text-[11px] text-white/65 leading-relaxed">
                <span className="uppercase tracking-[0.12em] text-white/45 font-semibold block mb-1">
                  Trade Accreditations
                </span>
                <span className="text-white/85 font-medium tracking-wide">
                  IEC · APEDA · FSSAI · Spices Board · ICEGATE
                </span>
              </div>

              <a
                href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20inquiring%20about%20your%20export%20commodities."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-xl bg-white/[0.1] hover:bg-white text-white hover:text-[#0A301D] border border-white/15 font-semibold text-xs sm:text-sm transition-colors group"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle size={17} className="shrink-0" />
                  <span>Message Trade Desk on WhatsApp</span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Panel: Crisp Editorial Export Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 flex flex-col justify-between">
            {submitted ? (
              <div className="py-16 text-center space-y-5 my-auto">
                <div className="h-16 w-16 bg-[#EAF5EC] text-[#006B35] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 size={34} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111814] font-heading">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-[#556059] max-w-md mx-auto leading-relaxed">
                    Your commercial specification has been logged. Our export team will respond shortly with CIF/FOB pricing details.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      country: "",
                      product: "Spices & Seasonings",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#0A301D] text-white text-xs sm:text-sm font-semibold hover:bg-[#062214] transition-colors cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="pb-4 border-b border-black/[0.07]">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111814] tracking-tight">
                      Send an Export Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6862] mt-1">
                      Provide commodity details, volume, and destination port for a formal quotation.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ramesh Patel"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ramesh@company.com"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 90288 94149"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Global Foods Trading LLC"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Destination Country / Seaport
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Dubai Jebel Ali, London, Rotterdam"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#242D28] block">
                        Product Category *
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] transition-colors outline-none cursor-pointer"
                      >
                        <option>Spices &amp; Seasonings</option>
                        <option>Grains, Cereals &amp; Pulses</option>
                        <option>Certified Organic Food</option>
                        <option>Fresh Fruits &amp; Vegetables</option>
                        <option>Indian Toys &amp; Handicrafts</option>
                        <option>Specialty Agro Products</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#242D28] flex flex-wrap items-center justify-between gap-1">
                      <span>Specifications &amp; Volume *</span>
                      <span className="text-[11px] text-[#686F6B] font-normal">
                        Grade, metric tonnage, packaging &amp; Incoterms
                      </span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify product grade, quantity in metric tons, packaging format, and preferred CIF/FOB port terms..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg border border-black/[0.14] bg-white hover:border-black/30 focus:border-[#0A301D] focus:ring-2 focus:ring-[#0A301D]/10 text-sm text-[#111814] placeholder-[#9CA3AF] transition-colors outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#0A301D] hover:bg-[#062214] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry &amp; Continue to WhatsApp</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#686F6B] text-center">
                    Confidential commercial enquiry · Typical response within 4 business hours
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
