import Image from "next/image";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FBF6EF] text-[#202522]">
      {/* ==== HEADER SECTION ==== */}
      <section className="relative w-full py-16 sm:py-28 lg:py-36 flex items-center justify-center text-center overflow-hidden bg-[#0A1A10] text-white">
        <Image
          src="/contact-hero-bg.png"
          alt="Contact New India Export - Global Trade Desk & Quality Office"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 sm:space-y-5">
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-white/95 text-base sm:text-lg font-normal leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
            We’d love to hear from you — let’s connect to build dependable international trade partnerships.
          </p>
        </div>
      </section>

      <ContactSection showBackground />
    </main>
  );
}
