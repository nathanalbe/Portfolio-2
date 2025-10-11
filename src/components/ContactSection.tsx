'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export default function ContactSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/nathan-albe',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/nathan-albe',
      label: 'GitHub'
    }
  ]

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-white"
        >
          Contact
        </motion.h2>
      </div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center space-y-6"
      >
        {/* Email */}
        <motion.a
          href="mailto:nalbe@gmu.edu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="block text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300"
        >
          nalbe@gmu.edu
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 bg-gray-700/50 text-white rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label={link.label}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
