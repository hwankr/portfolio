"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-black text-white selection:bg-white/20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Let&apos;s work together.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="max-w-md mx-auto w-full flex flex-col sm:flex-row gap-2"
        >
           <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-light"
           />
           <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-black hover:bg-neutral-200 transaction-transform active:scale-95">
             Get in touch
           </Button>
        </motion.div>

        <div className="pt-12 border-t border-white/10 w-full">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
               <div>
                  Daegue in Seoul, South Korea.
               </div>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">Github</a>
                  <a href="#" className="hover:text-white transition-colors">Email</a>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
