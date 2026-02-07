'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'GridWatch',
      description: 'My team built GridWatch in 7 hours and won 2nd place overall. A civic monitoring platform powered by AI agents that delivers real-time city updates from power outages and road closures to public safety alerts in one dashboard for residents and officials.',
      image: '/assets/Gridwatch%20Project.jpg',
      technologies: ['Python', 'FastAPI', 'Firestore', 'AI Agents', 'JavaScript'],
      links: {
        github: 'https://github.com/nathanalbe/GridWatch',
        demo: 'https://gridwatch.dev/'
      },
      category: 'Civic Tech',
      icon: Globe
    },
    {
      title: 'DataViz Dashboard',
      description: 'Interactive data visualization dashboard built with React and D3.js. Displays real-time analytics with customizable charts and export functionality.',
      image: '/assets/project-2.png',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/nathan-albe/dataviz',
        demo: 'https://dataviz-dashboard.vercel.app'
      },
      category: 'Web Development',
      icon: Globe
    },
    {
      title: 'ML Stock Predictor',
      description: 'Machine learning model for stock price prediction using Python and scikit-learn. Features data preprocessing, model training, and API integration.',
      image: '/assets/project-4.gif',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
      links: {
        github: 'https://github.com/nathan-albe/ml-stock-predictor',
        demo: 'https://stock-predictor-api.herokuapp.com'
      },
      category: 'Data Science',
      icon: Database
    }
  ]

  return (
    <motion.div
      id="projects"
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
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          A showcase of my recent work across mobile development, web applications, and data science
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-700/30 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
                <div className={`absolute inset-0 flex items-center justify-center ${project.image ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-br from-orange-500/20 to-blue-900/20'}`}>
                  {!project.image && <Icon className="text-orange-500" size={48} />}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - min 44px touch targets for mobile */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] py-3 px-4 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] py-3 px-4 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
