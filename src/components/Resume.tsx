'use client'

import React from 'react'

const Resume = () => {
    return (
        <section id="resume" className="bg-background text-foreground py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Side: Summary and Education */}
                    <div>
                        {/* Summary */}
                        <h2 className="text-2xl font-bold mb-6">Summary</h2>
                        <div className="border-l-2 border-green-500 pl-6 relative">
                            <h3 className="text-lg font-semibold">Shri Dhatri P M</h3>
                            <p className="italic text-foreground mb-3">
                                Computer Science and Data Science student skilled in machine learning and Python. Passionate about data-driven solutions with experience in sales prediction and health data analysis.
                            </p>
                            <ul className="list-disc pl-5 text-foreground space-y-1">
                                <li>Shivamogga, Karnataka</li>
                                <li>+91 6362925156</li>
                                <li>dhathridhatu@gmail.com</li>
                            </ul>
                        </div>

                        {/* Education */}
                        <h2 className="text-2xl font-bold mt-10 mb-6">Education</h2>

                        <div className="border-l-2 border-green-500 pl-6 relative space-y-10">
                            {/* Item 1 */}
                            <div className="relative">
                                <h3 className="text-base font-semibold uppercase">
                                    Bachelor of Computer Science in Data Science
                                </h3>
                                <p className="text-sm text-foreground mt-1">2021 - 2025</p>
                                <p className="italic text-foreground mt-1">
                                    Alva's Institute of Engineering & Technology (VTU), Karnataka
                                </p>
                                <p className="text-foreground mt-2 text-sm">
                                    Specialized in Data Science Engineering with focus on machine learning, Python programming, and data analysis. Actively involved in research projects and practical applications of data science.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="relative">
                                <h3 className="text-base font-semibold uppercase">
                                    Higher Secondary Education
                                </h3>
                                <p className="text-sm text-foreground mt-1">2019 - 2021</p>
                                <p className="italic text-foreground mt-1">
                                    Pre-University College, Karnataka
                                </p>
                                <p className="text-foreground mt-2 text-sm">
                                    Completed higher secondary education with focus on Science stream, building foundation for computer science and mathematics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Experience & Projects */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Experience & Projects</h2>
                        <div className="border-l-2 border-green-500 pl-6 relative space-y-10">
                            {/* Experience 1 */}
                            <div className="relative">
                                <h3 className="text-base font-semibold uppercase">
                                    Research Scholar Intern
                                </h3>
                                <p className="text-sm text-foreground mt-1">2024 - Present</p>
                                <p className="italic text-foreground mt-1">
                                    BITS Pilani
                                </p>
                                <ul className="list-disc pl-5 text-foreground mt-2 space-y-1 text-sm">
                                    <li>Conducting research in data science applications</li>
                                    <li>Working on advanced machine learning projects</li>
                                    <li>Collaborating with research team on innovative solutions</li>
                                    <li>Contributing to academic research publications</li>
                                </ul>
                            </div>
                            {/* Projects */}
                            <div className="relative">

                                <h3 className="text-base font-semibold uppercase">
                                    Key Projects
                                </h3>
                                <p className="text-sm text-foreground mt-1">2023 - Present</p>
                                <p className="italic text-foreground mt-1">
                                    Academic & Research Projects
                                </p>
                                <ul className="list-disc pl-5 text-foreground mt-2 space-y-1 text-sm">
                                    <li>Sales Prediction System using Machine Learning</li>
                                    <li>Health Data Analysis and Visualization</li>
                                    <li>Oral Cancer Detection System (Ongoing)</li>
                                    <li>Multiple hackathon participations and wins</li>
                                </ul>
                            </div>

                            {/* Certifications */}
                            <div className="relative">
                                <h3 className="text-base font-semibold uppercase">
                                    Certifications & Achievements
                                </h3>
                                <p className="text-sm text-foreground mt-1">2023 - 2024</p>
                                <p className="italic text-foreground mt-1">
                                    Professional Development
                                </p>
                                <ul className="list-disc pl-5 text-foreground mt-2 space-y-1 text-sm">
                                    <li>Certified in Data Analysis</li>
                                    <li>Workshop participation and completion</li>
                                    <li>Hackathon achievements</li>
                                    <li>Strong collaborative and team-working skills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume