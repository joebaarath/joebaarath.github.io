'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight, Github } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { portfolio } from '@/data/portfolio'

// Combine experience and projects into a single timeline
const timelineItems = [
  // Experience items
  ...portfolio.experience.map(exp => ({
    type: 'experience' as const,
    title: exp.role,
    organization: exp.org,
    period: exp.period,
    description: exp.bullets,
    category: 'Work Experience'
  })),
  // Projects items
  ...portfolio.projects.map(proj => ({
    type: 'project' as const,
    title: proj.title,
    organization: proj.context,
    period: proj.period,
    description: [proj.summary],
    category: 'Project',
    github: proj.github
  }))
].sort((a, b) => {
  // Sort by period in reverse chronological order
  const getYear = (period: string) => {
    const yearMatch = period.match(/(\d{4})/)
    return yearMatch ? parseInt(yearMatch[1]) : 0
  }
  return getYear(b.period) - getYear(a.period)
})

export default function TimelineSection() {
  return (
    <section id="experience" className="py-20 relative">
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
              <span className="text-white">Experience & </span>
              <span className="neon-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto"
            />
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-blue" />

            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-black shadow-[0_0_20px_rgba(0,255,255,0.5)] ${
                  item.type === 'experience' ? 'bg-neon-cyan' : 'bg-neon-magenta'
                }`} />
                
                {/* Content */}
                <Card className="glass-panel border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="text-xl font-semibold text-white">
                          {item.title}
                        </CardTitle>
                        <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                          item.type === 'experience' 
                            ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' 
                            : 'bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/30'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neon-cyan whitespace-nowrap">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-lg font-medium text-neon-magenta">
                      <MapPin size={16} />
                      <span>{item.organization}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {item.description.map((desc, descIndex) => (
                        <motion.li
                          key={descIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: descIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <ChevronRight size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Project-specific actions */}
                    {item.type === 'project' && 'github' in item && item.github && (
                      <div className="mt-4">
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 hover:border-neon-cyan hover:text-neon-cyan w-full sm:w-auto"
                          >
                            <Github size={16} className="mr-2" />
                            View Code
                          </Button>
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
