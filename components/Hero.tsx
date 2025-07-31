'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';

const Hero = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const backgroundImage = currentTheme === 'dark' ? '/herob.jpg' : '/herow.jpg';

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start text-foreground"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background/80 text-foreground text-balance p-2 rounded-md">
          I'm Shri Dhatri P M
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
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-orange-500 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default Hero;
