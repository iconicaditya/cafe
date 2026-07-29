"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";

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

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="section-pad bg-cafe-dark overflow-hidden">
      <div className="content-wrap">
        <FadeUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-cafe-gold uppercase tracking-[0.12em] text-sm font-semibold font-inter mb-4">
            <span className="w-8 h-px bg-cafe-gold" />
            Testimonials
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mt-2">
            What Our Guests Say
          </h2>
        </FadeUp>

        {/* Slider */}
        <div className="max-w-3xl mx-auto relative">
          {/* Large quote icon */}
          <Quote
            size={80}
            className="absolute -top-4 -left-4 text-cafe-gold/10 rotate-180 pointer-events-none"
          />

          <div className="relative min-h-[260px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center px-4"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-cafe-gold fill-cafe-gold" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-playfair text-xl md:text-2xl text-white/90
                  leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cafe-gold/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-playfair font-semibold text-white text-lg">{t.name}</p>
                    <p className="font-inter text-cafe-gold/70 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                text-white/60 hover:border-cafe-gold hover:text-cafe-gold transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300
                    ${i === current ? "bg-cafe-gold w-8" : "bg-white/20 w-2 hover:bg-white/40"}`}
                />
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                text-white/60 hover:border-cafe-gold hover:text-cafe-gold transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider strip of avatars */}
        <FadeUp delay={0.2}>
          <div className="flex justify-center mt-16 gap-8 flex-wrap">
            {[
              { label: "4.9/5", sub: "Average Rating" },
              { label: "10K+", sub: "Happy Guests" },
              { label: "98%", sub: "Return Visitors" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair font-bold text-4xl text-cafe-gold">{stat.label}</p>
                <p className="font-inter text-white/50 text-sm mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
