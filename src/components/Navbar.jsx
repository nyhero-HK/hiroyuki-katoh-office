import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Monogram from './Monogram';

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    ja: {
      home: 'ホーム',
      about: '事務所について',
      services: 'サービス',
      education: '患者教育',
      contact: 'お問い合わせ',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      education: 'Patient Education',
      contact: 'Contact',
    },
  };

  const t = navItems[language];

  const links = [
    { to: '/', label: t.home, end: true },
    { to: '/about', label: t.about },
    { to: '/services', label: t.services },
    { to: '/patient-education', label: t.education },
    { to: '/support', label: t.contact },
  ];

  const desktopLinkClass = ({ isActive }) =>
    `relative font-body text-[15px] font-medium tracking-wide transition-colors pb-1 border-b-2 ${
      isActive
        ? 'text-accent border-accent'
        : 'text-content-2 border-transparent hover:text-content hover:border-line'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `font-body font-medium py-2 border-l-2 pl-4 transition-colors ${
      isActive ? 'text-accent border-accent' : 'text-content-2 border-transparent hover:text-content'
    }`;

  // Reading position, drawn on the one element that is always on screen.
  // Spring-smoothed so a trackpad flick reads as travel rather than a jump.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <nav className="fixed w-full z-50 bg-ground">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left motion-reduce:hidden"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Wordmark — set like a journal masthead */}
          <Link to="/" className="flex items-center gap-3.5 group" onClick={() => setIsOpen(false)}>
            <Monogram className="text-[2rem] shrink-0 group-hover:opacity-80 transition-opacity" />
            <span className="w-px h-10 bg-line shrink-0" aria-hidden="true"></span>
            <span className="flex flex-col">
              <span className="font-display font-semibold text-2xl text-content leading-tight group-hover:text-accent transition-colors">
                加藤裕幸事務所
              </span>
              <span className="hidden sm:block text-[11px] text-content-4 font-body tracking-label uppercase">
                Katoh Office · Medical Education
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}

            {/* Language toggle — typographic, like a running head */}
            <div className="flex items-center gap-2 font-body text-sm pl-4 border-l border-line">
              <button
                onClick={() => setLanguage('ja')}
                className={`transition-colors ${
                  language === 'ja' ? 'text-accent font-bold' : 'text-content-4 hover:text-content-2'
                }`}
              >
                日本語
              </button>
              <span className="text-content-4">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-accent font-bold' : 'text-content-4 hover:text-content-2'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-content-2 hover:text-accent transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Masthead double rule */}
      <div className="rule-double" aria-hidden="true"></div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-ground border-b border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 font-body text-sm pt-3 pl-4">
              <button
                onClick={() => setLanguage('ja')}
                className={language === 'ja' ? 'text-accent font-bold' : 'text-content-4'}
              >
                日本語
              </button>
              <span className="text-content-4">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'text-accent font-bold' : 'text-content-4'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
