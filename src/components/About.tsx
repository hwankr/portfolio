"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "JAVA",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
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

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm text-neutral-600 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative aspect-square md:aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden group"
        >
          {/* Placeholder for Image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900">
             <span className="sr-only">Profile Image</span>
             <svg className="w-20 h-20 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
             </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
