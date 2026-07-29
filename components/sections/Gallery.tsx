"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "@/data";

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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-pad bg-cafe-bg">
      <div className="content-wrap">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <span className="section-label">Our World</span>
          <h2 className="section-heading mt-2 mb-4">A Glimpse Inside</h2>
          <p className="section-subtext mx-auto text-center">
            Every frame is a moment worth savouring — from the first pour to the last sip.
          </p>
        </FadeUp>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <FadeUp
              key={i}
              delay={i * 0.05}
              className={`relative overflow-hidden cursor-pointer group
                ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cafe-brown-dark/0 group-hover:bg-cafe-brown-dark/40
                transition-all duration-400 flex items-center justify-center"
                onClick={() => setLightbox(img.src)}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-soft">
                  <ZoomIn size={20} className="text-cafe-brown-dark" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.2} className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View More on Instagram
          </a>
        </FadeUp>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10
                hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={22} className="text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full mx-4 aspect-[4/3] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery fullsize"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 900px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
