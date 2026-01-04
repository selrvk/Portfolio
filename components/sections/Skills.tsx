"use client"

import { motion } from "framer-motion"
import { IconCloudDemo } from "../IconCloudDemo"

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center px-4 py-16 sm:py-24 mt-70" 
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        {/* Heading */}
        <h1
          className="
            text-4xl xl:text-6xl 2xl:text-8xl
            font-bold text-center mb-8
            bg-linear-to-b from-white to-transparent
            bg-clip-text text-transparent
          "
        >
          Skills
        </h1>

        {/* Icon cloud */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto mb-10">
          <IconCloudDemo />
        </div>

        {/* Skills list */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-6
            text-sm sm:text-base
            leading-relaxed
            max-w-4xl
            mx-auto
          "
        >
          <ul className="space-y-3">
            <SkillItem text="Proficient with certifications in JavaScript, TypeScript, C++, Java" />
            <SkillItem text="React, Next.js, and Express" />
            <SkillItem text="Desktop development using Java Swing" />
            <SkillItem text="Relational & non-relational databases (MySQL, PostgreSQL, SQLite, MongoDB)" />
          </ul>

          <ul className="space-y-3">
            <SkillItem text="Python, Django, Ruby on Rails" />
            <SkillItem text="MVVM, MVC, and MVP architectures" />
            <SkillItem text="AWS (EC2, S3, RDS, Lambda)" />
            <SkillItem text="Git, GitHub & Agile practices" />
            <SkillItem text="DevOps & CI/CD fundamentals" />
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

function SkillItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-blue-400 mt-1 text-lg leading-none">•</span>
      <span>{text}</span>
    </li>
  )
}
