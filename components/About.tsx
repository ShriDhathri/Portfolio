'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function About() {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme
    const profileImage = currentTheme === 'dark' ? '/profileb.jpg' : '/profilew.jpg'

    return (
        <>
            <div id="about" className="min-h-screen bg-background text-foreground">
                {/* Main Content */}
                <main className="flex-grow flex items-center justify-center px-6 py-16 ">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center ">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="relative w-full max-w-md mx-auto">
                                    <Image
                                        src={profileImage}
                                        alt="Profile"
                                        width={400}
                                        height={400}
                                        className="rounded-lg grayscale object-cover "
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-8 pt-12">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                        Data analyst & Data Enthusiasts
                                    </h1>
                                    <p className="text-foreground text-lg italic mb-8">
                                        Hello, I&#39;m Shri Dhatri P M, a student of Computer Science in Data Science Engineering from Alva&#39;s Institute of Engineering &amp; Technology (VTU), Karnataka. I&#39;m passionate about Data Science.
                                    </p>

                                </div>

                                {/* Info Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <InfoItem label="Name:" value="Shri Dhatri P M" />
                                        <InfoItem label="Age:" value="22" />
                                        <InfoItem label="Phone:" value="+91 6362925156" />
                                        <InfoItem label="City:" value="Shivamogga" />
                                    </div>
                                    <div className="space-y-4">
                                        <InfoItem label="Degree:" value="Bachelor of CsDs" />
                                        <InfoItem label="Email:" value="dhathridhatu@gmail.com" />
                                        <InfoItem label="Website:" value="Available" />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="pt-4">
                                    <p className="text-foreground leading-relaxed">
                                        Computer Science and Data Science student skilled in machine learning and Python. Completed projects in sales
                                        prediction and health data analysis, including ongoing oral cancer detection. Research Scholar intern at BITS
                                        Pilani. Certified in Data Analysis, with hackathon and workshop experience. Strong collaborator, passionate about
                                        data-driven solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center space-x-3">
            <span className="bg-background text-foreground text-sm">➤</span>
            <span className="bg-background text-foreground font-medium">{label}</span>
            <span className="bg-background text-foreground">{value}</span>
        </div>
    )
}
