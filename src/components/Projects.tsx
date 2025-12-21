"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Rebrand",
    category: "Design & Development",
    year: "2024",
    description: "A complete overhaul of a fashion brand's digital presence, focusing on minimalism and performance.",
    gradient: "from-neutral-200 to-stone-400 dark:from-neutral-800 dark:to-neutral-700"
  },
  {
    title: "Financial Dashboard",
    category: "Web Application",
    year: "2023",
    description: "Real-time data visualization platform for fintech, featuring complex charts and dark mode.",
    gradient: "from-blue-200/50 to-slate-400/50 dark:from-slate-800 dark:to-slate-900"
  },
  {
    title: "Art Gallery",
    category: "Website",
    year: "2023",
    description: "Immersive virtual tour experience for a modern art gallery with WebGL interactions.",
    gradient: "from-purple-200/50 to-pink-300/50 dark:from-neutral-900 dark:to-neutral-800"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
             <h2 className="text-3xl md:text-5xl font-serif mb-2">Selected Works</h2>
             <p className="text-muted-foreground">A collection of projects I&apos;ve worked on.</p>
          </div>
          <span className="text-muted-foreground hidden md:inline-block border-b border-border pb-1">2023 — Present</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-transparent shadow-none group cursor-pointer">
                <div className={`aspect-[4/3] rounded-2xl mb-6 overflow-hidden bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                         <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
                
                <CardHeader className="p-0 mb-2">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</span>
                     <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-2xl font-serif group-hover:underline decoration-1 underline-offset-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
