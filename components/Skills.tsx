
'use client'

import React from 'react'

const skillsData = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'PHP', level: 80 },
  { name: 'WordPress/CMS', level: 90 },
  { name: 'Photoshop', level: 55 },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-background text-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg uppercase text-foreground tracking-widest mb-1">Skills</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-foreground pl-4">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-background h-2 rounded">
                <div
                  className="bg-foreground h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
