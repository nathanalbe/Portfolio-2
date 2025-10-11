'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: 'Summer 2023',
      description: 'Developed mobile applications using React Native and contributed to full-stack web development projects. Collaborated with senior developers on feature implementation and code reviews.',
      technologies: ['React Native', 'JavaScript', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Data Analysis Intern',
      company: 'DataInsights Inc.',
      location: 'New York, NY',
      period: 'Spring 2023',
      description: 'Analyzed large datasets using Python and R, created data visualizations, and presented findings to stakeholders. Improved data processing efficiency by 30%.',
      technologies: ['Python', 'R', 'SQL', 'Tableau'],
      link: '#'
    },
    {
      title: 'Mobile App Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: 'Fall 2022',
      description: 'Built cross-platform mobile applications using Flutter. Implemented real-time features and integrated third-party APIs. Led a team of 3 junior developers.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      link: '#'
    }
  ]

  return (
    <motion.div
      id="experience"
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
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          My professional journey in software development, from internships to full-time roles
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-3">
                    <span className="font-semibold text-orange-500">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <motion.a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
