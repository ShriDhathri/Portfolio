"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'resume', 'projects', 'achievements'];
            const scrollPosition = window.scrollY;

            if (scrollPosition < 50) {
                setActiveSection('hero');
                return;
            }

            const offsetPosition = scrollPosition + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (offsetPosition >= offsetTop && offsetPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#hero', label: 'Hero', id: 'hero' }, 
        { href: '#about', label: 'About', id: 'about' },
        { href: '#skills', label: 'Skills', id: 'skills' },
        { href: '#resume', label: 'Resume', id: 'resume' },
        { href: '#projects', label: 'Projects', id: 'projects' },
        { href: '#achievements', label: 'Achievements', id: 'achievements' },
        { href: '#contact', label: 'Contact', id: 'contact' }
    ];

    const NavLink = ({ href, label, id, isActive }: { href: string; label: string; id: string; isActive: boolean }) => (
        <Link
            href={href}
            className={`relative font-semibold text-lg transition-all duration-300 group ${isActive
                    ? 'text-green-600'
                    : 'text-foreground hover:text-green-600'
                }`}
            onClick={() => setActiveSection(id)}
        >
            {label}
            <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
            />
        </Link>
    );

    return (
        <header className="flex justify-between items-center p-6 bg-background shadow-lg">
            <div>
                <h1 className='text-foreground text-4xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    Shri Dhatri PM
                </h1>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    href={item.href}
                                    label={item.label}
                                    id={item.id}
                                    isActive={activeSection === item.id}
                                />
                            </li>
                        ))}
                        <li><ThemeToggle /></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;