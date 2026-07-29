"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { FEATURED_COFFEES, SIGNATURE_DRINKS, DRINK_CATEGORIES } from "@/data";

// ─── Reusable fade-up wrapper ─────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section 2: Featured Coffee ──────────────────────────────────────────────
function FeaturedSection() {
  return (
    <section id="menu" className="section-pad bg-white">
      <div className="content-wrap">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <span className="section-label">Our Signature</span>
          <h2 className="section-heading mt-2 mb-4">
            Featured Coffees
          </h2>
          <p className="section-subtext mx-auto text-center">
            Each blend is crafted to perfection — roasted in small batches, pulled with precision,
            and served with care.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_COFFEES.map((coffee, i) => (
            <FadeUp key={coffee.id} delay={i * 0.1}>
              <article
                className="group relative bg-cafe-bg overflow-hidden shadow-soft
                  card-hover cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-cafe-gold text-white
                    font-inter text-xs font-semibold tracking-wide uppercase
                    px-3 py-1.5 rounded-full shadow-gold">
                    {coffee.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-playfair font-bold text-[1.5rem] text-cafe-text mb-3 leading-tight">
                    {coffee.name}
                  </h3>
                  <p className="font-inter text-cafe-text-secondary text-[15px] leading-relaxed mb-6">
                    {coffee.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair font-bold text-2xl text-cafe-brown">
                      {coffee.price}
                    </span>
                    <button
                      className="flex items-center gap-2 bg-cafe-brown-dark text-white
                        px-5 py-2.5 font-inter text-sm font-semibold
                        transition-all duration-300 hover:bg-cafe-brown hover:-translate-y-0.5
                        hover:shadow-soft active:translate-y-0"
                    >
                      <ShoppingBag size={15} />
                      Order
                    </button>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Signature Drinks ─────────────────────────────────────────────
function SignatureDrinksSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? SIGNATURE_DRINKS
      : SIGNATURE_DRINKS.filter((d) => d.category === activeCategory);

  return (
    <section className="section-pad bg-cafe-bg-alt">
      <div className="content-wrap">
        {/* Header */}
        <FadeUp className="text-center mb-12">
          <span className="section-label">Full Menu</span>
          <h2 className="section-heading mt-2 mb-4">Signature Drinks</h2>
          <p className="section-subtext mx-auto text-center">
            From bold espresso to silky cold brews — there is a Velvet Brew cup made for every mood.
          </p>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {DRINK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-inter text-sm font-semibold tracking-wide px-6 py-2.5 rounded-full
                transition-all duration-300
                ${activeCategory === cat
                  ? "bg-cafe-brown-dark text-white shadow-soft"
                  : "bg-white text-cafe-text-secondary border border-cafe-border hover:border-cafe-brown hover:text-cafe-brown"
                }`}
            >
              {cat}
            </button>
          ))}
        </FadeUp>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((drink, i) => (
            <motion.article
              key={drink.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white overflow-hidden shadow-soft-sm
                card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm
                  text-cafe-brown font-inter text-[11px] font-bold tracking-wider uppercase
                  px-3 py-1 rounded-full">
                  {drink.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-playfair font-semibold text-xl text-cafe-text mb-1.5">
                  {drink.name}
                </h3>
                <p className="font-inter text-cafe-text-muted text-sm leading-relaxed mb-4">
                  {drink.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair font-bold text-xl text-cafe-brown">
                    {drink.price}
                  </span>
                  <button
                    className="text-cafe-gold font-inter text-sm font-semibold
                      hover:text-cafe-brown transition-colors duration-200
                      flex items-center gap-1.5 group/btn"
                  >
                    Add to order
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View full menu link */}
        <FadeUp delay={0.2} className="text-center mt-12">
          <a href="#" className="btn-outline">
            View Full Menu
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Export both as one module ────────────────────────────────────────────────
export default function FeaturedCoffeeModule() {
  return (
    <>
      <FeaturedSection />
      <SignatureDrinksSection />
    </>
  );
}
