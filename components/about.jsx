"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "./ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, and modern web technologies",
    color: "oklch(0.7 0.15 180)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, Figma, intuitive user interfaces and experiences",
    color: "oklch(0.65 0.18 280)",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and accessibility",
    color: "oklch(0.75 0.14 200)",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
    color: "oklch(0.68 0.16 160)",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that make a difference. With expertise
              in modern web technologies and a keen eye for design, I bring ideas to life through clean code and
              thoughtful user interfaces.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 rounded-2xl group">
                  <motion.div
                    className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
