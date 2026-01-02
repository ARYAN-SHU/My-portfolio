'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import img from '../asset/resume_pic.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src={img}
              alt="Aryan Yadav"
              width={256}
              height={256}
              className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2 md:pl-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate full-stack developer with over 5 years of experience creating
              beautiful, functional, and user-centered digital experiences. I love turning
              complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing
              to open-source projects, or enjoying a good cup of coffee while brainstorming
              my next big idea.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}