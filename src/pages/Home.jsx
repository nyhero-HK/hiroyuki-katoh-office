import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hiroPhoto from '../assets/Katoh2.jpeg';

const Home = ({ language }) => {
  const content = {
    ja: {
      hero: {
        title: '医療教育の未来を',
        titleHighlight: '創造する',
        subtitle: '医療コンサルティングと教育ソフトウェアで、次世代の医療従事者をサポートします。',
        cta: '詳しく見る',
        contact: 'お問い合わせ',
      },
      services: {
        title: 'サービス',
        subtitle: '加藤事務所が提供する専門サービス',
        consulting: {
          title: 'コンサルティング',
          desc: '整形外科・慢性疼痛・医学教育について専門的なコンサルティングを提供します。',
          details: [
            '医療機関の業務最適化',
            '手術チームのトレーニング設計',
            '慢性疼痛管理プロトコル',
          ],
        },
        software: {
          title: '教育ソフトウェア',
          desc: 'AI技術を活用した医学教育アプリケーション。学習効率を最大化します。',
          details: [
            'AI活用の学習支援アプリ',
            'インタラクティブ教材開発',
            'ユーザー分析による改善',
          ],
        },
        support: {
          title: '継続的サポート',
          desc: 'サブスクリプション型の継続サポートで、長期的な成長をお手伝いします。',
          details: [
            '定期的なフォローアップ',
            '最新医学教育トレンド共有',
            '個別カスタマイズ対応',
          ],
        },
      },
      credentials: {
        title: '実績と信頼',
        subtitle: '確かな経験と専門性',
        experience: {
          number: '25+',
          label: '年の医療経験',
        },
        publications: {
          number: '3',
          label: '国際誌編集委員',
        },
        societies: {
          number: '11',
          label: '専門学会所属',
        },
        international: {
          number: '3',
          label: '国際学会会員',
        },
        highlights: {
          title: '主な実績',
          items: [
            '東海大学医学部 准教授・国際関係担当',
            'Toronto Western Hospital 研究員 (2018-2019)',
            '日本脊髄障害医学会 評議員',
            '東日本整形災害外科学会 評議員',
            '日本医学教育学会 会員',
            '慶應義塾大学医学部 博士（医学）',
          ],
        },
      },
      cta: {
        title: '今すぐ始めましょう',
        subtitle: 'あなたの医療教育をサポートします。',
        button: '無料相談を予約',
      },
    },
    en: {
      hero: {
        title: 'Shaping the Future of',
        titleHighlight: 'Medical Education',
        subtitle: 'Supporting the next generation of healthcare professionals with medical consulting and educational software.',
        cta: 'Learn More',
        contact: 'Contact Us',
      },
      services: {
        title: 'Services',
        subtitle: 'Professional services offered by Katoh Office',
        consulting: {
          title: 'Consulting',
          desc: 'Expert consulting in orthopedic surgery, chronic pain management, and medical education.',
          details: [
            'Healthcare workflow optimization',
            'Surgical team training programs',
            'Chronic pain management protocols',
          ],
        },
        software: {
          title: 'Educational Software',
          desc: 'AI-powered medical education applications that maximize learning efficiency.',
          details: [
            'AI-enhanced learning apps',
            'Interactive educational materials',
            'User analytics and improvements',
          ],
        },
        support: {
          title: 'Ongoing Support',
          desc: 'Subscription-based continuous support for long-term growth.',
          details: [
            'Regular follow-up sessions',
            'Latest medical education trends',
            'Customized solutions',
          ],
        },
      },
      credentials: {
        title: 'Achievements & Credentials',
        subtitle: 'Proven expertise and experience',
        experience: {
          number: '25+',
          label: 'Years of Medical Practice',
        },
        publications: {
          number: '3',
          label: 'Editorial Boards',
        },
        societies: {
          number: '11',
          label: 'Professional Societies',
        },
        international: {
          number: '3',
          label: 'International Societies',
        },
        highlights: {
          title: 'Key Achievements',
          items: [
            'Associate Professor & Chair of International Relations, Tokai University',
            'Research Fellow, Toronto Western Hospital (2018-2019)',
            'Board Member, Japan Medical Society of Spinal Cord Lesion',
            'Board Member, Eastern Japan Association of Orthopaedics',
            'Member, Japan Society for Medical Education',
            'PhD in Medicine, Keio University School of Medicine',
          ],
        },
      },
      cta: {
        title: "Let's Get Started",
        subtitle: 'Supporting your medical education journey.',
        button: 'Book Free Consultation',
      },
    },
  };

  const t = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-cyan-50/20 to-stone-50 overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-neo-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neo-coral-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-neo-amber-400/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Typography Hierarchy */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                {t.hero.title}
                <span className="block text-gradient mt-3 text-7xl md:text-8xl lg:text-9xl">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-body mb-10 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/support"
                  className="px-10 py-5 bg-neo-teal-500 text-white rounded-xl font-body font-bold text-lg hover:bg-neo-teal-600 transition-all transform hover:scale-105 hover:shadow-2xl text-center"
                >
                  {t.hero.cta}
                </Link>
                <Link
                  to="/support"
                  className="px-10 py-5 bg-white text-neo-teal-500 border-2 border-neo-teal-500 rounded-xl font-body font-bold text-lg hover:bg-neo-teal-50 transition-colors text-center"
                >
                  {t.hero.contact}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative max-w-md w-full">
                {/* Enhanced decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-neo-coral-500 to-neo-amber-400 rounded-3xl opacity-80 z-0 animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-3xl opacity-80 z-0 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>

                {/* Enhanced photo card with border accent */}
                <div className="relative z-10 bg-white rounded-3xl overflow-hidden card-glow transform hover:scale-105 transition-transform duration-500 border-t-4 border-neo-teal-500">
                  <img
                    src={hiroPhoto}
                    alt={language === 'ja' ? '加藤裕幸 - 医療教育コンサルタント' : 'Hiroyuki Katoh - Medical Education Consultant'}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                    </h3>
                    <p className="text-cyan-100 font-body text-sm">
                      {language === 'ja' ? '東海大学医学部准教授' : 'Associate Professor, Tokai University School of Medicine'}
                    </p>
                    <p className="text-cyan-200 font-body text-xs mt-1">
                      {language === 'ja' ? '国際関係担当' : 'Chair of International Relations'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with unique card designs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {t.services.title}
            </h2>
            <p className="text-2xl text-gray-600 font-body">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service Card 1 - Teal Accent */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border-t-4 border-neo-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                {t.services.consulting.title}
              </h3>
              <p className="text-gray-600 font-body mb-6 leading-relaxed">
                {t.services.consulting.desc}
              </p>
              <ul className="space-y-3">
                {t.services.consulting.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-neo-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Card 2 - Coral Accent */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border-t-4 border-neo-coral-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-neo-coral-500 to-neo-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                {t.services.software.title}
              </h3>
              <p className="text-gray-600 font-body mb-6 leading-relaxed">
                {t.services.software.desc}
              </p>
              <ul className="space-y-3">
                {t.services.software.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-neo-coral-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Card 3 - Amber Accent */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border-t-4 border-neo-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-neo-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
                {t.services.support.title}
              </h3>
              <p className="text-gray-600 font-body mb-6 leading-relaxed">
                {t.services.support.desc}
              </p>
              <ul className="space-y-3">
                {t.services.support.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-neo-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements & Credentials Section - NEW */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-cyan-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {t.credentials.title}
            </h2>
            <p className="text-2xl text-gray-600 font-body">
              {t.credentials.subtitle}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => {
              // Trigger counter animations
              document.querySelectorAll('[data-counter]').forEach(el => {
                el.dispatchEvent(new Event('animate'));
              });
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { key: 'experience', color: 'neo-teal-500' },
              { key: 'publications', color: 'neo-coral-500' },
              { key: 'societies', color: 'neo-amber-400' },
              { key: 'international', color: 'cyan-500' }
            ].map(({ key, color }) => {
              const data = t.credentials[key];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`text-5xl md:text-6xl font-display font-bold text-${color} mb-3`}>
                    {data.number}
                  </div>
                  <div className="text-gray-700 font-body text-sm md:text-base leading-snug">
                    {data.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-10 md:p-12 shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center md:text-left">
              {t.credentials.highlights.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.credentials.highlights.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-neo-teal-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700 font-body leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-br from-neo-teal-500 via-cyan-600 to-neo-teal-600 overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neo-coral-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
              {t.cta.title}
            </h2>
            <p className="text-2xl text-cyan-100 font-body mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.cta.subtitle}
            </p>
            <Link
              to="/support"
              className="inline-block px-12 py-6 bg-white text-neo-teal-500 rounded-xl font-body font-bold text-xl hover:bg-stone-50 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              {t.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
