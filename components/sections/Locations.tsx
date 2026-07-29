"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight, Instagram, Heart } from "lucide-react";
import { LOCATIONS, INSTAGRAM_POSTS } from "@/data";

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

// ─── Section 10: Locations ────────────────────────────────────────────────────
function LocationsSection() {
  return (
    <section id="locations" className="section-pad bg-white">
      <div className="content-wrap">
        <FadeUp className="text-center mb-16">
          <span className="section-label">Find Us</span>
          <h2 className="section-heading mt-2 mb-4">Our Locations</h2>
          <p className="section-subtext mx-auto text-center">
            Three carefully designed spaces, each with its own character — united by the
            same uncompromising standard of coffee.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <FadeUp key={loc.id} delay={i * 0.1}>
              <article
                className="group bg-cafe-bg overflow-hidden shadow-soft-sm
                  border border-cafe-border/40 card-hover"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-playfair font-bold text-xl text-cafe-text mb-5 leading-tight">
                    {loc.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-cafe-gold mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-cafe-text-secondary text-sm leading-relaxed">
                        {loc.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-cafe-gold flex-shrink-0" />
                      <span className="font-inter text-cafe-text-secondary text-sm">
                        {loc.phone}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-cafe-gold mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-cafe-text-secondary text-sm leading-relaxed">
                        {loc.hours}
                      </span>
                    </div>
                  </div>

                  <div className="divider my-6" />

                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-inter text-sm font-semibold
                      text-cafe-brown-dark hover:text-cafe-gold transition-colors duration-200 group/link"
                  >
                    Get Directions
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 11: Instagram Feed ───────────────────────────────────────────────
function InstagramSection() {
  return (
    <section className="section-pad bg-cafe-bg-alt">
      <div className="content-wrap">
        <FadeUp className="text-center mb-12">
          <span className="section-label">Social</span>
          <h2 className="section-heading mt-2 mb-3">
            Follow Our Journey
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-cafe-gold text-base
              font-semibold hover:text-cafe-brown transition-colors duration-200"
          >
            <Instagram size={18} />
            @velvetbrew
          </a>
        </FadeUp>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={post.src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cafe-brown-dark/0 group-hover:bg-cafe-brown-dark/60
                  transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    flex items-center gap-1.5 text-white font-inter text-sm font-semibold">
                    <Heart size={14} className="fill-white" />
                    {post.likes}
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LocationsModule() {
  return (
    <>
      <LocationsSection />
      <InstagramSection />
    </>
  );
}
