'use client'

import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    category: string
    status?: string
}

const projectsData: Project[] = [
    {
        title: 'Sales Prediction System',
        description: 'Machine learning-based system for predicting sales using advanced algorithms and data analysis techniques.',
        technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
        githubUrl: 'https://github.com/yourusername/sales-prediction',
        liveUrl: 'https://your-demo-link.com',
        category: 'Machine Learning'
    },
    {
        title: 'Oral Cancer Detection',
        description: 'Applied Deep Learning methods to identify cancerous and non-cancerous regions. Utilized real-world image data to build a classification model using MobileNet and U-Net. Achieved 85% accuracy, with ongoing efforts to explore new models for improved performance.',
        technologies: ['Python', 'Machine Learning', 'Deep Learning', 'MobileNet', 'U-Net'],
        githubUrl: 'https://github.com/yourusername/oral-cancer-detection',
        liveUrl: 'https://your-demo-link.com',
        category: 'Deep Learning'
    },
    {
        title: 'Blinkit Data Analysis',
        description: 'Provided insights into delivery times, customer behavior, and operational efficiency, enabling data-driven decision-making to optimize performance. Developed a dashboard to analyze sales, production, and resource management for efficient business operations.',
        technologies: ['Power BI', 'EDA', 'Data Analysis'],
        githubUrl: 'https://github.com/yourusername/blinkit-analysis',
        liveUrl: 'https://your-dashboard-link.com',
        category: 'Data Analysis'
    },
    {
        title: 'Mira-ChatBot',
        description: 'Built a trained chatbot using DialogFlow and integrated it into a food-based website. Enhanced a menu-display website by integrating a responsive chatbot, trained with DialogFlow and implemented using FastAPI as the backend.',
        technologies: ['ML', 'FastAPI', 'DialogFlow', 'Python'],
        githubUrl: 'https://github.com/yourusername/mira-chatbot',
        liveUrl: 'https://your-chatbot-demo.com',
        category: 'Web Development'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="bg-background text-foreground py-16 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
                    <p className="text-muted-foreground text-lg">
                        Showcase of my technical projects and applications built with various technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-background border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300 relative group">
            {/* Status Badge */}
            {project.status && (
                <div className="absolute top-4 right-4">
                    <span className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full">
                        {project.status}
                    </span>
                </div>
            )}

            {/* Category */}
            <div className="mb-3">
                <span className="text-sm text-muted-foreground bg-green-500/10 px-2 py-1 rounded">
                    {project.category}
                </span>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-green-500 transition-colors">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-foreground/10 text-foreground px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={16} />
                    View Code
                </a>
                <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded hover:bg-foreground/20 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink size={16} />
                    Live Demo
                </a>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
        </div>
    )
}

export default Projects