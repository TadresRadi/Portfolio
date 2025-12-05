"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Booking Platform",
    description:
      "A modern booking platform called Deva, offering seamless scheduling, real-time availability, secure payments, and a streamlined admin dashboard for effortless management",
    image: "/modern-booking-interface.png",
    tech: ["React", "TypeScript", "Python", "Django", "PostgreSQL"],
    github: "https://github.com/TadresRadi/Diva-Booking-Website",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
  },
  {
    title: "Tech Platform",
    description:
      "A modern tech platform called RA, delivering scalable infrastructure, smart automation, and real-time analytics to power efficient, data-driven operations.",
    image: "/ai-content-generator-interface.png",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
    image: "/creative-portfolio-website.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A collection of projects that showcase my skills in web development, design, and problem-solving. Each
              project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 rounded-2xl group">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl border-primary/30 hover:bg-primary/10 bg-transparent"
                        asChild
                      >
                        <motion.a href={project.github} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </motion.a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
