"use client"

import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark')
    
    // Particle properties
    const particles = []
    const numParticles = isDarkMode ? 200 : 50
    const speed = 0.5

    // Create particles based on theme
    for (let i = 0; i < numParticles; i++) {
      if (isDarkMode) {
        // Dark mode: Stars
        particles.push({
          type: 'star',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random()
        })
      } else {
        // Light mode: Floating orbs/particles
        particles.push({
          type: 'orb',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * speed * 0.3,
          speedY: (Math.random() - 0.5) * speed * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          color: Math.random() > 0.5 ? '200, 200, 200' : '150, 150, 150'
        })
      }
    }

    // Animation loop
    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Update opacity
        if (particle.type === 'star') {
          // Twinkle effect for stars
          particle.opacity += (Math.random() - 0.5) * 0.01
          particle.opacity = Math.max(0.1, Math.min(1, particle.opacity))
        } else {
          // Gentle fade for orbs
          particle.opacity += (Math.random() - 0.5) * 0.005
          particle.opacity = Math.max(0.05, Math.min(0.4, particle.opacity))
        }

        // Draw particle
        if (particle.type === 'star') {
          // Draw star
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`
          ctx.fill()

          // Add glow effect for larger stars
          if (particle.size > 1) {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.1})`
            ctx.fill()
          }
        } else {
          // Draw floating orb for light mode
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          )
          gradient.addColorStop(0, `rgba(${particle.color}, ${particle.opacity})`)
          gradient.addColorStop(1, `rgba(${particle.color}, 0)`)
          
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle theme changes
    const handleThemeChange = () => {
      location.reload() // Simple reload to regenerate particles for new theme
    }

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('themechange', handleThemeChange)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('themechange', handleThemeChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
