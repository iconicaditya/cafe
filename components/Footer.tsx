"use client";

import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/data";
import { useState } from "react";

const SOCIAL = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com",   label: "Twitter"   },
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook"  },
  { icon: Youtube,   href: "https://youtube.com",   label: "YouTube"   },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#141414] text-white">
      {/* Main footer */}
      <div className="content-wrap py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 rounded-full bg-cafe-brown flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                  <line x1="6" y1="2" x2="6" y2="4"/>
                  <line x1="10" y1="2" x2="10" y2="4"/>
                  <line x1="14" y1="2" x2="14" y2="4"/>
                </svg>
              </span>
              <div>
                <p className="font-playfair font-bold text-xl text-white leading-none">Velvet Brew</p>
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-cafe-gold">Premium Coffee</p>
              </div>
            </div>

            <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
              Handcrafted coffee, artisan pastries, and a warm sanctuary for those who appreciate
              the art of slow mornings.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center
                    text-white/40 hover:border-cafe-gold hover:text-cafe-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/45 hover:text-cafe-gold
                      transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-cafe-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              {[
                { day: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
                { day: "Saturday",        time: "8:00 AM – 10:00 PM" },
                { day: "Sunday",          time: "8:00 AM – 8:00 PM" },
                { day: "Public Holidays", time: "9:00 AM – 7:00 PM" },
              ].map((row) => (
                <li key={row.day} className="flex flex-col gap-0.5">
                  <span className="font-inter text-xs font-semibold text-cafe-gold tracking-wide uppercase">
                    {row.day}
                  </span>
                  <span className="font-inter text-sm text-white/45">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-white mb-6">Stay Connected</h4>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: "Heritage Court, Thamel, Kathmandu" },
                { icon: Phone,  text: "+977 1 4-VELVET" },
                { icon: Mail,   text: "hello@velvetbrew.co" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} className="text-cafe-gold mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm text-white/45">{text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <p className="font-inter text-xs text-white/35 uppercase tracking-widest mb-3">
              Newsletter
            </p>
            {subscribed ? (
              <p className="font-inter text-cafe-gold text-sm">
                ✓ You&apos;re subscribed. Welcome to the Velvet family!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white/8 border border-white/12 px-4 py-2.5
                    text-white placeholder:text-white/25 font-inter text-sm
                    outline-none focus:border-cafe-gold/40 transition-all duration-200"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 bg-cafe-gold flex items-center justify-center
                    hover:brightness-110 transition-all duration-200 flex-shrink-0"
                >
                  <ArrowRight size={16} className="text-white" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="content-wrap py-6 flex flex-col sm:flex-row items-center
          justify-between gap-3">
          <p className="font-inter text-white/30 text-xs">
            © {new Date().getFullYear()} Velvet Brew. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-white/25 text-xs hover:text-cafe-gold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
