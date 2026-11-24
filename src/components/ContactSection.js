"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Loader2,
  Clock,
  ShieldCheck,
  Lock
} from "lucide-react";

export default function ContactSection() {
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
      setError("Please fill out all required fields.");
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
    <section id="contact" className="relative w-full py-20 lg:py-28 bg-[#FBF6EF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#004B28]/[0.04] to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dot-pattern-light opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#006B35]/20 text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006B35]" />
            </span>
            <span className="text-[#006B35] font-bold uppercase tracking-wider text-[11px]">Central India Export Hub</span>
            <span className="text-black/20 font-light">•</span>
            <span className="text-[#4A554E] font-medium text-[11px]">Nagpur Agro-Corridor</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111814] tracking-tight font-heading leading-tight">
            Connect with Our <span className="text-[#006B35]">Export Trade Desk</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#556059] leading-relaxed max-w-2xl mx-auto font-normal">
            Direct commercial liaison for bulk container bookings, custom CIF/FOB port quotations, laboratory COA testing, and institutional trade contracts.
          </p>

          {/* Quick Assurance Chips */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#4A554E]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
              <span className="font-semibold text-[#18201B]">Rapid Quotes</span>
              <span className="text-[#717A74] font-normal">(4-Hour SLA)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006B35]" />
              <span className="font-semibold text-[#18201B]">FCL & LCL</span>
              <span className="text-[#717A74] font-normal">(JNPT & Mundra)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="font-semibold text-[#18201B]">Lab Verified</span>
              <span className="text-[#717A74] font-normal">(APEDA & FSSAI)</span>
            </div>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Executive Corporate Presence Card (Deep Emerald Luxury Aesthetic) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#003B20] via-[#004B28] to-[#042415] text-white p-7 sm:p-9 shadow-2xl border border-emerald-500/20 flex flex-col justify-between space-y-8"
          >
            {/* Ambient metallic glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Tag & Title */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F58220] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles size={12} className="text-[#F58220]" />
                    <span>Corporate Export Desk</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Desk Active Now</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  New India Export
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-light">
                  Direct export house bridging verified Indian growers and FPOs with discerning global buyers across 25+ international destinations.
                </p>
              </div>

              {/* Contact Detail Blocks */}
              <div className="space-y-4 pt-2">
                
                {/* Head Office */}
                <div className="p-4 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-emerald-400/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F58220]/20 text-[#F58220] shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white tracking-wide">Registered Head Office</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">Nagpur HQ</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      SHOP NO M02, Premium Plaza Commercial Complex, Dharampeth, Nagpur – 440010, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Direct Trade Line */}
                <div className="p-4 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-emerald-400/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold text-white tracking-wide block">Direct Commercial Trade Line</span>
                    <a
                      href="tel:+919028894149"
                      className="text-base sm:text-lg font-extrabold text-emerald-300 hover:text-white transition-colors block tracking-wide"
                    >
                      +91 90288 94149
                    </a>
                    <p className="text-[11px] text-white/70">
                      Available on voice calls & WhatsApp for overseas buyers (Mon–Sat, 9 AM – 8 PM IST).
                    </p>
                  </div>
                </div>

                {/* Commercial Email */}
                <div className="p-4 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-emerald-400/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold text-white tracking-wide block">Official Commercial Correspondence</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <a
                        href="mailto:eximnewindia@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white transition-colors"
                      >
                        eximnewindia@gmail.com
                      </a>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <a
                        href="mailto:Newindexport@gmail.com"
                        className="text-xs text-white/70 hover:text-white transition-colors"
                      >
                        Newindexport@gmail.com
                      </a>
                    </div>
                    <p className="text-[11px] text-white/70">
                      Formal proforma requests, technical lab specs & tender correspondence.
                    </p>
                  </div>
                </div>

              </div>

              {/* Accreditations Row */}
              <div className="p-3.5 rounded-2xl bg-black/25 border border-white/10 flex items-center justify-between text-[11px] text-white/80">
                <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                  <ShieldCheck size={14} className="text-[#F58220]" />
                  <span>Accreditations:</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 font-medium">
                  <span>IEC</span>
                  <span>•</span>
                  <span>APEDA</span>
                  <span>•</span>
                  <span>FSSAI</span>
                  <span>•</span>
                  <span>Spices Board</span>
                  <span>•</span>
                  <span>ICEGATE</span>
                </div>
              </div>
            </div>

            {/* Bottom WhatsApp CTA */}
            <div className="relative z-10 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20inquiring%20about%20your%20export%20commodities."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={20} className="fill-current" />
                <span>Instant WhatsApp Trade Desk (Chat Live)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Luxury Interactive RFQ Enquiry Portal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl shadow-xl hover:shadow-2xl p-7 sm:p-10 border border-black/[0.08] flex flex-col justify-between transition-all duration-300"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-5 my-auto">
                <div className="h-20 w-20 bg-[#EAF5EC] text-[#006B35] rounded-full mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={44} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18201B] font-heading">
                    Enquiry Transmitted Successfully!
                  </h3>
                  <p className="text-sm text-[#686F6B] max-w-md mx-auto leading-relaxed">
                    Your commercial export specification has been logged. Our international procurement team will review your requirements and respond with a formal CIF/FOB proforma estimate shortly.
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
                  className="px-8 py-3 rounded-xl bg-[#006B35] text-white text-xs sm:text-sm font-bold hover:bg-[#004B28] shadow-md transition-all hover:scale-105"
                >
                  Send Another RFQ Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/[0.08] gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#18201B] tracking-tight">
                      Send Us an Export Enquiry
                    </h3>
                    <p className="text-xs text-[#686F6B] mt-0.5">
                      Receive customized commodity pricing, FCL/LCL port estimates, and specification sheets.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#006B35] text-[10px] font-bold uppercase tracking-wider border border-emerald-200/60 shrink-0 self-start sm:self-auto">
                    Official RFQ Portal
                  </span>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                {/* 2-Column Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none"
                    />
                  </div>

                  {/* Official Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Official Corporate Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@exportco.com"
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Phone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 90288 94149"
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Company / Organization</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Foods Trading LLC"
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Destination Seaport */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Destination Country / Seaport</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Dubai Jebel Ali, London Gateway, Rotterdam"
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none"
                    />
                  </div>

                  {/* Product Portfolio */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                      <span>Product Interested In *</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] transition-all outline-none cursor-pointer"
                    >
                      <option>Spices & Seasonings</option>
                      <option>Grains, Cereals & Pulses</option>
                      <option>Certified Organic Food</option>
                      <option>Fresh Fruits & Vegetables</option>
                      <option>Specialty Agro Products</option>
                    </select>
                  </div>
                </div>

                {/* Message / Specifications */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider flex items-center justify-between">
                    <span>Message / Specifications *</span>
                    <span className="text-[10px] text-[#686F6B] font-normal normal-case">Tonnage, packaging & Incoterms</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Details about product grade, metric tonnage, packaging type (25kg/50kg bags, cartons, private labeling), target incoterms (CIF/FOB)..."
                    className="w-full px-4 py-3 rounded-xl border border-black/[0.12] bg-[#FAFAF8] hover:bg-white focus:bg-white focus:border-[#006B35] focus:ring-4 focus:ring-[#006B35]/10 text-sm text-[#18201B] placeholder-[#9CA3AF] transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#006B35] via-[#004B28] to-[#003B20] hover:from-[#004B28] hover:to-[#002B15] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#006B35]/25 hover:shadow-xl hover:shadow-[#006B35]/35 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting RFQ Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message & Connect on WhatsApp</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Trust Footer Notes */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-[#686F6B] pt-1">
                  <span className="flex items-center gap-1">
                    <Lock size={12} className="text-emerald-700" />
                    <span>100% Confidential Trade RFQ</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#F58220]" />
                    <span>Response SLA: Within 4 Trade Hours</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#006B35]" />
                    <span>Direct WhatsApp Dispatch</span>
                  </span>
                </div>
              </form>
            )}
          </motion.div>

        </div>



      </div>
    </section>
  );
}
