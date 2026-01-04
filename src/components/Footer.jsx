import { Link } from 'react-router-dom';
import logo from '../assets/Logo small.png';

const Footer = ({ language }) => {
  const content = {
    ja: {
      office: '加藤事務所について',
      officeDesc: '医療教育コンサルティングと教育ソフトウェアを提供しています。',
      quickLinks: 'クイックリンク',
      legal: '法的情報',
      support: 'お問い合わせ',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      commercial: '特定商取引法に基づく表記',
      email: 'メール',
      copyright: '© 2026 加藤事務所 All rights reserved.',
    },
    en: {
      office: 'About Katoh Office',
      officeDesc: 'Providing medical education consulting and educational software.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      support: 'Support',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      commercial: 'Commercial Transaction Act',
      email: 'Email',
      copyright: '© 2026 Katoh Office. All rights reserved.',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Katoh Office Logo" className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white">加藤事務所</span>
                <span className="text-xs text-gray-400 font-body">Katoh Office</span>
              </div>
            </div>
            <p className="text-gray-400 font-body max-w-md">
              {t.officeDesc}
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">{t.email}:</span>{' '}
                <a href="mailto:hiroyuki.katoh.office@gmail.com" className="text-neo-coral-500 hover:text-neo-coral-400 transition-colors">
                  hiroyuki.katoh.office@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors font-body">
                  {language === 'ja' ? 'ホーム' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-body">
                  {language === 'ja' ? '事務所について' : 'About'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors font-body">
                  {language === 'ja' ? 'サービス' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors font-body">
                  {t.support}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors font-body">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors font-body">
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link to="/specified-commercial-transaction" className="text-gray-400 hover:text-white transition-colors font-body">
                  {t.commercial}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 font-body">{t.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
