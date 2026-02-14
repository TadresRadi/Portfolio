"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language } = useLanguage()

  const stats = [
    {
      value: "10+",
      label: language === 'ar' ? 'مشاريع مكتملة' : 'PROJECTS DELIVERED',
    },
    {
      value: "5+",
      label: language === 'ar' ? 'عملاء سعداء' : 'HAPPY CLIENTS',
    },
    {
      value: "EGYPT",
      label: language === 'ar' ? 'مقيم في مصر' : 'EGYPT RESIDENT',
    },
    {
      value: "AVAILABLE",
      label: language === 'ar' ? 'متاح للعمل' : 'AVAILABLE FOR HIRE',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="py-20 px-6 border-y border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center space-y-2"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
