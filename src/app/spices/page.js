"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SpicesPage() {
  const spices = [
    {
      name: "TURMERIC (HALDI)",
      desc: "Renowned for its vibrant natural golden color and high curcumin content. Indian turmeric is widely sourced for medicinal, therapeutic, and culinary applications worldwide.",
      img: "/spices/turmeric-clean.jpg",
      grade: "High Curcumin Grade",
    },
    {
      name: "BLACK PEPPER (KALI MIRCH)",
      desc: "Known globally as the 'King of Spices', Indian black pepper delivers a bold, pungent aroma and deep heat. Sourced from the lush coastal regions of Southern India.",
      img: "/spices/pepper-exact.jpg",
      grade: "Bold Garbled 550g/l - 600g/l",
    },
    {
      name: "CUMIN (JEERA)",
      desc: "Warm, earthy, and aromatic cumin seeds cleaned and machine-sorted to 99%+ purity. Extensively utilized in global curry blends, seasoning oils, and extracts.",
      img: "/spices/cumin.jpg",
      grade: "Machine Cleaned 99.5% Purity",
    },
    {
      name: "CORIANDER (DHANIYA)",
      desc: "Select whole coriander seeds with citrusy aroma and sweet undertone. High in natural volatile oils, thoroughly sun-dried and graded for international export.",
      img: "/spices/coriander.jpg",
      grade: "Green Eagle & Scooter Grade",
    },
    {
      name: "RED CHILLY POWDER & STEMLESS",
      desc: "Premium Indian red chilly delivering brilliant natural color and balanced heat without artificial coloring or preservatives. Tested for aflatoxin and pesticide limits.",
      img: "/spices/redchili.jpg",
      grade: "Teja / S17 / Byadgi Varieties",
    },
    {
      name: "CLOVE (LAUNG)",
      desc: "Hand-picked, highly aromatic dried flower buds with high essential oil concentration. Known for its intense warm, pungent, and sweet aroma in food and pharma.",
      img: "/spices/clove.jpg",
      grade: "Zanzibar & Lalpari Grade",
    },
    {
      name: "CARDAMOM (ELAICHI)",
      desc: "Celebrated as the 'Queen of Spices', rich in fragrant volatile oils, sweet aroma, and vibrant green pods sourced from high-altitude plantations in Kerala.",
      img: "/spices/cardomom.jpg",
      grade: "7mm - 8mm+ Extra Bold Green",
    },
    {
      name: "CINNAMON (DALCHINI)",
      desc: "Naturally fragrant and woody bark selected for flavor depth, baking, confectionery, and traditional spice formulations.",
      img: "/spices/cinnamon.jpg",
      grade: "Roll & Flat Clean Bark",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#18201B]">
      {/* ==== HERO SECTION ==== */}
      <section className="relative w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[440px] flex items-center overflow-hidden bg-[#FBF6EF] py-8 sm:py-12 lg:py-14 border-b border-black/[0.05]">
        {/* Authentic Reference Design Background Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/spices/hero-spices-bg.png"
            alt="Indian Spices & Seasonings Export Background"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Mobile ivory scrim so description stays crisp over spice bowls */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF6EF]/92 via-[#FBF6EF]/75 to-[#FBF6EF]/20 md:bg-none pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#006B35]/25 text-[#006B35] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
              <Leaf size={13} className="text-[#006B35]" />
              <span>PURE INDIAN AGRICULTURAL SPICES</span>
            </div>

            {/* Signature Two-Tone Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-[#111814]">
              <span className="text-[#004B28]">Spices &</span>{" "}
              <span className="text-[#F58220]">Seasonings</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#556059] leading-relaxed max-w-xl font-normal">
              Discover India&apos;s finest spices — renowned for natural volatile oil concentration, intense aroma, and verifiable purity.
            </p>
          </div>
        </div>
      </section>

      {/* ==== SPICES CATALOG LIST (PROPER LIST FORM WITH CONTINUOUS BACKGROUND) ==== */}
      <section id="catalog" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF6EF]">
        {/* Delicate Dot Matrix Pattern Across Entire Catalog */}
        <div className="absolute inset-0 bg-dot-pattern-light opacity-35 pointer-events-none z-0" />

        {/* Ambient Soft Glow Gradients */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#EAF5EC]/45 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute top-2/3 left-0 w-96 h-96 bg-gradient-to-tr from-[#FFF6EE]/45 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

        {/* Floating Decorative Leaves along the scroll path */}
        <div className="absolute top-16 -left-3 w-14 sm:w-16 h-36 pointer-events-none opacity-85 select-none z-0">
          <Image src="/spices/leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-[28%] -right-3 w-14 sm:w-18 h-40 pointer-events-none opacity-85 select-none z-0">
          <Image src="/spices/leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-[55%] -left-3 w-14 sm:w-16 h-36 pointer-events-none opacity-85 select-none z-0">
          <Image src="/spices/leaves-left.png" alt="Decorative leaf" fill className="object-contain" />
        </div>
        <div className="absolute top-[80%] -right-3 w-14 sm:w-18 h-40 pointer-events-none opacity-85 select-none z-0">
          <Image src="/spices/leaves-right.png" alt="Decorative leaf" fill className="object-contain" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 relative z-10">
          {spices.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.45 }}
              className="flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-black/[0.07] shadow-sm hover:shadow-xl hover:border-[#006B35]/20 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Product Image Frame */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#F7F6F2] border-b border-black/[0.05] shrink-0">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                {/* Single Clean Floating Grade Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#006B35] shadow-xs flex items-center gap-1.5 border border-black/[0.04]">
                  <Leaf size={13} className="text-[#006B35]" />
                  <span>{item.grade}</span>
                </div>
              </div>

              {/* Description & Actions */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220]">
                    <span className="w-5 h-[2px] bg-[#F58220] rounded-full inline-block" />
                    <span>EXPORT SPECIFICATION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111814] font-heading tracking-tight group-hover:text-[#006B35] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#556059] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <a
                    href={`https://wa.me/919028894149?text=Hello%20New%20India%20Export%2C%20I%20am%20interested%20in%20quotation%20for%20${encodeURIComponent(
                      item.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#004B28] hover:bg-[#003B20] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>Enquire for {item.name.split(" ")[0]}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-50 text-[#18201B] border border-black/[0.12] text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
                  >
                    <span>Request Spec Sheet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==== BOTTOM VISUAL ACCENT BANNER ==== */}
      <section 
        className="relative w-full min-h-[115px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[290px] overflow-hidden bg-[#004B28]"
        style={{ aspectRatio: "1205 / 275" }}
      >
        <Image
          src="/spices/footer-spices-bg.png"
          alt="Bringing the Finest of India to the World"
          fill
          quality={100}
          unoptimized
          className="object-cover object-top pointer-events-none select-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-end pb-2.5 sm:pb-9 md:pb-11 max-w-6xl mx-auto px-4 sm:px-8">
          <p className="w-[65%] sm:w-auto text-white text-xs sm:text-xl md:text-2xl font-serif italic tracking-wide drop-shadow-md leading-tight">
            Bringing the Finest of India to the World.
          </p>
        </div>
      </section>
    </main>
  );
}
