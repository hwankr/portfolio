"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Code2, Layers, Cpu } from "lucide-react"; // Icons for visual elements
import { GridPattern } from "./ui/GridPattern";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2, // Staggered delay
      ease: [0.22, 1, 0.36, 1], // Custom ease curve
    },
  }),
};

const floatingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: [0, -20, 0], // Floating animation
    transition: {
      delay: 1 + i * 0.2,
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background with Grid Pattern and Gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className="stroke-muted-foreground/20 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            squares={[
                [1, 1],
                [2, 4],
                [5, 2],
                [8, 5],
            ]} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-200/40 via-transparent to-transparent dark:from-neutral-800/30" />
      </div>

      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8 text-center lg:text-left z-10">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available for new projects
            </div>
            <h2 className="text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase mb-4">
              S. H. J E O N
            </h2>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-serif font-medium tracking-tighter text-foreground leading-[1.1]"
          >
            Building Logic, <br />
            <span className="text-muted-foreground italic">Defining Future.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            I craft robust software systems and intuitive web experiences. 
            Bridging the gap between complex logic and elegant design.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full text-base"
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 rounded-full text-base"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Visual Elements */}
        <div className="relative h-[400px] hidden lg:block perspective-1000">
             {/* Floating Glass Cards / Abstract Shapes */}
             
             {/* Card 1: Abstract Code */}
             <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={floatingVariants}
                className="absolute top-10 right-10 w-64 h-40 bg-card/50 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-4 z-20"
             >
                <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-muted-foreground">logic.ts</span>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted/50 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-muted/50 rounded animate-pulse delay-75" />
                    <div className="h-2 w-full bg-muted/50 rounded animate-pulse delay-150" />
                </div>
             </motion.div>

             {/* Card 2: Stack Icons */}
             <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={floatingVariants} 
                className="absolute top-40 right-40 w-56 h-56 bg-gradient-to-br from-neutral-100/80 to-neutral-200/80 dark:from-neutral-900/80 dark:to-neutral-800/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl flex items-center justify-center z-10"
             >
                 <div className="grid grid-cols-2 gap-4 p-6">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <Layers className="w-5 h-5 text-blue-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold">Web</span>
                    </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-purple-500" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold">AI/ML</span>
                    </div>
                 </div>
             </motion.div>

             {/* Background Decoration Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
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

