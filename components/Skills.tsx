'use client'

import React, { useState, useEffect } from 'react'
import { Code, Database, Brain, TrendingUp } from 'lucide-react'

const skillsData = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'C', level: 85 },
    { name: 'HTML/CSS', level: 90 },
  ],
  developerTools: [
    { name: 'VS Code', level: 100 },
    { name: 'Figma', level: 80 },
    { name: 'Windows', level: 95 },
    { name: 'Github', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Linux', level: 75 },
  ],
  technicalSkills: [
    { name: 'Power BI', level: 90 },
    { name: 'Tableau', level: 85 },
    { name: 'Excel', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'FastAPI', level: 75 },
    { name: 'ML', level: 90 },
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'Deep Learning', level: 85 },
    { name: 'MCP', level: 70 },
  ]
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: skillsData.languages,
      color: 'blue'
    },
    {
      title: 'Developer Tools & OS',
      icon: <Database size={24} />,
      skills: skillsData.developerTools,
      color: 'green'
    },
    {
      title: 'Technical Skills',
      icon: <Brain size={24} />,
      skills: skillsData.technicalSkills,
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-500 bg-blue-500',
      green: 'text-green-500 bg-green-500',
      purple: 'text-purple-500 bg-purple-500'
    }
    return colorMap[color as keyof typeof colorMap] || 'text-blue-500 bg-blue-500'
  }

  return (
    <section id="skills" className="bg-background text-foreground py-16 px-6 transition-colors duration-150">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Technical Skills
            </h1>
            <div className="w-full h-1 bg-green-500" />
          </div>
          <p className={`text-muted-foreground text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-full transition-all duration-300 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            A comprehensive overview of my technical expertise and professional competencies in data science and software development.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`border border-border rounded-xl p-8 
                hover:bg-green-500/10 hover:border-green-500 
                hover:shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]
                transition-all duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${categoryIndex * 50 + 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 ${category.color === 'blue' ? 'bg-blue-500/20' : category.color === 'green' ? 'bg-green-500/20' : 'bg-purple-500/20'} rounded-lg flex items-center justify-center border ${category.color === 'blue' ? 'border-blue-500/30' : category.color === 'green' ? 'border-green-500/30' : 'border-purple-500/30'} backdrop-blur-sm`}>
                  <div className={`${category.color === 'blue' ? 'text-blue-400' : category.color === 'green' ? 'text-green-400' : 'text-purple-400'}`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${getColorClasses(category.color).split(' ')[1]}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 50 + skillIndex * 25) + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className={`mt-16 transform transition-all duration-300 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="border border-border rounded-xl p-8 hover:border-green-500/30 transition-all duration-150">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Brain className="text-green-500 mr-2" size={20} />
                  <div className="text-3xl font-bold text-green-500">11+</div>
                </div>
                <div className="text-sm text-muted-foreground">Technical Skills</div>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Database className="text-blue-500 mr-2" size={20} />
                  <div className="text-3xl font-bold text-blue-500">6+</div>
                </div>
                <div className="text-sm text-muted-foreground">Tools & Platforms</div>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Code className="text-purple-500 mr-2" size={20} />
                  <div className="text-3xl font-bold text-purple-500">3+</div>
                </div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="text-orange-500 mr-2" size={20} />
                  <div className="text-3xl font-bold text-orange-500">4+</div>
                </div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills