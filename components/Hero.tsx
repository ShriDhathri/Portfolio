'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const backgroundImage = currentTheme === 'dark' ? '/herob.jpg' : '/herow.jpg';

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-start text-foreground"
    >
      {/* Background Image */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start px-6 md:px-12 max-w-4xl h-full justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background/80 text-foreground text-balance p-2 rounded-md">
            I&apos;m Shri Dhathri P M
          </h1>
          <p className="text-lg md:text-xl bg-background/80 text-foreground mb-6 p-2 rounded-md">
            Data Analyst, Data Enthusiast
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <SocialLink
              href="https://github.com/ShriDhathri"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.instagram.com/dhathri_dhatu/"
              icon={<Instagram size={20} />}
              label="Instagram"
            />
            <SocialLink
              href="https://www.linkedin.com/in/shri-dhathri/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  // Define specific hover colors for each platform
  const getHoverClass = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return 'hover:bg-blue-600 hover:text-white';
      case 'github':
        return 'hover:bg-gray-800 hover:text-white';
      case 'instagram':
        return 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-400 hover:text-white';
      default:
        return 'hover:bg-blue-500 hover:text-white';
    }
  };

  return (
    <a
      href={href}
      aria-label={label}
      className={`w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground transition-all duration-300 ${getHoverClass(label)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default Home;