import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LightLogo from '../assets/logos/Llogo.png';
import DarkLogo from '../assets/logos/Dlogo.png';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'WORK', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const { isDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path) =>
    location.pathname === path ? 'text-red-600' : 'text-black dark:text-white';

  const handleNavLinkClick = (e, href) => {
    setMobileOpen(false);
    if (href === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-[100] w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavLinkClick(e, '/')}
          className={`flex items-center z-[150] transition-opacity duration-300 ${mobileOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <img
            src={isDark ? LightLogo : DarkLogo}
            className="w-48 sm:w-56 md:w-64 h-auto object-contain"
            alt="MAYOR SHOTS"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`text-[10px] font-bold tracking-[0.2em] transition-all hover:text-red-600 ${isActive(link.href)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2 z-[150]">
          <ThemeToggle />

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black"
          >
            <span
              className={`block h-[1.5px] w-5 bg-black dark:bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-[3.75px] rotate-45' : ''
                }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-black dark:bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-[3.75px] -rotate-45' : ''
                }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 w-full h-screen bg-white dark:bg-black z-[140] md:hidden transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col h-full px-6 sm:px-8 pt-28 pb-12 overflow-y-auto">
          <div
            className={`flex items-center gap-3 mb-12 transition-all duration-700 delay-100 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
          >
            <div className="w-8 h-[1px] bg-red-600" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-black dark:text-white uppercase">
              MAYOR SHOTS
            </span>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <div
                key={link.href}
                className={`transition-all duration-700 ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <Link
                  to={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="group flex items-center gap-4 text-4xl sm:text-5xl font-bold tracking-tighter text-black dark:text-white uppercase transition-all duration-300 hover:translate-x-2 hover:text-red-600"
                >
                  <span className="text-2xl sm:text-3xl text-red-600 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &gt;
                  </span>
                  <span>{link.label}</span>
                </Link>
              </div>
            ))}
          </nav>

          <div
            className={`mt-auto pt-10 transition-all duration-1000 delay-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Link
              to="/contact"
              onClick={(e) => handleNavLinkClick(e, '/contact')}
              className="flex items-center justify-center w-full rounded-full border border-black dark:border-white py-5 text-[10px] font-black tracking-[0.3em] text-black dark:text-white uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95"
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;