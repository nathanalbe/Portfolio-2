'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function ProfileCard() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nathan-albe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nathan-albe', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nathan.albe@outlook.com', label: 'Email' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="profile-card group"
    >
      {/* Profile Image */}
      <div className="relative w-full h-72 mb-8 rounded-3xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <Image
          src="/assets/profile-pic.png"
          alt="Nathan Albe"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl font-bold text-gray-900 text-center mb-4 group-hover:text-orange-600 transition-colors duration-300"
      >
        Nathan Albe
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-600 text-center text-sm leading-relaxed mb-8 px-2"
      >
        Aspiring Software Engineer specializing in mobile development, full-stack, and data analysis. 
        Passionate about creating innovative solutions and continuous learning.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label={link.label}
            >
              <Icon size={22} className="flex-shrink-0" />
            </motion.a>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
