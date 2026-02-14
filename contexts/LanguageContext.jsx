"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const translations = {
  en: {
    // Navigation
    about: "About",
    projects: "Projects", 
    contact: "Contact",
    
    // Hero
    creative: "Creative",
    developer: "Developer",
    heroDescription: "I craft exceptional digital experiences with modern technologies, focusing on performance, accessibility, and beautiful design.",
    viewMyWork: "View My Work",
    
    // About
    aboutMe: "About Me",
    aboutDescription: "I'm a passionate developer who loves creating digital experiences that make a difference. With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean code and thoughtful user interfaces.",
    frontend: "Frontend Development",
    frontendDesc: "React, Next.js, TypeScript, and modern web technologies",
    uiux: "UI/UX Design",
    uiuxDesc: "Creating beautiful, Figma, intuitive user interfaces and experiences",
    performance: "Performance",
    performanceDesc: "Optimizing applications for speed and accessibility",
    collaboration: "Collaboration",
    collaborationDesc: "Working effectively with teams and stakeholders",
    
    // Projects
    featuredProjects: "Featured Projects",
    projectsDescription: "A collection of projects that showcase my skills in web development, design, and problem-solving. Each project represents a unique challenge and learning experience.",
    code: "Code",
    
    // Contact
    letsWork: "Let's Work Together",
    contactDescription: "Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.",
    email: "Email",
    phone: "Phone", 
    location: "Location",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    
    // Footer
    portfolio: "Portfolio"
  },
  ar: {
    // Navigation
    about: "نبذة عني",
    projects: "المشاريع",
    contact: "اتصل بي",
    
    // Hero
    creative: "مبدع",
    developer: "مطور",
    heroDescription: "أصنع تجارب رقمية استثنائية باستخدام التقنيات الحديثة، مع التركيز على الأداء وإمكانية الوصول والتصميم الجميل.",
    viewMyWork: "شاهد أعمالي",
    
    // About
    aboutMe: "نبذة عني",
    aboutDescription: "أنا مطور شغوف يحب إنشاء تجارب رقمية تحدث فرقاً. مع خبرة في تقنيات الويب الحديثة وعين دقيقة للتصميم، أحول الأفكار إلى واقع من خلال كود نظيف وواجهات مستخدم مدروسة.",
    frontend: "تطوير الواجهات الأمامية",
    frontendDesc: "React, Next.js, TypeScript، وتقنيات الويب الحديثة",
    uiux: "تصميم واجهة المستخدم",
    uiuxDesc: "إنشاء واجهات مستخدم جميلة وبديهية وتجارب مستخدم رائعة",
    performance: "الأداء",
    performanceDesc: "تحسين التطبيقات من أجل السرعة وإمكانية الوصول",
    collaboration: "التعاون",
    collaborationDesc: "العمل بفعالية مع الفرق وأصحاب المصلحة",
    
    // Projects
    featuredProjects: "المشاريع المميزة",
    projectsDescription: "مجموعة من المشاريع التي تظهر مهاراتي في تطوير الويب والتصميم وحل المشكلات. كل مشروع يمثل تحدياً فريداً وتجربة تعلم.",
    code: "الكود",
    
    // Contact
    letsWork: "لنعمل معاً",
    contactDescription: "هل لديك مشروع في ذهنك؟ أحب أن أسمع عنه. دعنا نناقش كيف يمكننا تحويل أفكارك إلى واقع.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني", 
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
    
    // Footer
    portfolio: "معرض الأعمال"
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
