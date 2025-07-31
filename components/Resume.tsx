'use client'

import React from 'react'

const Resume = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume/Dhatri_P_M.pdf';
        link.download = 'Dhatri_P_M.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="bg-background text-foreground py-16 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-4xl font-bold text-foreground">Resume</h1>
                        <button
                            onClick={handleDownloadResume}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Download resume
                        </button>
                    </div>
                    <p className="text-muted-foreground text-lg">My educational background and professional experience.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Side: Experience & Projects */}
                    <div>
                        {/* Experience & Projects */}
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

                    {/* Right Side: Education */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Education</h2>
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
                </div>
            </div>
        </section>
    )
}

export default Resume