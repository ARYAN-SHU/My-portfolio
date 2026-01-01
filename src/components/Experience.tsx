'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Led development of scalable web applications using React, Node.js, and AWS.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built MVPs for various startups, focusing on rapid prototyping and user experience.',
  },
  {
    title: 'Junior Developer',
    company: 'WebAgency',
    period: '2019 - 2020',
    description: 'Developed responsive websites and maintained existing client projects.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}