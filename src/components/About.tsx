"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a passionate creative developer with a keen eye for detail. 
              My journey began in graphic design, which naturally evolved into a love for 
              interactive web experiences.
            </p>
            <p>
              I believe that good design is invisible. It should support the content 
              and enhance the user&apos;s experience without shouting for attention.
              I specialize in building accessible, semantic, and performant web applications.
            </p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative aspect-square md:aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden"
        >
          {/* Placeholder for Image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            [Profile Image Placeholder]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
