"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Rebrand",
    category: "Design & Development",
    year: "2024",
    description: "A complete overhaul of a fashion brand's digital presence."
  },
  {
    title: "Financial Dashboard",
    category: "Web Application",
    year: "2023",
    description: "Real-time data visualization platform for fintech."
  },
  {
    title: "Art Gallery",
    category: "Website",
    year: "2023",
    description: "Immersive virtual tour experience for a modern art gallery."
  }
];

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <h2 className="text-3xl md:text-5xl font-serif">Selected Works</h2>
          <span className="text-muted-foreground hidden md:inline-block">2023 — Present</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-neutral-50 dark:bg-neutral-900 group hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                     <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</span>
                     <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
                  </div>
                  <CardTitle className="text-xl group-hover:underline decoration-1 underline-offset-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
