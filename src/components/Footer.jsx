import { Link } from 'react-router-dom';
import Monogram from './Monogram';

const Footer = ({ language }) => {
  const content = {
    ja: {
      officeDesc: '医療教育コンサルティングと患者教育プラットフォームを提供しています。',
      quickLinks: '目次',
      projects: '患者教育サイト',
      legal: '法的情報',
      support: 'お問い合わせ',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      commercial: '特定商取引法に基づく表記',
      email: 'メール',
      colophon: '発行・運営：加藤裕幸事務所',
      copyright: '© 2026 加藤裕幸事務所 All rights reserved.',
      nav: {
        home: 'ホーム',
        about: '事務所について',
        services: 'サービス',
        education: '患者教育',
      },
    },
    en: {
      officeDesc: 'Medical education consulting and patient education platforms.',
      quickLinks: 'Contents',
      projects: 'Education Sites',
      legal: 'Legal',
      support: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      commercial: 'Commercial Transaction Act',
      email: 'Email',
      colophon: 'Published & operated by Katoh Office',
      copyright: '© 2026 Katoh Office. All rights reserved.',
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        education: 'Patient Education',
      },
    },
  };

  const t = content[language];

  const projectLinks = [
    { name: 'SCS for LCS', url: 'https://scs-for-lcs.com/' },
    { name: 'NO-POROSIS', url: 'https://no-porosis.com/' },
    { name: 'porosis-care', url: 'https://porosis-care.com/' },
    { name: 'YouTube @no-porosis', url: 'https://www.youtube.com/@no-porosis' },
  ];

  return (
    <footer className="bg-surface-2 border-t border-line text-content-2">
      {/* Vermillion rule where paper meets ink */}
      <div className="h-1 bg-accent" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Colophon block */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3.5 mb-5">
              <Monogram dark className="text-[2rem]" />
              <span className="w-px h-10 bg-line" aria-hidden="true"></span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-content">加藤裕幸事務所</span>
                <span className="text-[11px] text-content-4 font-body tracking-label uppercase">Katoh Office</span>
              </div>
            </div>
            <p className="text-content-3 font-body text-base max-w-md leading-relaxed">
              {t.officeDesc}
            </p>
            <p className="mt-5 text-sm text-content-4 font-body">
              {t.email}:{' '}
              <a
                href="mailto:hiroyuki.katoh.office@gmail.com"
                className="text-content-2 underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
              >
                hiroyuki.katoh.office@gmail.com
              </a>
            </p>
          </div>

          {/* Contents */}
          <div>
            <h3 className="font-body text-xs font-bold tracking-label uppercase text-accent-soft mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2.5 font-body text-[15px]">
              <li><Link to="/" className="text-content-3 hover:text-content transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-content-3 hover:text-content transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/services" className="text-content-3 hover:text-content transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/patient-education" className="text-content-3 hover:text-content transition-colors">{t.nav.education}</Link></li>
              <li><Link to="/support" className="text-content-3 hover:text-content transition-colors">{t.support}</Link></li>
            </ul>
          </div>

          {/* Education sites */}
          <div>
            <h3 className="font-body text-xs font-bold tracking-label uppercase text-accent-soft mb-4">{t.projects}</h3>
            <ul className="space-y-2.5 font-body text-[15px]">
              {projectLinks.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-content-3 hover:text-accent transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-body text-xs font-bold tracking-label uppercase text-accent-soft mb-4">{t.legal}</h3>
            <ul className="space-y-2.5 font-body text-[15px]">
              <li><Link to="/privacy-policy" className="text-content-3 hover:text-content transition-colors">{t.privacy}</Link></li>
              <li><Link to="/terms-of-service" className="text-content-3 hover:text-content transition-colors">{t.terms}</Link></li>
              <li><Link to="/specified-commercial-transaction" className="text-content-3 hover:text-content transition-colors">{t.commercial}</Link></li>
            </ul>
          </div>
        </div>

        {/* 奥付 bottom bar */}
        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-content-4 font-body">{t.colophon}</p>
          <p className="text-sm text-content-4 font-body">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
