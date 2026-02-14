"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "./ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          {/* Large Typography Hero */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.h1
              className="text-7xl md:text-9xl font-black leading-none tracking-tighter"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="text-foreground block">{t('creative').toUpperCase()}</span>
              <span className="text-foreground block">{t('developer').toUpperCase()}</span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My name is Tadres Rady, I'm Specialized in building modern web applications, responsive designs, and scalable frontend architectures. Experienced in React, Next.js, and creating exceptional user experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-none text-sm font-medium tracking-wide transition-all duration-300"
              asChild
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {t('viewMyWork').toUpperCase()}
              </motion.a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 rounded-none text-sm font-medium tracking-wide transition-all duration-300"
              asChild
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD CV
              </motion.a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/TadresRadi", label: "GitHub", external: true },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tadresrady/", label: "LinkedIn", external: true },
              { icon: Mail, href: "#contact", label: "Email", external: false },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-muted hover:bg-foreground hover:text-background border border-border hover:border-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 400, damping: 10 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <ArrowDown className="w-6 h-6 text-foreground" />
      </motion.div>
    </section>
  )
}
