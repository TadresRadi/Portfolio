"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
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
    metrics: ["40% ↓ Latency", "50% ↓ Tokens"],
  },
  {
    title: "Elbatal Art Live Website",
    description:
      "A dynamic art portfolio website for Elbatal Art, featuring gallery showcases, artist profiles, exhibition schedules, and seamless user experience for art enthusiasts and collectors.",
    image: "/Elbatal-Art.png",
    tech: ["React", "Next.js", "TypeScript", "Python", "Django"],
    github: "https://github.com/TadresRadi/Elbatal-Art-Live-Website",
    metrics: ["65% ↑ Engagement", "30% ↓ Bounce Rate"],
  },
  {
    title: "Tech Platform",
    description:
      "A modern tech platform called RA, delivering scalable infrastructure, smart automation, and real-time analytics to power efficient, data-driven operations.",
    image: "/ai-content-generator-interface.png",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/TadresRadi/Ra-Tech",
    metrics: ["99.9% Uptime", "2s Load Time"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
    image: "/creative-portfolio-website.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    metrics: ["A+ Performance", "100% Responsive"],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

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
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              {t('featuredProjects').split(' ').map((word, i) => (
                <span key={i} className="block">{word.toUpperCase()}</span>
              ))}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('projectsDescription')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={containerVariants} className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="border-b border-border pb-16 last:border-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Project Image */}
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-lg bg-muted"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-foreground">
                        {project.title}
                      </h3>
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="flex flex-wrap gap-3">
                          {project.metrics.map((metric, i) => (
                            <span
                              key={i}
                              className="text-sm font-medium text-foreground bg-muted px-3 py-1 rounded"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      {project.github !== "#" && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3 rounded-none text-sm font-medium tracking-wide transition-all duration-300"
                          asChild
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {t('code').toUpperCase()}
                          </motion.a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
