'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Layout from '@/components/Layout'
import { portfolio } from '@/data/portfolio'

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Work </span>
            <span className="neon-text">Experience</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey across diverse industries, from startups to government agencies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-blue" />

          {/* Experience Items */}
          {portfolio.experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-neon-cyan rounded-full border-4 border-black shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
              
              {/* Content */}
              <Card className="glass-panel border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <CardTitle className="text-xl font-semibold text-white mb-2 sm:mb-0">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-sm text-neon-cyan">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-lg font-medium text-neon-magenta">
                    <MapPin size={16} />
                    <span>{exp.org}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: bulletIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <ChevronRight size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Education & </span>
              <span className="neon-text">Certifications</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-panel border-white/10 hover:border-neon-cyan/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white mb-2">
                      {edu.school}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-sm text-neon-cyan mb-3">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 font-medium mb-3">{edu.degree}</p>
                    {edu.details && (
                      <ul className="space-y-1">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                            <ChevronRight size={12} className="text-neon-magenta" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </Layout>
  )
}
