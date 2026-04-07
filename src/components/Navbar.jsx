import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LightLogo from '../assets/logos/Llogo.png';
import DarkLogo from '../assets/logos/Dlogo.png';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const { isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path
    ? "text-red-600"
    : "text-black dark:text-white";

  return (
    <nav className="fixed w-full top-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-12">
        <Link to="/" className="flex items-center">
          <img src={isDark ? LightLogo : DarkLogo} className="h-8 sm:h-10" alt="MAYOR SHOTS" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="space-x-6 lg:space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            <Link to="/" className={isActive('/')}>Work</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col py-4 px-4 space-y-4 text-sm uppercase tracking-wider">
            <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;