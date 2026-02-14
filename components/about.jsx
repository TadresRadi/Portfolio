"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Card } from "./ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, language } = useLanguage()

  const skills = [
    {
      icon: Code,
      title: t('frontend'),
      description: t('frontendDesc'),
      color: "oklch(0.7 0.15 180)",
    },
    {
      icon: Code,
      title: language === 'ar' ? 'تطوير الواجهات الخلفية' : "Backend Development",
      description: language === 'ar' ? 'Python, Django, Odoo, RESTful APIs, بناء الأنظمة الخلفية القوية' : "Python, Django, Odoo, RESTful APIs, building robust backend systems",
      color: "oklch(0.65 0.18 280)",
    },
    {
      icon: Palette,
      title: t('uiux'),
      description: t('uiuxDesc'),
      color: "oklch(0.75 0.14 200)",
    },
    {
      icon: Zap,
      title: t('performance'),
      description: t('performanceDesc'),
      color: "oklch(0.68 0.16 160)",
    },
    {
      icon: Users,
      title: t('collaboration'),
      description: t('collaborationDesc'),
      color: "oklch(0.7 0.15 180)",
    },
  ]

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
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">{t('aboutMe')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t('aboutDescription')}
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
