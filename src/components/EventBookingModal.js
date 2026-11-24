"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function EventBookingModal({ open, setOpen }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all details.");
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load Razorpay SDK");

      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 149900, // Workshop price in paise
          customerDetails: {
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
          },
          bookingDetails: {
            category: "Workshop",
            subProducts: "Canton Fair 2026 Free Online Workshop",
          }
        }),
      });

      const order = await orderRes.json();
      if (!order.id) throw new Error(order.detail || order.error || "Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_Sk6wplrNSRrt1d",
        amount: order.amount,
        currency: order.currency,
        name: "New India Export",
        description: "Canton Fair 2026 Workshop Registration",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            await fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
              }),
            });

            alert("Thank you for registering! Your registration has been received successfully. Our team will contact you shortly.");
            setOpen(false);
            setFormData({ name: "", email: "", mobile: "" });
            setAgreed(false);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#006B35",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
        setIsSubmitting(false);
      });
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment error: " + (error.message || "Something went wrong."));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white text-[#202522] border border-black/[0.08] rounded-3xl shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/[0.06] bg-[#FBF6EF]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF5EC] text-[#006B35] text-[11px] font-bold uppercase tracking-wider mb-1">
                <span>Workshop Registration</span>
              </div>
              <h2 className="text-xl font-bold text-[#202522]">Reserve Your Seat</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-neutral-200 rounded-full text-[#686F6B] transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            <p className="text-xs text-[#686F6B] mb-5">
              Canton Fair 2026 Delegation Workshop • <strong>Sunday, 6 Sept 2026 | 1:00 PM IST</strong>
            </p>

            <form onSubmit={handlePayment} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#202522] uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#202522] uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#202522] uppercase tracking-wider">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#006B35] text-sm text-[#202522]"
                />
              </div>

              {/* Terms */}
              <div className="border-t border-black/[0.06] pt-4 mt-2 space-y-3">
                <h3 className="text-xs font-bold text-[#202522] uppercase tracking-wider">Terms & Conditions</h3>
                <div className="text-[11px] text-[#686F6B] space-y-1.5 h-28 overflow-y-auto pr-2 bg-[#FBF6EF] p-3 rounded-xl border border-black/[0.04]">
                  <p>1. Registration will be confirmed after successful booking verification.</p>
                  <p>2. Once processed, registrations are verified for confirmed workshop access credentials.</p>
                  <p>3. Participants must follow online decorum and instructions announced by the delegation.</p>
                  <p>4. New India Export reserves the right to manage attendees to ensure professional business matchmaking.</p>
                </div>
                
                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#006B35] focus:ring-[#006B35]"
                  />
                  <span className="text-xs text-[#686F6B] leading-relaxed">
                    I have read and agree to the Terms & Conditions and declaration.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className="w-full py-3.5 rounded-xl bg-[#006B35] hover:bg-[#004B28] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Complete Workshop Registration"}
                  <FaChevronRight className="text-xs" />
                </button>
                <p className="text-[11px] text-[#686F6B] mt-2 flex items-center justify-center gap-1.5">
                  <FiCheckCircle className="text-[#006B35]" />
                  <span>Secure Trade Registration via New India Export</span>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
