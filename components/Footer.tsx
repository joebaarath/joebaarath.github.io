'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold neon-text"
            >
              Joe Baarath
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm"
            >
              AI Engineer crafting intelligent solutions for tomorrow's challenges.
            </motion.p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-white"
            >
              Get In Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <a
                href="mailto:joebaarath@hotmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-cyan transition-colors duration-300"
              >
                <Mail size={16} />
                <span>joebaarath@hotmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-semibold text-white"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4"
            >
              <motion.a
                href="https://github.com/joebaarath"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-glass-medium border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joebaarath/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg bg-glass-medium border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </div>
        </div>

      </div>
    </footer>
  )
}
