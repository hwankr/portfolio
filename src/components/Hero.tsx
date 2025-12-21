"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200/40 via-background to-background dark:from-neutral-800/30" />
      
      <div className="max-w-4xl space-y-8 z-10">
        <motion.div
           custom={0}
           initial="hidden"
           animate="visible"
           variants={fadeUpVariants}
        >
          <h2 className="text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase mb-4">
             S. H. J E O N
          </h2>
        </motion.div>

        <motion.h1 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter text-foreground"
        >
          Building Logic, <br /> 
          <span className="text-muted-foreground/80 italic">Defining Future.</span>
        </motion.h1>

        <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-lg md:text-2xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed font-light"
        >
          Software developer driven by curiosity. I focus on building robust systems and exploring the synergy between Web and AI.
        </motion.p>
        
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="pt-8 gap-4 flex flex-col md:flex-row justify-center items-center"
        >
            <Button size="lg" className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all text-base">
              View Work
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full border-muted-foreground/20 hover:bg-muted/50 transition-all text-base">
              Contact Me
            </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}

