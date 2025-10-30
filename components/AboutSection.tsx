'use client'

import { motion } from 'framer-motion'
import { portfolio } from '@/data/portfolio'

const skillCategories = [
  {
    title: 'Programming',
    skills: portfolio.skills.programming,
    color: 'text-neon-cyan'
  },
  {
    title: 'Machine Learning',
    skills: portfolio.skills.machineLearning,
    color: 'text-neon-magenta'
  },
  {
    title: 'Databases',
    skills: portfolio.skills.databases,
    color: 'text-neon-blue'
  },
  {
    title: 'Product Leadership',
    skills: portfolio.skills.productLeadership,
    color: 'text-neon-purple'
  },
  {
    title: 'Collaboration',
    skills: portfolio.skills.collaboration,
    color: 'text-neon-cyan'
  }
]

export default function AboutSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="neon-text">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-lg p-6 hover:border-neon-cyan/50 transition-all duration-300 group"
              >
                <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-glass-dark rounded-full text-sm text-gray-300 border border-white/10 group-hover:border-neon-cyan/30 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>
  )
}
