'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, Database } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { number: '2+', label: 'Years Experience', icon: Calendar },
    { number: '5+', label: 'Projects Completed', icon: Code },
    { number: '3', label: 'Technologies', icon: Database }
  ]

  const skills = [
    {
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS, Android',
      color: 'skill-card-orange'
    },
    {
      title: 'Full-Stack Development',
      description: 'React, Node.js, Python, JavaScript',
      color: 'skill-card-blue'
    }
  ]

  return (
    <div id="hero" className="space-y-16">
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
        >
          <span className="block text-gray-300">Hi, I&apos;m</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Nathan Albe
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Aspiring Software Engineer specializing in mobile development, 
          full-stack, and data analysis. Passionate about creating 
          innovative solutions and continuous learning.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
      >
        {stats.map((stat, index) => {
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="stat-number group-hover:text-orange-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
            className={`skill-card ${skill.color} group cursor-pointer`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
              {skill.title}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
