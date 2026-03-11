import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo small.png';

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

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Katoh Office Logo" className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-gray-900">加藤事務所</span>
              <span className="text-xs text-gray-600 font-body">Katoh Office</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium transition-colors">
              {t.home}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium transition-colors">
              {t.about}
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium transition-colors">
              {t.services}
            </Link>
            <Link to="/patient-education" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium transition-colors">
              {t.education}
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium transition-colors">
              {t.contact}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'ja'
                    ? 'bg-neo-teal-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                日本語
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-neo-teal-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium py-2">
                {t.home}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium py-2">
                {t.about}
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium py-2">
                {t.services}
              </Link>
              <Link to="/patient-education" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium py-2">
                {t.education}
              </Link>
              <Link to="/support" className="text-gray-700 hover:text-neo-teal-500 font-body font-medium py-2">
                {t.contact}
              </Link>
              <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
                <button
                  onClick={() => setLanguage('ja')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'ja'
                      ? 'bg-neo-teal-500 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-neo-teal-500 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
