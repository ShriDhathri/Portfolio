'use client'

import React from 'react'
import { Users, Trophy, Code, Calendar, MapPin, Brain, Database, BarChart3, FileSpreadsheet, Activity, Target, Bot } from 'lucide-react'

interface AchievementData {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    location: string;
    category: string;
    color: string;
    year: number;
    month: number;
}

interface Certification {
    title: string;
    provider: string;
    icon: React.ReactNode;
    color: string;
    certificateUrl: string;
    verifyUrl: string;
}

const Achievements = () => {
    return (
        <section id="achievements" className="bg-background text-foreground py-16 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Achievements & Certifications</h1>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Recognition and accomplishments in data science, research, and technology that showcase my dedication to excellence.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Major Achievements</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-500/30"></div>
                        {achievementsData.map((achievement, index) => (
                            <TimelineItem key={index} achievement={achievement} index={index} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificationsData.map((cert, index) => (
                            <CertificationBadge key={index} certification={cert} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const achievementsData: AchievementData[] = [
    {
        icon: <Activity size={28} />,
        title: "IEEE Publication",
        subtitle: "A Comprehensive Review on ML Technologies to Predict Breast Cancer",
        description: "Published a comprehensive review in IEEE on machine learning for breast cancer prediction, evaluating SVM, Random Forest, and Neural Networks for early detection.",
        date: "July 2025",
        location: "IEEE Publication",
        category: "Research",
        color: "blue",
        year: 2025,
        month: 7
    },
    {
        icon: <Trophy size={28} />,
        title: "TCS TechBytes Achievement",
        subtitle: "Top Regional Finalist - 5th Rank",
        description: "Selected as top regional finalist from Mangaluru division and secured 5th rank in the prestigious TCS TechBytes Quiz competition.",
        date: "2025",
        location: "Mangaluru Division",
        category: "Competition",
        color: "orange",
        year: 2025,
        month: 1
    },
    {
        icon: <Users size={28} />,
        title: "STEM Workshop Conductor",
        subtitle: "Scouts Guides Leadership Program",
        description: "Successfully conducted STEM Workshop for Scouts Guides, guiding participants in STEM concepts with emphasis on ATM technology.",
        date: "2024",
        location: "Educational Institution",
        category: "Leadership",
        color: "green",
        year: 2024,
        month: 12
    },
    {
        icon: <Brain size={28} />,
        title: "Infosys Bangalore DC Presentation",
        subtitle: "Breast Cancer Detection using Predictive Analysis",
        description: "Presented innovative project in Celebrating Tech - AI in Action event, showcasing machine learning approach to medical diagnosis.",
        date: "October 2024",
        location: "Infosys Bangalore",
        category: "Presentation",
        color: "purple",
        year: 2024,
        month: 10
    }
].sort((a, b) => b.year - a.year || b.month - a.month)

const certificationsData: Certification[] = [
    {
        title: "Python for Everybody",
        provider: "University of Michigan",
        icon: <Code size={24} />,
        color: "blue",
        certificateUrl: "/certificates/python-for-everybody.pdf",
        verifyUrl: "https://coursera.org/verify/certificate-id"
    },
    {
        title: "Data Analysis using Excel",
        provider: "Microsoft",
        icon: <FileSpreadsheet size={24} />,
        color: "green",
        certificateUrl: "/certificates/excel-data-analysis.pdf",
        verifyUrl: "https://docs.microsoft.com/learn/certifications"
    },
    {
        title: "Power BI Certification",
        provider: "Infosys Springboard",
        icon: <BarChart3 size={24} />,
        color: "orange",
        certificateUrl: "/certificates/power-bi-certification.pdf",
        verifyUrl: "https://infyspringboard.onwingspan.com/verify"
    },
    {
        title: "Python for Data Science",
        provider: "IBM",
        icon: <Database size={24} />,
        color: "blue",
        certificateUrl: "/certificates/python-data-science-ibm.pdf",
        verifyUrl: "https://coursera.org/verify/ibm-certificate"
    },
    {
        title: "AI & Machine Learning",
        provider: "Google",
        icon: <Bot size={24} />,
        color: "purple",
        certificateUrl: "/certificates/ai-ml-google.pdf",
        verifyUrl: "https://coursera.org/verify/google-certificate"
    },
    {
        title: "Problem Solving (100+)",
        provider: "LeetCode Platform",
        icon: <Target size={24} />,
        color: "yellow",
        certificateUrl: "/certificates/leetcode-achievements.pdf",
        verifyUrl: "https://leetcode.com/u/ShriDhathri"
    }
]

const TimelineItem = ({ achievement, index }: { achievement: AchievementData; index: number }) => {
    const isEven = index % 2 === 0
    const colorClasses = {
        blue: 'bg-blue-500 border-blue-300',
        purple: 'bg-purple-500 border-purple-300',
        green: 'bg-green-500 border-green-300',
        orange: 'bg-orange-500 border-orange-300'
    }

    return (
        <div className={`relative flex items-center mb-12 ${isEven ? 'justify-start' : 'justify-end'}`}>
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${colorClasses[achievement.color as keyof typeof colorClasses]} rounded-full border-4 border-background z-10`}></div>
            <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-background border-2 border-foreground/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/30">
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-${achievement.color}-500/20 rounded-xl flex items-center justify-center`}>
                            <div className={`text-${achievement.color}-500`}>
                                {achievement.icon}
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className={`inline-block px-3 py-1 text-xs font-semibold bg-${achievement.color}-500/20 text-${achievement.color}-600 rounded-full mb-2`}>
                                {achievement.category}
                            </span>
                            <h3 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h3>
                            <h4 className="text-sm font-medium text-green-500">{achievement.subtitle}</h4>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{achievement.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{achievement.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CertificationBadge = ({ certification }: { certification: Certification }) => {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600 shadow-blue-500/25',
        green: 'from-green-500 to-green-600 shadow-green-500/25',
        orange: 'from-orange-500 to-orange-600 shadow-orange-500/25',
        purple: 'from-purple-500 to-purple-600 shadow-purple-500/25',
        yellow: 'from-yellow-500 to-yellow-600 shadow-yellow-500/25'
    }

    const handleCertificateClick = () => {
        if (certification.certificateUrl) {
            const link = document.createElement('a');
            link.href = certification.certificateUrl;
            link.target = '_blank';
            link.click();
        } else if (certification.verifyUrl) {
            window.open(certification.verifyUrl, '_blank');
        } else {
            alert('Certificate is being prepared for digital display. Please contact for verification.');
        }
    }

    return (
        <div className="group">
            <div
                className="bg-background border border-foreground/10 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                onClick={handleCertificateClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCertificateClick();
                    }
                }}
            >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[certification.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{certification.icon}</div>
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-foreground mb-2 text-sm leading-tight group-hover:text-green-500 transition-colors">
                        {certification.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-3">{certification.provider}</p>
                    <div className="text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        Click to view certificate
                    </div>
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
    )
}

export default Achievements
