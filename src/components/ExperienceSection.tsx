'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Pinterest',
      location: 'Remote',
      period: 'May 2025 - Aug 2025',
      description: 'Developed features for Pinterest iOS app serving 50+ million users. Redesigned metadata layouts boosting clickthrough rates by 13% and built dynamic color filters increasing engagement by 17%. Developed GraphQL APIs and iOS features in Objective-C and Python.',
      technologies: ['Objective-C', 'Python', 'GraphQL', 'iOS Development'],
      link: 'https://www.linkedin.com/posts/nathan-albe_pintern-pinterest-activity-7360671358873128963-obVd/'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Lockheed Martin',
      location: 'Owego, New York',
      period: 'Aug 2024 - Jan 2025',
      description: 'Enhanced system reliability by automating Jenkins builds, containerizing internal tools with Docker, and developing Java UI components that streamlined workflows and reduced deployment time by 30%.',
      technologies: ['Java', 'Docker', 'Jenkins', 'Linux/Unix', 'JTheme'],
      link: 'https://www.lockheedmartin.com/en-us/who-we-are/business-areas/rotary-and-mission-systems.html'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Applied Fundamentals Consulting',
      location: 'Reston, Virginia',
      period: 'Jun 2024 - Aug 2024',
      description: 'Developed a VueJS + Quasar feedback web app with a built-in bug tracking and reporting system, cutting issue resolution time by 40% and earning 90% positive client feedback. Designed a PostgreSQL backend and collaborated in Agile sprints to streamline QA and product iteration.',
      technologies: ['VueJS', 'Quasar', 'PostgreSQL', 'Agile/Scrum'],
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7228747069107163136/'
    },
    {
      title: 'iOS/Mobile Development Research Assistant',
      company: 'George Mason University',
      location: 'Fairfax, Virginia',
      period: 'Oct 2022 - May 2023',
      description: 'Built an iOS + watchOS app as part of a $712K federally funded project supporting neurodiverse young adults. Integrated HealthKit and Firebase to track heart rate and deliver real-time interventions, achieving 86% positive feedback in a pilot with 20+ participants across the D.C. area.',
      technologies: ['SwiftUI', 'HealthKit', 'Firebase', 'iOS/watchOS', 'Research'],
      link: 'https://www.gmu.edu/news/2021-11/new-smartwatch-app-help-can-be-close-your-wrist'
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
                  <div className="flex items-center gap-4 text-gray-300 mb-3 text-sm">
                    <span className="font-semibold text-orange-500 whitespace-nowrap">{exp.company}</span>
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar size={14} />
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
