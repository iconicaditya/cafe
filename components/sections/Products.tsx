"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { BEST_SELLERS } from "@/data";

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

// ─── Section 6: Best Sellers ──────────────────────────────────────────────────
function BestSellersSection() {
  return (
    <section className="section-pad bg-white">
      <div className="content-wrap">
        <FadeUp className="text-center mb-16">
          <span className="section-label">Most Loved</span>
          <h2 className="section-heading mt-2 mb-4">Best Sellers</h2>
          <p className="section-subtext mx-auto text-center">
            Tried, tested, and adored by thousands — these are the items our guests order again and again.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLERS.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.08}>
              <article
                className="group bg-cafe-bg overflow-hidden shadow-soft-sm
                  card-hover cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-cafe-brown-dark text-white
                    font-inter text-[10px] font-bold tracking-wider uppercase
                    px-3 py-1.5 rounded-full">
                    {item.badge}
                  </span>
                  {/* Add button overlay */}
                  <button
                    aria-label="Add to order"
                    className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full
                      shadow-soft flex items-center justify-center
                      translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300"
                  >
                    <Plus size={16} className="text-cafe-brown-dark" />
                  </button>
                </div>

                <div className="p-5">
                  <span className="font-inter text-cafe-gold text-[11px] font-semibold
                    tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-playfair font-semibold text-lg text-cafe-text mt-1 mb-2">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={12}
                          className="text-cafe-gold fill-cafe-gold"
                        />
                      ))}
                    </div>
                    <span className="font-inter text-cafe-text-muted text-xs">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-playfair font-bold text-xl text-cafe-brown">
                      {item.price}
                    </span>
                    <button
                      className="font-inter text-sm font-semibold text-cafe-brown-dark
                        hover:text-cafe-gold transition-colors duration-200"
                    >
                      Order →
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

// ─── Section 7: Seasonal Special banner ──────────────────────────────────────
function SeasonalSpecialSection() {
  return (
    <section className="py-0 overflow-hidden">
      <FadeUp>
        <div className="relative min-h-[480px] flex items-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
              alt="Seasonal special — Spiced Autumn Latte"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cafe-brown-dark/90 via-cafe-brown-dark/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 content-wrap py-24">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 font-inter text-cafe-gold
                text-sm font-semibold tracking-[0.15em] uppercase mb-5">
                <span className="w-8 h-px bg-cafe-gold" />
                Limited Edition
              </span>
              <h2 className="font-playfair font-bold text-white
                text-[clamp(2rem,4vw,3rem)] leading-tight mb-5">
                Monsoon Spice Latte
                <span className="block font-normal text-white/70 mt-1">
                  — Now Available
                </span>
              </h2>
              <p className="font-inter text-white/75 text-lg leading-relaxed mb-8 max-w-md">
                Warming cardamom, cinnamon, and ginger married with our house espresso and
                steamed oat milk. Inspired by the monsoon evenings of the Himalayas.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#menu" className="btn-gold">
                  Try It Today
                </a>
                <a href="#menu" className="btn-ghost">
                  View All Specials
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default function ProductsModule() {
  return (
    <>
      <BestSellersSection />
      <SeasonalSpecialSection />
    </>
  );
}
