"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, Users, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name:    z.string().min(2, "Please enter your name"),
  email:   z.string().email("Please enter a valid email"),
  date:    z.string().min(1, "Please select a date"),
  time:    z.string().min(1, "Please select a time"),
  guests:  z.string().min(1, "Please select guest count"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

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

export default function ReservationCTASection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Simulate network delay (frontend only)
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Reservation:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="section-pad bg-cafe-dark relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] rounded-full bg-cafe-brown/10 blur-3xl pointer-events-none" />

      <div className="content-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: info */}
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 text-cafe-gold uppercase
                tracking-[0.12em] text-sm font-semibold font-inter mb-5">
                <span className="w-8 h-px bg-cafe-gold" />
                Reservations
              </span>
              <h2 className="font-playfair font-bold text-white
                text-[clamp(2rem,4vw,3.25rem)] leading-tight mb-6">
                Reserve Your
                <span className="block text-cafe-gold/90">
                  Perfect Table
                </span>
              </h2>
              <p className="font-inter text-white/65 text-lg leading-relaxed mb-10">
                Whether it is an intimate morning for two, a working afternoon, or a celebration
                dinner — we will have your table ready exactly as you like it.
              </p>
            </FadeUp>

            {/* Features */}
            <FadeUp delay={0.1}>
              <div className="space-y-5">
                {[
                  { icon: CalendarDays, label: "Same-Day Reservations Available" },
                  { icon: Users,        label: "Groups Up to 20 Guests" },
                  { icon: Clock,        label: "Open 7 Days, 7am – 10pm" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cafe-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-cafe-gold" />
                    </div>
                    <span className="font-inter text-white/80 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.15}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={56} className="text-cafe-gold mx-auto mb-5" />
                  <h3 className="font-playfair font-bold text-2xl text-white mb-3">
                    Reservation Confirmed!
                  </h3>
                  <p className="font-inter text-white/65 leading-relaxed">
                    We&apos;ve received your reservation. A confirmation will be sent to your email.
                    We look forward to hosting you.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="font-playfair font-semibold text-2xl text-white mb-6">
                    Book a Table
                  </h3>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Full Name"
                        className="w-full bg-white/10 border border-white/15
                          px-5 py-3.5 text-white placeholder:text-white/35 font-inter text-sm
                          outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                          transition-all duration-200"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 font-inter">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/10 border border-white/15
                          px-5 py-3.5 text-white placeholder:text-white/35 font-inter text-sm
                          outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                          transition-all duration-200"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-inter">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Date + Time */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        {...register("date")}
                        type="date"
                        className="w-full bg-white/10 border border-white/15
                          px-5 py-3.5 text-white/80 font-inter text-sm
                          outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                          transition-all duration-200 [color-scheme:dark]"
                      />
                      {errors.date && (
                        <p className="text-red-400 text-xs mt-1 font-inter">{errors.date.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register("time")}
                        className="w-full bg-white/10 border border-white/15 rounded-2xl
                          px-5 py-3.5 text-white/80 font-inter text-sm
                          outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                          transition-all duration-200 [color-scheme:dark]"
                        defaultValue=""
                      >
                        <option value="" disabled>Select Time</option>
                        {["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM",
                          "12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM",
                          "5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"].map((t) => (
                          <option key={t} value={t} className="bg-cafe-dark">{t}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-400 text-xs mt-1 font-inter">{errors.time.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <select
                      {...register("guests")}
                      className="w-full bg-white/10 border border-white/15
                        px-5 py-3.5 text-white/80 font-inter text-sm
                        outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                        transition-all duration-200 [color-scheme:dark]"
                      defaultValue=""
                    >
                      <option value="" disabled>Number of Guests</option>
                      {["1 Guest","2 Guests","3 Guests","4 Guests","5–6 Guests",
                        "7–10 Guests","11–15 Guests","16–20 Guests"].map((g) => (
                        <option key={g} value={g} className="bg-cafe-dark">{g}</option>
                      ))}
                    </select>
                    {errors.guests && (
                      <p className="text-red-400 text-xs mt-1 font-inter">{errors.guests.message}</p>
                    )}
                  </div>

                  {/* Special requests */}
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Special requests (optional)"
                      rows={3}
                      className="w-full bg-white/10 border border-white/15
                        px-5 py-3.5 text-white placeholder:text-white/35 font-inter text-sm
                        outline-none focus:border-cafe-gold/60 focus:ring-2 focus:ring-cafe-gold/15
                        transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
