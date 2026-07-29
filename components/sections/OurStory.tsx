"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Award, Users, Zap, Heart, Leaf } from "lucide-react";
import { STORY_TIMELINE, WHY_US } from "@/data";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Coffee, Award, Users, Zap, Heart, Leaf,
};

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

// ─── Section 4: Our Story ─────────────────────────────────────────────────────
function OurStorySection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="content-wrap">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: image collage */}
          <FadeUp className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden shadow-soft-lg aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                alt="Inside Velvet Brew cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating small image */}
            <div className="absolute -bottom-6 -right-6 lg:right-[-2rem] w-44 h-44
              overflow-hidden shadow-soft-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80"
                alt="Coffee beans"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Stat card */}
            <div className="absolute top-6 -left-4 lg:left-[-2rem] bg-white
              shadow-soft-lg px-6 py-4">
              <p className="font-playfair font-bold text-4xl text-cafe-text">10+</p>
              <p className="font-inter text-cafe-text-secondary text-sm">Years of Excellence</p>
            </div>
          </FadeUp>

          {/* Right: content */}
          <div>
            <FadeUp>
              <span className="section-label">Our Story</span>
              <h2 className="section-heading mt-2 mb-5">
                A Decade of Crafting Exceptional Coffee
              </h2>
              <p className="font-inter text-cafe-text-secondary text-lg leading-relaxed mb-10">
                What began as one passionate barista with a single espresso machine has grown into
                Kathmandu&apos;s most beloved specialty coffee brand. Every decision we&apos;ve made —
                from the farms we partner with to the cups we serve in — reflects an unwavering
                commitment to quality.
              </p>
            </FadeUp>

            {/* Timeline */}
            <div className="space-y-0">
              {STORY_TIMELINE.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.1}>
                  <div className="flex gap-5 pb-8 last:pb-0">
                    {/* Year + line */}
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className="w-10 h-10 rounded-full bg-cafe-gold/15 border-2 border-cafe-gold
                        flex items-center justify-center flex-shrink-0">
                        <span className="font-inter text-[10px] font-bold text-cafe-gold">{item.year}</span>
                      </div>
                      {i < STORY_TIMELINE.length - 1 && (
                        <div className="w-px flex-1 bg-cafe-border min-h-[2rem]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pt-1">
                      <h4 className="font-playfair font-semibold text-xl text-cafe-text mb-1.5">
                        {item.title}
                      </h4>
                      <p className="font-inter text-cafe-text-secondary text-[15px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3} className="mt-10">
              <a href="#" className="btn-primary">
                Learn More About Us
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Why Choose Us ─────────────────────────────────────────────────
function WhyChooseUsSection() {
  return (
    <section className="section-pad bg-cafe-bg">
      <div className="content-wrap">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <span className="section-label">Why Velvet Brew</span>
          <h2 className="section-heading mt-2 mb-4">
            The Difference You Can Taste
          </h2>
          <p className="section-subtext mx-auto text-center">
            We believe great coffee is the sum of a hundred small decisions made with care.
            Here is what sets us apart.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div
                  className="group bg-white p-8 shadow-soft-sm border border-cafe-border/50
                    card-hover"
                >
                  <div className="w-12 h-12 bg-cafe-gold/10 flex items-center justify-center mb-6
                    group-hover:bg-cafe-gold/20 transition-colors duration-300">
                    {Icon && <Icon size={22} className="text-cafe-gold" />}
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-cafe-text mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-cafe-text-secondary text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function OurStoryModule() {
  return (
    <>
      <OurStorySection />
      <WhyChooseUsSection />
    </>
  );
}
