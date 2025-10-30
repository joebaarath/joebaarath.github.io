'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { portfolio } from '@/data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">Get In </span>
              <span className="neon-text">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"
            />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-panel border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white mb-4">
                    Let's Connect
                  </CardTitle>
                  <p className="text-gray-400">
                    I'm always excited to discuss new opportunities and innovative projects.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-glass-dark border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                      <Mail className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a 
                        href={`mailto:${portfolio.contact.email}`}
                        className="text-white hover:text-neon-cyan transition-colors duration-300"
                      >
                        {portfolio.contact.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-glass-dark border border-white/5 hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/30">
                      <MapPin className="w-5 h-5 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Singapore</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-panel border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <motion.a
                      href={portfolio.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-lg bg-glass-dark border border-white/10 hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={portfolio.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-lg bg-glass-dark border border-white/10 hover:border-neon-cyan/50 text-gray-400 hover:text-neon-cyan transition-all duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
