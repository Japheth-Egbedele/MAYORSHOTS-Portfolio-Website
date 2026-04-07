import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LightLogo from '../assets/logos/Llogo.png';
import DarkLogo from '../assets/logos/Dlogo.png';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const { isDark } = useTheme();

  const isActive = (path) => location.pathname === path
    ? "text-red-600"
    : "text-black dark:text-white";

  return (
    <nav className="fixed w-full top-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 flex justify-between items-center py-6 px-12 border-b border-gray-100 dark:border-gray-800">
      <Link to="/" className="flex items-center gap-3">
        <img src={isDark ? LightLogo : DarkLogo} className="h-10" alt="MAYOR SHOTS" />
        <span className="text-xl font-bold tracking-widest uppercase text-black dark:text-white">MAYOR SHOTS</span>
      </Link>
      <div className="flex items-center gap-8">
        <div className="space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <Link to="/" className={isActive('/')}>Work</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Navbar;