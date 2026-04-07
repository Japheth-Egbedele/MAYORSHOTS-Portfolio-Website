import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LightLogo from '../assets/logos/Llogo.png';
import DarkLogo from '../assets/logos/Dlogo.png';
import OLogo from '/O.png';

const navLinks = [
  { label: 'WORK', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Email', href: 'mailto:okeoluwamayokun2@gmail.com', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: 'Facebook', href: 'https://www.facebook.com/share/1EBZ54fLM4/', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/mayorshots?igsh=YnI0MXZxMDg1ZWNo', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    label: 'TikTok', href: 'https://www.tiktok.com/@mayorshots?_r=1&_t=ZS-95JYyTV9joz', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    )
  },
];

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between pl-1 pr-4 sm:pl-4 sm:pr-6 py-4 lg:pl-6 lg:pr-8">
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

        {/* Right side: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-[1.5px] w-5 bg-black dark:bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-black dark:bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-black dark:bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-[4px] -rotate-45' : ''
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
        {/* Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 z-50 p-3 text-black dark:text-white hover:text-red-600 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full px-6 sm:px-8 pt-20 pb-24 overflow-y-auto">
          {/* O Logo at top */}
          <div className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <img src={OLogo} alt="Mayor Shots" className="h-16 w-auto" />
          </div>

          <nav className="flex flex-col gap-6">
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

          <div className="mt-auto flex flex-col gap-6">
            <Link
              to="/contact"
              onClick={(e) => handleNavLinkClick(e, '/contact')}
              className="flex items-center justify-center w-full rounded-full border border-black dark:border-white py-4 text-[10px] font-black tracking-[0.3em] text-black dark:text-white uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95"
            >
              LET&apos;S TALK
            </Link>

            {/* Social Links - Now below Let's Talk */}
            <div className={`flex justify-center gap-6 transition-all duration-700 delay-400 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;