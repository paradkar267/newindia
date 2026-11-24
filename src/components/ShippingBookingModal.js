"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  Ship, 
  Plane, 
  Box, 
  PackageSearch, 
  User, 
  Weight, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Globe 
} from "lucide-react";

export default function ShippingBookingModal({ open, setOpen }) {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    shipment: "",
    category: "",
    subProducts: [],
    quantity: "",
    name: "",
    phone: "",
    email: "",
    country: "",
    address: "",
  });

  const update = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleSubProduct = useCallback((item) => {
    setForm((prev) => ({
      ...prev,
      subProducts: prev.subProducts.includes(item)
        ? prev.subProducts.filter((i) => i !== item)
        : [...prev.subProducts, item],
    }));
  }, []);

  const Categories = [
    { name: "Spices", icon: PackageSearch },
    { name: "Cereals & Pulses", icon: Box },
    { name: "Organic Food", icon: Box },
    { name: "Fruits & Vegetables", icon: Box },
    { name: "Others", icon: Box },
  ];

  const SubProductsMap = {
    Spices: ["Turmeric", "Red Chilli Powder", "Cumin", "Coriander", "Cardamom", "Black Pepper", "Clove", "Cinnamon"],
    "Cereals & Pulses": ["Basmati Rice", "Wheat", "Non Basmati rice", "Sorghum(Jowar)", "Maize", "Soyabean", "Pearl Millet", "Red gram", "Black gram", "Green gram"],
    "Organic Food": ["Organic cereals", "Organic Wheat", "Organic Spices"],
    "Fruits & Vegetables": ["Lemon", "Onion", "Chilli", "Mango", "Orange", "Brinjal"],
    Others: ["Custom Items"],
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

  const send = async () => {
    setIsSubmitting(true);

    const bookingMessage = `*New Shipping Booking Request - New India Export*
----------------------------------------
• *Shipment Mode:* ${form.shipment}
• *Category:* ${form.category}
• *Products:* ${form.subProducts.join(", ") || "General"}
• *Quantity / Weight:* ${form.quantity}
• *Full Name:* ${form.name}
• *Phone / WhatsApp:* ${form.phone}
• *Email:* ${form.email || "N/A"}
• *Country:* ${form.country || "N/A"}
• *Address:* ${form.address || "N/A"}`;

    try {
      // 1. Submit to Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "5dfb3e12-4f27-417a-81d2-c2021ffd842b",
            subject: `Shipping Booking Request: ${form.name} (${form.category} - ${form.shipment})`,
            ...form,
            subProducts: form.subProducts.join(", "),
          }),
        });
      } catch (e) {
        console.warn("Web3Forms error:", e);
      }

      // Try Razorpay if available, otherwise confirm and fallback to WhatsApp
      let openedRazorpay = false;
      try {
        const scriptLoaded = await loadRazorpayScript();
        if (scriptLoaded && window.Razorpay) {
          const orderRes = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: 100, // 1 INR in paise for token booking
              customerDetails: {
                name: form.name,
                email: form.email,
                phone: form.phone,
                address: form.address,
                country: form.country,
              },
              bookingDetails: {
                shipment: form.shipment,
                category: form.category,
                subProducts: form.subProducts.join(", "),
                quantity: form.quantity,
              }
            }),
          });

          if (orderRes.ok) {
            const order = await orderRes.json();
            if (order.id) {
              openedRazorpay = true;
              const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_Sk6wplrNSRrt1d",
                amount: order.amount,
                currency: order.currency,
                name: "New India Export",
                description: `Shipping Booking for ${form.category}`,
                order_id: order.id,
                handler: async function (response) {
                  setSubmitted(true);
                  setIsSubmitting(false);
                },
                prefill: {
                  name: form.name,
                  email: form.email,
                  contact: form.phone,
                },
                theme: {
                  color: "#006B35",
                },
              };
              const rzp = new window.Razorpay(options);
              rzp.open();
              return;
            }
          }
        }
      } catch (err) {
        console.warn("Razorpay skipped or error, falling back to direct confirm:", err);
      }

      if (!openedRazorpay) {
        setSubmitted(true);
        // Also open WhatsApp directly
        const encoded = encodeURIComponent(bookingMessage);
        window.open(`https://wa.me/919028894149?text=${encoded}`, "_blank");
      }
    } catch (e) {
      console.error("Booking error:", e);
      alert("Submission error. Connecting directly to WhatsApp.");
      const encoded = encodeURIComponent(bookingMessage);
      window.open(`https://wa.me/919028894149?text=${encoded}`, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setOpen(false);
    setStep(0);
    setSubmitted(false);
    setForm({
      shipment: "",
      category: "",
      subProducts: [],
      quantity: "",
      name: "",
      phone: "",
      email: "",
      country: "",
      address: "",
    });
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[460px] bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 my-8 overflow-hidden"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={handleReset}
            className="absolute right-4 top-4 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#EAF5EC] text-[#006B35] rounded-full mx-auto flex items-center justify-center">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#202522]">
                Booking Request Sent!
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thank you, <strong>{form.name}</strong>. Your shipping booking request for <strong>{form.category}</strong> ({form.shipment}) has been received. Our export logistics team will contact you shortly on <strong>{form.phone}</strong>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="w-full mt-4 py-3 rounded-xl bg-[#006B35] text-white font-bold text-sm hover:bg-[#004B28] transition-colors shadow-md shadow-[#006B35]/20"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-7 space-y-5">
              
              {/* STEP 0 - SHIPMENT */}
              {step === 0 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-900">Choose Shipment</h2>
                    <p className="text-xs text-gray-500">Select your preferred international transit mode</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        update("shipment", "Air");
                        setStep(1);
                      }}
                      className="p-5 border-2 border-gray-200 hover:border-[#006B35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-[#EAF5EC]/40 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#006B35] group-hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                        <Plane size={24} />
                      </div>
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#006B35]">Air Freight</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        update("shipment", "Sea");
                        setStep(1);
                      }}
                      className="p-5 border-2 border-gray-200 hover:border-[#006B35] rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-[#EAF5EC]/40 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#006B35] group-hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                        <Ship size={24} />
                      </div>
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#006B35]">Sea Freight</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 1 - CATEGORY */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-900">Select Category</h2>
                    <p className="text-xs text-gray-500">Choose product category for {form.shipment} shipment</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {Categories.map((cat) => (
                      <button
                        key={cat.name}
                        type="button"
                        onClick={() => {
                          update("category", cat.name);
                          update("subProducts", []);
                          setStep(2);
                        }}
                        className={`p-3.5 border rounded-xl flex items-center gap-2.5 text-left transition-all duration-200 cursor-pointer ${
                          form.category === cat.name 
                            ? "border-[#006B35] bg-[#EAF5EC] text-[#006B35] font-semibold" 
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 text-sm"
                        }`}
                      >
                        <cat.icon size={18} className="text-[#006B35] shrink-0" />
                        <span className="truncate">{cat.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      ← Back
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 - SUB PRODUCTS */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-900">Select Products</h2>
                    <p className="text-xs text-gray-500">Pick one or more products under {form.category}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 max-h-[42vh] overflow-y-auto pr-1">
                    {SubProductsMap[form.category]?.map((item) => {
                      const selected = form.subProducts.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleSubProduct(item)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all duration-150 cursor-pointer ${
                            selected
                              ? "border-[#006B35] bg-[#006B35] text-white shadow-xs"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="truncate">{item}</span>
                            {selected && <Check size={14} className="shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      disabled={form.subProducts.length === 0}
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 text-sm font-bold bg-[#006B35] text-white px-5 py-2.5 rounded-xl disabled:bg-[#cbd5e1] disabled:text-white disabled:cursor-not-allowed hover:bg-[#004B28] transition-colors shadow-xs"
                    >
                      <span>Continue</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 - QUANTITY */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-900">Quantity / Weight</h2>
                    <p className="text-xs text-gray-500">Specify expected export volume or packaging size</p>
                  </div>

                  <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 focus-within:border-[#006B35] focus-within:ring-1 focus-within:ring-[#006B35] transition-all">
                    <Weight size={18} className="text-gray-400 shrink-0" />
                    <input
                      placeholder="e.g. 500kg or 20 boxes"
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      autoFocus
                    />
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      disabled={!form.quantity.trim()}
                      onClick={() => setStep(4)}
                      className="inline-flex items-center gap-2 text-sm font-bold bg-[#006B35] text-white px-5 py-2.5 rounded-xl disabled:bg-[#cbd5e1] disabled:text-white disabled:cursor-not-allowed hover:bg-[#004B28] transition-colors shadow-xs"
                    >
                      <span>Continue</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 - USER DETAILS (Exact visual match to user uploaded screenshot media_1795424545162_2094c1ca.jpg) */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900">Your Details</h2>

                  <div className="space-y-3">
                    {/* Full Name */}
                    <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3.5 py-3 focus-within:border-gray-500 transition-all">
                      <User size={18} className="text-gray-400 shrink-0" />
                      <input
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3.5 py-3 focus-within:border-gray-500 transition-all">
                      <input
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3.5 py-3 focus-within:border-gray-500 transition-all">
                      <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      />
                    </div>

                    {/* Country */}
                    <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3.5 py-3 focus-within:border-gray-500 transition-all">
                      <input
                        placeholder="Country"
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      />
                    </div>

                    {/* Full Address */}
                    <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3.5 py-3 focus-within:border-gray-500 transition-all">
                      <input
                        placeholder="Full Address"
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                        className="w-full text-sm outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Actions matching media_1795424545162_2094c1ca.jpg: Left '← Back', Right 'Review' */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      disabled={!form.name.trim() || !form.phone.trim()}
                      onClick={() => setStep(5)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        !form.name.trim() || !form.phone.trim()
                          ? "bg-[#cbd5e1] text-white cursor-not-allowed"
                          : "bg-[#006B35] text-white hover:bg-[#004B28] cursor-pointer shadow-xs"
                      }`}
                    >
                      Review
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5 - SUMMARY & SUBMIT */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-900">Review Your Request</h2>
                    <p className="text-xs text-gray-500">Please verify details before submitting</p>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-4 space-y-2 text-xs sm:text-sm bg-gray-50">
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Shipment Mode:</span>
                      <span className="font-semibold text-gray-900">{form.shipment} Freight</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-semibold text-gray-900">{form.category}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Products:</span>
                      <span className="font-semibold text-gray-900 text-right max-w-[200px] truncate">{form.subProducts.join(", ")}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Quantity / Weight:</span>
                      <span className="font-semibold text-gray-900">{form.quantity}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Name:</span>
                      <span className="font-semibold text-gray-900">{form.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Phone:</span>
                      <span className="font-semibold text-gray-900">{form.phone}</span>
                    </div>
                    {form.country && (
                      <div className="flex justify-between py-1 border-b border-gray-200">
                        <span className="text-gray-500">Country:</span>
                        <span className="font-semibold text-gray-900">{form.country}</span>
                      </div>
                    )}
                    {form.email && (
                      <div className="flex justify-between py-1">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-semibold text-gray-900">{form.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={send}
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#F58220] hover:bg-[#E07216] text-white shadow-md shadow-[#F58220]/25 transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm & Submit"}
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
