"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const scrolled = true;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("#home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 h-[90px] flex items-center bg-white shadow-soft border-b border-cafe-border transition-all duration-500"
      >
        <div className="content-wrap w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <span className="w-9 h-9 rounded-full bg-cafe-brown-dark flex items-center justify-center group-hover:bg-cafe-brown transition-colors duration-300">
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
              <p className="font-playfair font-bold text-xl leading-none text-cafe-text">
                Velvet Brew
              </p>
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-cafe-gold">
                Premium Coffee
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 font-inter text-[13px] font-semibold tracking-[0.06em] uppercase
                  transition-colors duration-300 group
                  ${scrolled ? "text-cafe-text" : "text-white/90"}
                  hover:${scrolled ? "text-cafe-brown" : "text-white"}`}
              >
                {link.label}
                {/* Underline indicator */}
                <span className={`absolute bottom-0 left-4 right-4 h-px bg-cafe-gold
                  transition-transform duration-300 origin-left
                  ${active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:block">
            <a
              href="#reservation"
              className="font-inter text-[13px] font-semibold tracking-[0.06em] uppercase px-6 py-3 border-2 border-cafe-brown-dark text-cafe-brown-dark transition-all duration-300 hover:bg-cafe-brown-dark hover:text-white"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-300
              ${scrolled ? "text-cafe-text" : "text-white"}`}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-80 bg-white shadow-soft-xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-cafe-border">
                <div>
                  <p className="font-playfair font-bold text-xl text-cafe-text">Velvet Brew</p>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-cafe-gold">Premium Coffee</p>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-cafe-text-muted hover:text-cafe-text transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`py-3 font-inter text-base font-semibold tracking-[0.04em] uppercase
                      border-b border-cafe-border/50 last:border-0
                      transition-colors duration-200
                      ${active === link.href ? "text-cafe-gold" : "text-cafe-text hover:text-cafe-brown"}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Reserve button */}
              <div className="px-8 py-6 border-t border-cafe-border">
                <a
                  href="#reservation"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Reserve a Table
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
