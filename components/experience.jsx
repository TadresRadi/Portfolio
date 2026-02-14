"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Engineered production-grade full-stack applications, responsive designs, and modern web architectures. Developed adaptive tracking systems that reduced client project risks by 20% through improved user engagement and performance optimization.",
    achievements: ["React, Next.js, TypeScript", "Node.js, Python, Django", "Database Design & Optimization"],
  },
  {
    title: "Frontend Developer", 
    company: "Tech Startup",
    period: "2021 - 2022",
    description: "Built responsive user interfaces and interactive web applications using modern frontend technologies. Collaborated with design teams to implement pixel-perfect designs and smooth user experiences.",
    achievements: ["React, Vue.js, JavaScript", "RESTful APIs Integration", "Performance Optimization"],
  },
  {
    title: "Web Development Intern",
    company: "Digital Agency",
    period: "2020 - 2021", 
    description: "Assisted in developing client websites and web applications. Gained hands-on experience with modern web development practices and agile methodologies.",
    achievements: ["HTML, CSS, JavaScript", "WordPress Development", "Cross-browser Compatibility"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language } = useLanguage()

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

  const sectionTitle = language === 'ar' ? 'الخبرة العمل' : 'WORK'
  const experienceTitle = language === 'ar' ? 'خبرة العمل' : 'EXPERIENCE'

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
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
              <span className="block">{sectionTitle}</span>
              <span className="block">{experienceTitle}</span>
            </h2>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={containerVariants} className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-b border-border pb-16 last:border-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Date */}
                  <div className="lg:text-right">
                    <p className="text-sm font-medium text-muted-foreground tracking-wide">
                      {exp.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded"
                        >
                          {achievement}
                        </span>
                      ))}
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
