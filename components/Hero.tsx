"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85",
    alt: "Velvet Brew - Premium fine dining cafe interior with elegant ambiance",
    badge: "Since 2014 · Kathmandu",
    heading: "Where Every Cup Tells\na Story",
    subtext: "Handcrafted coffee, artisan pastries, and a warm sanctuary designed for those who appreciate the beauty of slow mornings.",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    alt: "Velvet Brew - Luxury restaurant lounge with sophisticated decor",
    badge: "Premium Ambiance · Unforgettable Moments",
    heading: "A Sanctuary of\nElegance & Flavor",
    subtext: "Step into a world where sophisticated design meets culinary artistry. Every detail curated for your comfort.",
  },
  {
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=85",
    alt: "Velvet Brew - High-end cafe bar with premium wood and marble finishes",
    badge: "Artisan Craft · Exceptional Taste",
    heading: "Crafted by Passion,\nServed with Pride",
    subtext: "From our master baristas to your table — experience the finest single-origin brews and handcrafted delicacies.",
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=85",
    alt: "Velvet Brew - Exclusive rooftop cafe terrace with city skyline views",
    badge: "Rooftop Views · City Lights",
    heading: "Dine Above the\nCity Lights",
    subtext: "Our exclusive rooftop terrace offers breathtaking panoramic views, perfect for intimate gatherings and special evenings.",
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const current = HERO_SLIDES[currentIndex];

  // Auto-cycle images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background with crossfade slideshow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        {/* Subtle color overlay that shifts per image */}
        <motion.div
          key={`overlay-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: currentIndex % 2 === 0
              ? "linear-gradient(135deg, rgba(180, 120, 60, 0.3), transparent)"
              : "linear-gradient(135deg, rgba(60, 120, 180, 0.3), transparent)",
          }}
        />
      </motion.div>

      {/* Floating texture grain (subtle) */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }}
      />

      {/* Image navigation dots */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                index === currentIndex
                  ? "w-10 bg-cafe-gold"
                  : "w-1.5 bg-white/40 group-hover:bg-white/70 group-hover:w-3"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-5 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          key={`badge-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-cafe-gold" />
          <span className="font-inter text-cafe-gold text-sm font-semibold tracking-[0.18em] uppercase">
            {current.badge}
          </span>
          <span className="w-10 h-px bg-cafe-gold" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          key={`heading-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-playfair font-bold text-white
            text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.1] mb-6"
        >
          {current.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          key={`subtext-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-inter text-white/80 text-[clamp(1rem,2vw,1.25rem)]
            leading-relaxed max-w-xl mx-auto mb-10"
        >
          {current.subtext}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#reservation" className="btn-primary text-[15px] px-9 py-4">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost text-[15px] px-9 py-4">
            Explore Menu
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex items-center justify-center gap-8 mt-14
            border-t border-white/15 pt-8"
        >
          {[
            { value: "3", label: "Locations" },
            { value: "50+", label: "Menu Items" },
            { value: "10K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-3xl text-white">{stat.value}</p>
              <p className="font-inter text-white/60 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="font-inter text-white/50 text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center"
        >
          <ArrowDown size={14} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}