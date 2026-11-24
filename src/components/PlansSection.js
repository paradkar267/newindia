"use client";

import { motion } from "framer-motion";
import { Check, X, Shield, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const plans = [
  {
    name: "Basic Plan",
    tagline: "Essential Export Licensing & Initial Approvals",
    price: "₹ 33,999",
    tax: "+ GST",
    badge: "Startup Exporters",
    popular: false,
    cardBorder: "border-black/[0.08]",
    tagStyle: "bg-[#F1F2F0] text-[#202522]",
    btnStyle: "bg-white text-[#202522] border border-neutral-300 hover:bg-[#F1F2F0]",
    days: "Liaisoning: 22 Working Days",
    features: [
      { text: "Gumasta License / Shop Act Registration", available: true },
      { text: "MSME Registration", available: true },
      { text: "IEC (Import Export Code)", available: true },
      { text: "Bank Account Assistance", available: true },
      { text: "GST Registration & LUT Filing", available: true },
      { text: "AD Code Generation", available: true },
      { text: "RCMC Certificate", available: true },
      { text: "Phytosanitary / Fumigation Certification", available: true },
      { text: "DSC (Digital Signature Certificate - Class 3)", available: true },
      // Unavailable
      { text: "DGFT (Registration & Integration)", available: false },
      { text: "ICEGATE (Registration & Integration)", available: false },
      { text: "AD Code (Registration & Approval)", available: false },
      { text: "IFSC / PFMS (Registration & Approval)", available: false },
      { text: "Company Formation", available: false },
      { text: "Trademark Application", available: false },
      { text: "Digital Platform Assistance", available: false },
      { text: "Quality Assessment Certification Support", available: false },
      { text: "Pre & Post Shipment Documentation", available: false },
      { text: "Shipment Cost Analysis & Statement", available: false },
      { text: "Expert Reviews & Compliance Guidance", available: false },
      { text: "Exhibition Exposure & Networking", available: false },
    ],
  },
  {
    name: "Standard Plan",
    tagline: "Complete Regulatory Setup & Port Approvals",
    price: "₹ 43,999",
    tax: "+ GST",
    badge: "Most Popular",
    popular: true,
    cardBorder: "border-[#006B35] ring-2 ring-[#006B35]/20",
    tagStyle: "bg-[#EAF5EC] text-[#006B35]",
    btnStyle: "bg-[#006B35] text-white hover:bg-[#004B28] shadow-md",
    days: "Liaisoning: 22 Working Days",
    features: [
      { text: "Gumasta License / Shop Act Registration", available: true },
      { text: "MSME Registration", available: true },
      { text: "IEC (Import Export Code)", available: true },
      { text: "Bank Account Assistance", available: true },
      { text: "GST Registration & LUT Filing", available: true },
      { text: "AD Code Generation", available: true },
      { text: "RCMC Certificate", available: true },
      { text: "Phytosanitary / Fumigation Certification", available: true },
      { text: "DSC (Digital Signature Certificate - Class 3)", available: true },
      { text: "DGFT (Registration & Integration)", available: true },
      { text: "ICEGATE (Registration & Integration)", available: true },
      { text: "AD Code (Registration & Approval)", available: true },
      { text: "IFSC / PFMS (Registration & Approval)", available: true },
      // Unavailable
      { text: "Company Formation", available: false },
      { text: "Trademark Application", available: false },
      { text: "Digital Platform Assistance", available: false },
      { text: "Quality Assessment Certification Support", available: false },
      { text: "Pre & Post Shipment Documentation", available: false },
      { text: "Shipment Cost Analysis & Statement", available: false },
      { text: "Expert Reviews & Compliance Guidance", available: false },
      { text: "Exhibition Exposure & Networking", available: false },
    ],
  },
  {
    name: "Premium Plan",
    tagline: "End-to-End Turnkey Export Trade Operations",
    price: "₹ 83,999",
    tax: "+ GST",
    badge: "Full Turnkey",
    popular: false,
    cardBorder: "border-[#F58220]/40",
    tagStyle: "bg-[#FFF7ED] text-[#C2410C]",
    btnStyle: "bg-[#202522] text-white hover:bg-black shadow-md",
    days: "Liaisoning: 45 Working Days",
    features: [
      { text: "Gumasta License / Shop Act Registration", available: true },
      { text: "MSME Registration", available: true },
      { text: "IEC (Import Export Code)", available: true },
      { text: "Bank Account Assistance", available: true },
      { text: "GST Registration & LUT Filing", available: true },
      { text: "AD Code Generation", available: true },
      { text: "RCMC Certificate", available: true },
      { text: "Phytosanitary / Fumigation Certification", available: true },
      { text: "DSC (Digital Signature Certificate - Class 3)", available: true },
      { text: "DGFT (Registration & Integration)", available: true },
      { text: "ICEGATE (Registration & Integration)", available: true },
      { text: "AD Code (Registration & Approval)", available: true },
      { text: "IFSC / PFMS (Registration & Approval)", available: true },
      { text: "Company Formation", available: true },
      { text: "Trademark Application", available: true },
      { text: "Digital Platform Assistance", available: true },
      { text: "Quality Assessment Certification Support", available: true },
      { text: "Pre & Post Shipment Documentation", available: true },
      { text: "Shipment Cost Analysis & Statement", available: true },
      { text: "Expert Reviews & Compliance Guidance", available: true },
      { text: "Exhibition Exposure & Networking", available: true },
    ],
  },
];

export default function PlansSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-20 lg:py-28 bg-[#FBF6EF] border-b border-black/[0.04] overflow-hidden">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-[#006B35] text-xs font-semibold uppercase tracking-wider">
              <Shield size={13} className="text-[#006B35]" />
              <span>Professional Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202522] tracking-tight">
              Export Consultancy Plans
            </h2>
            <p className="text-base sm:text-lg text-[#686F6B]">
              Comprehensive licensing, certification, DGFT integration, and documentation tailored for your export venture.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border ${plan.cardBorder} flex flex-col justify-between`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#006B35] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#F58220]" />
                    <span>Recommended by Exporters</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${plan.tagStyle}`}>
                        {plan.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#202522]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#686F6B] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-y border-black/[0.06]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#202522]">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-[#686F6B]">
                        {plan.tax}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#006B35] mt-1">
                      {plan.days}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#686F6B]">
                      Included Features & Scope:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 ${
                            f.available ? "text-[#202522]" : "text-[#9CA3AF] line-through"
                          }`}
                        >
                          {f.available ? (
                            <Check size={16} className="text-[#006B35] shrink-0 mt-0.5" />
                          ) : (
                            <X size={15} className="text-[#D1D5DB] shrink-0 mt-0.5" />
                          )}
                          <span className="leading-snug">{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-8 mt-6 border-t border-black/[0.06] space-y-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${plan.btnStyle}`}
                  >
                    <span>Enquire for {plan.name}</span>
                    <ArrowRight size={15} />
                  </button>
                  <p className="text-center text-[11px] text-[#686F6B]">
                    * Terms & Conditions applied
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <BookingModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}
