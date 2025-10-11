'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Database, BookOpen } from 'lucide-react'

export default function AboutSection() {
  const achievements = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Built responsive web applications using React, Node.js, and modern frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developed cross-platform mobile apps with React Native and Flutter'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Analyzed complex datasets and created visualizations using Python and R'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices in software development'
    }
  ]

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-12"
    >
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          I'm a passionate software engineer with a strong foundation in mobile development, 
          full-stack technologies, and data analysis. I love creating innovative solutions 
          and continuously learning new technologies.
        </motion.p>
      </div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Icon className="text-orange-500" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'React Native', 'Flutter', 'React', 'Node.js',
            'Python', 'JavaScript', 'TypeScript', 'SQL',
            'Git', 'AWS', 'Firebase', 'MongoDB'
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.05 }}
              className="bg-gray-700/50 rounded-lg px-4 py-2 text-center text-sm text-gray-300 hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
