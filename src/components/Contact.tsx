"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif"
        >
          Let&apos;s work together.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto"
        >
          Have a project in mind? I&apos;m always open to discussing new opportunities and ideas.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="bg-white text-black hover:bg-neutral-200 mt-4 rounded-full px-8 py-6 text-lg">
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
