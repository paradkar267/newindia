"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Download, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  FileText, 
  BookOpen, 
  Loader2,
  Sparkles,
  ShieldCheck,
  Check
} from "lucide-react";

export default function BookingModal({ open, setOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    currentStage: "Just exploring exports",
    month: "Next Upcoming Batch",
    batch: "4 Sundays (12:00 pm – 1:00 pm)",
    product: "",
    topics: "",
    agreed: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const whatWeCover = [
    "Documents",
    "Logistics",
    "Product selection",
    "Packaging",
    "Payment terms",
  ];

  const stageOptions = [
    "Just exploring exports",
    "Have a product or business, not exporting yet",
    "Already exporting, want to improve",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleStageSelect = (stage) => {
    setFormData((prev) => ({ ...prev, currentStage: stage }));
  };

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (typeof window !== "undefined" && window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.email || !formData.city) {
      setError("Please fill in all required fields (Full name, Mobile, Email, and City).");
      return;
    }

    if (!formData.agreed) {
      setError("Please confirm your acceptance of the class schedule and fee declaration.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formattedMessage = `*New Export Class Registration - New India Export*
----------------------------------------
• *Full Name:* ${formData.fullName}
• *Mobile / WhatsApp:* ${formData.mobile}
• *Email:* ${formData.email}
• *City:* ${formData.city}
• *Current Stage:* ${formData.currentStage}
• *Joining Month:* ${formData.month}
• *Preferred Batch:* ${formData.batch}
• *Product to Export:* ${formData.product || "Not specified"}
• *Topics to Cover:* ${formData.topics || "General curriculum"}
• *Fee Declaration:* Accepted (Fee starts from ₹8,999 for 4 Sundays)`;

      const encoded = encodeURIComponent(formattedMessage);

      // Submit via Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "5dfb3e12-4f27-417a-81d2-c2021ffd842b",
            subject: `Export Class Registration: ${formData.fullName} (${formData.city})`,
            ...formData,
          }),
        });
      } catch (err) {
        console.warn("Web3Forms submission notice:", err);
      }

      setSubmitted(true);

      // Open WhatsApp with pre-filled registration format
      window.open(`https://wa.me/919028894149?text=${encoded}`, "_blank");

    } catch (err) {
      console.error("Registration submission error:", err);
      setError("Something went wrong. Please connect with us directly on WhatsApp (+91 90288 94149).");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white text-[#202522] rounded-3xl shadow-2xl border border-black/[0.08] my-auto sm:my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* HEADER (Matches the PDF Navy/Forest Green Top Section) */}
          <div className="relative bg-[#004B28] text-white p-5 sm:p-8 rounded-t-3xl overflow-hidden">
            {/* Subtle brand dots overlay */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="relative z-10 space-y-3 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <BookOpen size={13} className="text-[#F58220]" />
                <span>Executive Training Program</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Export Class Registration Form
              </h2>

              <p className="text-sm sm:text-base text-white/85 font-light">
                Learn to export, one Sunday at a time
              </p>

              {/* 3 Top Badges (Exact from PDF) */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#F58220] text-white text-xs font-bold tracking-wide shadow-xs">
                  From ₹8,999
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-semibold">
                  4 Sundays a month
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-semibold">
                  12:00 pm – 1:00 pm
                </span>
              </div>
            </div>
          </div>

          {/* WHAT WE COVER PILLS (Exact from PDF) */}
          <div className="p-6 sm:px-8 pt-6 pb-4 bg-[#FBF6EF] border-b border-black/[0.06] space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              What we cover
            </div>

            <div className="flex flex-wrap gap-2">
              {whatWeCover.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-lg bg-white border border-[#006B35]/25 text-[#006B35] text-xs font-semibold shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#686F6B] leading-relaxed">
              Class time: <strong>12:00 pm to 1:00 pm (1 hour)</strong>, on <strong>4 Sundays every month</strong>. Fee: starting from <strong>₹8,999</strong>.
            </p>
          </div>

          {/* FORM CONTENT */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="h-16 w-16 bg-[#EAF5EC] text-[#006B35] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#202522]">
                  Registration Form Received!
                </h3>
                <p className="text-sm text-[#686F6B] max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your Export Class Registration Form. Our course coordinator will verify your batch selection and share the Sunday session joining link and orientation kit.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="/export-class-registration-form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-[#202522] hover:bg-neutral-50"
                  >
                    <Download size={14} className="text-[#006B35]" />
                    <span>Download Blank PDF Form</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#006B35] text-white text-xs font-semibold hover:bg-[#004B28] transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full name & Mobile / WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Saurabh Yadav"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      Mobile / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. +91 90288 94149"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Nagpur / Mumbai / Delhi"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                    />
                  </div>
                </div>

                {/* Where are you right now? (From PDF) */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                    Where are you right now?
                  </label>
                  <div className="space-y-2">
                    {stageOptions.map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => handleStageSelect(opt)}
                        className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                          formData.currentStage === opt
                            ? "border-[#006B35] bg-[#EAF5EC] text-[#006B35] font-semibold"
                            : "border-neutral-200 hover:bg-neutral-50 text-[#202522]"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            formData.currentStage === opt
                              ? "border-[#006B35] bg-[#006B35] text-white"
                              : "border-neutral-400 bg-white"
                          }`}
                        >
                          {formData.currentStage === opt && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs sm:text-sm">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Month you want to join & Preferred batch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      Month you want to join
                    </label>
                    <select
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522] bg-white"
                    >
                      <option>Next Upcoming Batch</option>
                      <option>December 2026</option>
                      <option>January 2027</option>
                      <option>February 2027</option>
                      <option>March 2027</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                      Preferred batch (4 Sundays)
                    </label>
                    <input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      placeholder="e.g. 4 Sundays (12:00 pm – 1:00 pm)"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                    />
                  </div>
                </div>

                {/* Product you want to export (optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                    Product you want to export <span className="text-[#686F6B] font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="e.g. Spices, Basmati Rice, Organic Produce, Manufactured Goods"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                  />
                </div>

                {/* Anything you want us to cover? (optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#202522] uppercase tracking-wider">
                    Anything you want us to cover? <span className="text-[#686F6B] font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="topics"
                    rows={3}
                    value={formData.topics}
                    onChange={handleChange}
                    placeholder="Specific questions on DGFT licensing, foreign buyer verification, shipping LC terms, or container calculation..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                  />
                </div>

                {/* Declaration Checkbox (Exact from PDF) */}
                <div className="p-3.5 rounded-xl bg-[#FBF6EF] border border-black/[0.06]">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#006B35] focus:ring-[#006B35]"
                    />
                    <span className="text-xs text-[#202522] leading-relaxed">
                      I understand the class fee starts from <strong>₹8,999</strong> and classes run on <strong>4 Sundays, 12:00 pm to 1:00 pm</strong>.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                    {error}
                  </div>
                )}

                {/* Submit & PDF Download Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#006B35] hover:bg-[#004B28] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Submitting Registration...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration & Confirm Seat</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#686F6B] pt-1">
                    <a
                      href="/export-class-registration-form.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#006B35] hover:underline"
                    >
                      <Download size={13} />
                      <span>Download Printable PDF Form</span>
                    </a>
                    <span>Send completed form on screen or WhatsApp</span>
                  </div>
                </div>

                <div className="text-center text-[11px] text-[#686F6B] pt-1 border-t border-black/[0.04]">
                  Fill this form on screen or print and write by hand. Send the completed form to the organiser to confirm your seat.
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
