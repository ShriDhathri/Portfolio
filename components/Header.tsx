'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#resume', label: 'Resume', id: 'resume' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#achievements', label: 'Achievements', id: 'achievements' },
    { href: '#contact', label: 'Contact', id: 'contact' },
]

const Header = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY + 120
            for (const item of navItems) {
                const el = document.getElementById(item.id)
                if (el) {
                    const top = el.offsetTop
                    const height = el.offsetHeight
                    if (offset >= top && offset < top + height) {
                        setActiveSection(item.id)
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const NavLink = ({
        href,
        label,
        id,
        isActive,
        isMobile = false,
    }: {
        href: string
        label: string
        id: string
        isActive: boolean
        isMobile?: boolean
    }) => (
        <Link
            href={href}
            className={`relative font-semibold ${isMobile ? 'text-base py-2 block' : 'text-lg'} transition-all duration-300 group ${isActive ? 'text-green-600' : 'text-foreground hover:text-green-600'
                }`}
            onClick={() => {
                setActiveSection(id)
                if (isMobile) setIsMobileMenuOpen(false)
            }}
        >
            {label}
            <span
                className={`absolute ${isMobile ? '-bottom-0' : '-bottom-1'} left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
            />
        </Link>
    )

    return (
        <header className="bg-background shadow-lg sticky top-0 z-50">
            <div className="flex justify-between items-center p-4 md:p-6">
                {/* Logo */}
                <div>
                    <h1 className="text-foreground text-2xl md:text-4xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <span className="hidden sm:inline">Shri Dhatri PM</span>
                        <span className="sm:hidden">Shri Dhatri</span>
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:block">
                    <nav>
                        <ul className="flex items-center space-x-6">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <NavLink
                                        href={item.href}
                                        label={item.label}
                                        id={item.id}
                                        isActive={activeSection === item.id}
                                    />
                                </li>
                            ))}
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile controls */}
                <div className="lg:hidden flex items-center space-x-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-border bg-background">
                    <nav className="p-4">
                        <ul className="space-y-1">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <NavLink
                                        href={item.href}
                                        label={item.label}
                                        id={item.id}
                                        isActive={activeSection === item.id}
                                        isMobile={true}
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
