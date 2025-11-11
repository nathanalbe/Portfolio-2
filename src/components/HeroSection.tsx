'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
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
          Software Engineer Intern at Pinterest | Computer Science student at George Mason University 
          with a minor in Computational Data Science. Passionate about mobile development, 
          full-stack engineering, and machine learning.
        </motion.p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
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
