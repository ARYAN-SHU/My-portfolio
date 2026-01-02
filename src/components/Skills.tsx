'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Redux-Toolkit', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Django', level: 70 },
  { name: 'FastAPI', level: 80 },
  { name: 'AWS Services', level: 80 },
  { name: 'PostgreSQL', level: 65 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="bg-indigo-600 h-2.5 rounded-full"
                ></motion.div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}