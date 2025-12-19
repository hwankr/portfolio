"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-background to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl space-y-8"
      >
        <h2 className="text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase">
          Portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-foreground">
          Crafting Digital <br />
          <span className="text-muted-foreground italic">Experiences.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-lg mx-auto leading-relaxed">
          I build simple, accessible, and premium web interfaces that leave a lasting impression.
        </p>
        
        <div className="pt-8 gap-4 flex justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              View Work
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
