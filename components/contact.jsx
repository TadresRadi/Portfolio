"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const handleSubmit = (e) => {
  e.preventDefault();
  alert(t('sendMessage') + "! (demo mode — no email sending)");
  setFormData({ name: "", email: "", message: "" });
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      value: "Tadrosradi@gmail.com",
      href: "mailto:tadrosradi@gmail.com",
    },
    {
      icon: Phone,
      title: t('phone'),
      value: "+20 01550781860",
      href: "tel:01550781860",
    },
    {
      icon: MapPin,
      title: t('location'),
      value: "Egypt, Qena",
      href: "https://www.google.com/maps/@26.1594953,32.7257566,18z?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">{t('letsWork')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t('contactDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === "Location" ? "_blank" : undefined}
                    rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Input
                        name="name"
                        placeholder={t('yourName')}
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                        required
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('yourEmail')}
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Textarea
                      name="message"
                      placeholder={t('yourMessage')}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary rounded-xl resize-none"
                      required
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl glow-cyan group"
                  >
                    <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {t('sendMessage')}
                      <Send className="w-4 h-4 ml-2" />
                    </motion.div>
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
