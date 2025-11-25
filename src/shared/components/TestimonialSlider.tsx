import { OpinionCard } from "@shared/components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { OpinionCardProps } from "./OpinionCardComponent";

interface TestimonialSliderProps {
  opinions: OpinionCardProps[];
}

export const TestimonialSlider = ({ opinions }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % opinions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [opinions.length]);

  return (
    <div className="w-full">
      <div className="relative min-h-[180px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full"
          >
            <OpinionCard {...(opinions[currentIndex] as OpinionCardProps)} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {opinions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
