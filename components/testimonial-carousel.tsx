"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const go = (direction: number) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8">
      <Quote className="mb-8 size-10 text-teal" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-xl font-semibold leading-9 text-navy dark:text-white sm:text-2xl">
            "{testimonial.quote}"
          </p>
          <div className="mt-8 border-t border-border pt-5">
            <p className="font-bold text-navy dark:text-white">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((item, itemIndex) => (
            <button
              key={item.company}
              type="button"
              aria-label={`Show testimonial ${itemIndex + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                itemIndex === index ? "w-8 bg-corporate" : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button aria-label="Previous testimonial" size="icon" variant="outline" onClick={() => go(-1)}>
            <ChevronLeft />
          </Button>
          <Button aria-label="Next testimonial" size="icon" variant="outline" onClick={() => go(1)}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
