"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Package, 
  Globe2, 
  Award, 
  Ship,
  PhoneCall,
  MessageCircle,
  Puzzle,
  Baby,
  Smile
} from "lucide-react";

export default function ToysPage() {
  const categories = [
    {
      title: "Traditional Handcrafted Wooden Toys",
      origin: "Channapatna & Varanasi Craft Clusters",
      desc: "Authentic Indian lacquerware wooden toys crafted from seasoned Wrightia tinctoria (Aale mara) wood, finished with natural non-toxic vegetable dyes (turmeric, indigo, kumkum).",
      features: [
        "100% natural organic vegetable colors",
        "Silky-smooth edges with zero splinters",
        "Traditional GI-tagged artisanal craft",
        "Eco-friendly, biodegradable materials"
      ],
      tags: ["Channapatna Toys", "Wooden Pull Toys", "Spinning Tops", "Stacking Rings"],
      img: "/Toys.jpg"
    },
    {
      title: "Educational STEM & Montessori Toys",
      origin: "Certified Precision Manufacturing",
      desc: "Thoughtfully engineered cognitive development tools, sensory manipulation boards, geometric shape sorters, counting abacuses, and STEM wooden building blocks designed for schools and early learning centers.",
      features: [
        "Montessori-aligned developmental play",
        "High-density beechwood & birch plywood",
        "Lead-free, water-based European EN71 paints",
        "Precision laser-cut interlocking parts"
      ],
      tags: ["STEM Building Blocks", "Abacus", "Shape Sorters", "Montessori Sets"],
      img: "/toys-hero-bg.png"
    },
    {
      title: "Wooden Brain Teaser Puzzles & Games",
      origin: "Rajasthan & Karnataka Clusters",
      desc: "Classic mind-engaging wooden puzzles, 3D Burr puzzles, handcrafted wooden chess sets, backgammon boards, and family strategy games built to heirloom durability.",
      features: [
        "Rich polished sheesham & rosewood grain",
        "Hand-carved collectible game pieces",
        "Compact travel & luxury gift packaging",
        "Custom laser logo engraving available"
      ],
      tags: ["3D Wooden Puzzles", "Artisanal Chess Sets", "Tangrams", "Brain Teasers"],
      img: "/Toys.jpg"
    },
    {
      title: "Export Plush & Soft Toys (OEM / Private Label)",
      origin: "Modern Textile Corridors (Tiruppur & Surat)",
      desc: "Premium plush stuffed toys and soft sensory baby companions made from export-grade organic cotton and hypoallergenic plush fabrics with reinforced child-safe stitching.",
      features: [
        "Hypoallergenic, wash-safe polyfill filling",
        "Embroidered child-safe eyes & features",
        "BSCI & Sedex audited ethical manufacturing",
        "Complete OEM / private label branding"
      ],
      tags: ["Organic Cotton Plush", "Baby Rattle Toys", "Custom Mascots", "OEM Soft Toys"],
      img: "/toys-hero-bg.png"
    }
  ];

  const specs = [
    { param: "Safety Standards", value: "BIS IS 9873 (Parts 1-9), EN71 (Parts 1-3), ASTM F963 compliant" },
    { param: "Materials Used", value: "Seasoned Hale Wood, Ivory Wood, Beechwood, Organic Cotton, Water-based Non-Toxic Paints" },
    { param: "Quality Control", value: "100% Pre-shipment physical inspection, drop tests, torque/tension tests, chemical migration tests" },
    { param: "Packaging Options", value: "Custom printed 4-color retail gift boxes, biodegradable hangtags, barcode labeling, master 5-ply cartons" },
    { param: "Minimum Order (MOQ)", value: "LCL trial consignments from 500 units; FCL 20ft/40ft container load contracts" },
    { param: "Incoterms Available", value: "FOB (JNPT Mumbai / Chennai Port / ICD MIHAN Nagpur), CIF, CFR, Ex-Works" },
    { param: "Export Documentation", value: "Certificate of Origin, Laboratory Test Reports, BIS Compliance Certificate, Commercial Invoice & Packing List" }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#202522]">
      
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center text-center overflow-hidden bg-[#0A1A10] py-8 sm:py-12 lg:py-14 border-b border-black/[0.05] text-white">
        <Image
          src="/toys-hero-bg.png"
          alt="Export Grade Indian Toys & Handcrafted Games - New India Export"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic dark emerald gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#004B28]/70 via-black/45 to-[#003B20]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-emerald-200 text-[11px] sm:text-sm font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-[#F58220] shrink-0" />
            <span>BIS Certified • Non-Toxic • Eco-Friendly</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg font-heading leading-[1.12]">
            Indian Toys &amp; Handicrafts
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 text-xs sm:text-base md:text-lg font-normal leading-relaxed drop-shadow-md">
            Delivering India’s finest handcrafted wooden toys, STEM Montessori sets, and certified educational games to discerning global retailers and educational distributors.
          </p>
        </div>
      </section>

      {/* ==== 4-PILLAR EXPORT ADVANTAGE ==== */}
      <section className="py-10 sm:py-12 bg-[#FBF6EF] border-b border-[#006B35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF6EF] border border-black/[0.06] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-sm font-bold text-[#18201B] font-heading">Global Safety Standards</h4>
              <p className="text-xs text-[#686F6B] leading-relaxed">
                BIS IS 9873, EN71 and ASTM F963 lab tested with zero toxic heavy metals.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF6EF] border border-black/[0.06] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center">
                <Smile size={20} />
              </div>
              <h4 className="text-sm font-bold text-[#18201B] font-heading">100% Non-Toxic Dyes</h4>
              <p className="text-xs text-[#686F6B] leading-relaxed">
                Traditional vegetable lac & water-based child-safe certified paints.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF6EF] border border-black/[0.06] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center">
                <Package size={20} />
              </div>
              <h4 className="text-sm font-bold text-[#18201B] font-heading">OEM & Private Label</h4>
              <p className="text-xs text-[#686F6B] leading-relaxed">
                Custom retail boxes, barcode tagging, and bespoke buyer specifications.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF6EF] border border-black/[0.06] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#006B35] flex items-center justify-center">
                <Ship size={20} />
              </div>
              <h4 className="text-sm font-bold text-[#18201B] font-heading">Multi-Modal Logistics</h4>
              <p className="text-xs text-[#686F6B] leading-relaxed">
                FCL ocean freight via JNPT Nhava Sheva & air cargo consolidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== PRODUCT PORTFOLIO CATEGORIES ==== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/15 text-[#006B35] text-xs font-bold uppercase tracking-wider">
            <Puzzle size={13} className="text-[#006B35]" />
            <span>Export Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18201B] tracking-tight font-heading">
            Export Toy Ranges & Collections
          </h2>
          <p className="text-sm sm:text-base text-[#686F6B] leading-relaxed">
            From centuries-old GI-protected artisanal wooden crafts to modern Montessori educational sets, we curate and quality-check every consignment before export dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden border border-black/[0.07] hover:border-[#006B35]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-68 w-full overflow-hidden border-b border-black/[0.05] shrink-0">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-[#F58220] uppercase tracking-wider block">
                    {cat.origin}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#555C57] leading-relaxed">
                  {cat.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-black/[0.06]">
                  <span className="text-[11px] font-bold text-[#18201B] uppercase tracking-wider block">
                    Key Specifications & Quality Markers:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#4A554E]">
                    {cat.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#006B35] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[#FAFAF8] border border-black/[0.06] text-[11px] font-medium text-[#4A554E]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <Link
                    href={`/contact?product=Indian%20Toys%20%26%20Handicrafts&category=${encodeURIComponent(cat.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#EAF5EC] hover:bg-[#006B35] text-[#006B35] hover:text-white font-bold text-xs transition-colors"
                  >
                    <span>Request Volume Quotation</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==== EXPORT SPECIFICATIONS TABLE ==== */}
      <section className="py-16 bg-white border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Commercial Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18201B] font-heading">
              Export Compliance & Sourcing Specifications
            </h2>
          </div>

          <div className="rounded-2xl border border-black/[0.08] overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm block sm:table">
              <tbody className="block sm:table-row-group divide-y divide-black/[0.05] sm:divide-y-0">
                {specs.map((s, idx) => (
                  <tr key={s.param} className={`flex flex-col sm:table-row ${idx % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}`}>
                    <td className="pt-3 pb-0.5 sm:py-3.5 px-4 sm:px-6 font-bold text-[#18201B] sm:border-b border-black/[0.05] sm:w-1/3">
                      {s.param}
                    </td>
                    <td className="pt-0 pb-3 sm:py-3.5 px-4 sm:px-6 text-[#4A554E] sm:border-b border-black/[0.05]">
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==== BOTTOM RFQ CTA BANNER ==== */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#003B20] via-[#004B28] to-[#042415] text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F58220] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#F58220]" />
            <span>Direct Commercial Trade Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Source Certified Indian Toys for Your Retail & Distribution Chain
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-light">
            Contact our international export specialists for bespoke production samples, private labeling, master container pricing, and scheduled port dispatch.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F58220] hover:bg-[#E07216] text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-105 text-center"
            >
              Submit Trade RFQ
            </Link>
            <a
              href="https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20want%20to%20discuss%20an%20export%20inquiry%20for%20Indian%20Toys."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-sm tracking-wide transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
