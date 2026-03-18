import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hiroPhoto from '../assets/Katoh2.jpeg';
import SEO from '../components/SEO';

const Home = ({ language }) => {
  const content = {
    ja: {
      hero: {
        title: '医療教育の未来を',
        titleHighlight: '患者とともに創る',
        subtitle: '25年以上の臨床経験とAI技術を融合し、医療従事者と患者をつなぐ新しい教育プラットフォームを構築しています。',
        cta: '患者教育プラットフォーム',
        contact: 'お問い合わせ',
      },
      projects: {
        badge: 'PATIENT EDUCATION',
        title: '患者教育プロジェクト',
        subtitle: '専門医が執筆した、患者のための教育サイト',
        sites: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: '腰痛・狭窄症 相談室',
            desc: '腰部脊柱管狭窄症・慢性腰痛の患者さんが、疾患の理解から治療選択、脊髄刺激療法の検討まで、正確な情報に基づいて意思決定できるよう支援するサイトです。',
            stats: { articles: '30+', categories: '5', videos: '5' },
            statsLabels: { articles: '記事', categories: 'カテゴリ', videos: '動画' },
            color: 'neo-teal',
            gradient: 'from-neo-teal-500 to-cyan-600',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: '骨粗鬆症 まなびサイト',
            desc: '骨粗鬆症と診断された患者さんやそのご家族が、病気の仕組み・検査・治療薬・予防法を体系的に学べる教育サイトです。',
            stats: { articles: '28', categories: '5', pathways: '7' },
            statsLabels: { articles: '記事', categories: 'カテゴリ', pathways: '学習パス' },
            color: 'neo-coral',
            gradient: 'from-neo-coral-500 to-rose-600',
          },
        ],
        features: [
          {
            icon: 'content',
            title: '専門家による教育コンテンツ',
            desc: '脊椎外科医が執筆した記事・解説で、疾患と治療を体系的に理解できる構成',
          },
          {
            icon: 'evidence',
            title: 'エビデンスベース',
            desc: '最新の臨床研究と25年以上の実臨床経験に基づく正確な医学情報',
          },
          {
            icon: 'patient',
            title: '患者中心の設計',
            desc: '医学用語を分かりやすく解説し、60代以上の患者にも理解しやすい構成',
          },
          {
            icon: 'japanese',
            title: '日本語コンテンツ',
            desc: '日本の医療制度・保険制度に即した、専門的な患者教育資料',
          },
        ],
        cta: '詳しく見る',
      },
      services: {
        title: 'サービス',
        subtitle: '医療教育と臨床実践の架け橋として',
        consulting: {
          title: '医学教育コンサルティング',
          desc: '整形外科・慢性疼痛管理の豊富な臨床経験を活かし、医療機関の教育プログラム設計と改善を支援します。',
          details: [
            'カリキュラム設計と教育効果測定',
            '患者教育プログラムの開発',
            '国際基準に基づく教育プログラム',
          ],
        },
        software: {
          title: '教育テクノロジー',
          desc: 'AI技術を活用した医学教育アプリケーション。患者教育から医療従事者の研修まで、学習効率を最大化します。',
          details: [
            '患者教育プラットフォーム（SCS for LCS / NO-POROSIS）',
            'AI活用の学習支援ツール',
            'インタラクティブ教材開発',
          ],
        },
        support: {
          title: 'SCS臨床サポート',
          desc: '脊髄刺激療法の導入から運用まで、施設に合わせた包括的なサポートを提供します。',
          details: [
            '脊髄刺激療法の導入支援',
            '患者選択基準の最適化',
            '治療効果測定と継続的改善',
          ],
        },
      },
      credentials: {
        title: '実績と信頼',
        subtitle: '臨床・教育・研究の確かな専門性',
        experience: {
          number: '25+',
          label: '年の臨床経験',
        },
        education: {
          number: '8',
          label: '教育コンテンツ領域',
        },
        societies: {
          number: '11',
          label: '専門学会所属',
        },
        editorial: {
          number: '3',
          label: '国際誌編集委員',
        },
        highlights: {
          title: '主な実績',
          items: [
            '東海大学医学部 基礎医学系医学教育学 教授',
            'Toronto Western Hospital 研究員 (2018-2019)',
            '日本脊髄障害医学会 評議員',
            '東日本整形災害外科学会 評議員',
            'Medtronic・Boston Scientific SCS KOL',
            '慶應義塾大学医学部 博士（医学）',
          ],
        },
      },
      cta: {
        title: '医療教育の未来を、一緒に創りましょう',
        subtitle: '患者教育プラットフォームの導入や医学教育コンサルティングについて、お気軽にご相談ください。',
        button: 'お問い合わせ',
      },
    },
    en: {
      hero: {
        title: 'Shaping the Future of',
        titleHighlight: 'Patient Education',
        subtitle: 'Building innovative education platforms that connect clinicians and patients, powered by 25+ years of clinical experience and AI technology.',
        cta: 'Patient Education Platform',
        contact: 'Contact Us',
      },
      projects: {
        badge: 'PATIENT EDUCATION',
        title: 'Patient Education Projects',
        subtitle: 'Expert-authored educational sites for patients',
        sites: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: 'Back Pain & Spinal Stenosis Guide',
            desc: 'Empowering patients with lumbar canal stenosis and chronic low back pain to make informed treatment decisions — from understanding their condition through spinal cord stimulation.',
            stats: { articles: '30+', categories: '5', videos: '5' },
            statsLabels: { articles: 'Articles', categories: 'Categories', videos: 'Videos' },
            color: 'neo-teal',
            gradient: 'from-neo-teal-500 to-cyan-600',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: 'Osteoporosis Education',
            desc: 'A comprehensive educational site helping osteoporosis patients and their families understand the disease, diagnostics, medications, and prevention strategies.',
            stats: { articles: '28', categories: '5', pathways: '7' },
            statsLabels: { articles: 'Articles', categories: 'Categories', pathways: 'Pathways' },
            color: 'neo-coral',
            gradient: 'from-neo-coral-500 to-rose-600',
          },
        ],
        features: [
          {
            icon: 'content',
            title: 'Expert-Authored Content',
            desc: 'Articles and guides written by a spine surgeon, structured for systematic understanding of conditions and treatments',
          },
          {
            icon: 'evidence',
            title: 'Evidence-Based',
            desc: 'Accurate medical information grounded in latest research and 25+ years of clinical practice',
          },
          {
            icon: 'patient',
            title: 'Patient-Centered Design',
            desc: 'Medical terminology explained clearly, designed for accessibility by patients aged 60+',
          },
          {
            icon: 'japanese',
            title: 'Japanese-Language Content',
            desc: 'Professional patient education materials adapted for the Japanese healthcare and insurance system',
          },
        ],
        cta: 'Learn More',
      },
      services: {
        title: 'Services',
        subtitle: 'Bridging medical education and clinical practice',
        consulting: {
          title: 'Medical Education Consulting',
          desc: 'Leveraging extensive clinical experience in orthopedics and chronic pain to design and improve institutional education programs.',
          details: [
            'Curriculum design & effectiveness measurement',
            'Patient education program development',
            'Internationally benchmarked education programs',
          ],
        },
        software: {
          title: 'Education Technology',
          desc: 'AI-powered applications for medical education — from patient education to healthcare professional training.',
          details: [
            'Patient Education Platforms (SCS for LCS / NO-POROSIS)',
            'AI-enhanced learning tools',
            'Interactive educational materials',
          ],
        },
        support: {
          title: 'SCS Clinical Support',
          desc: 'Comprehensive support for SCS therapy implementation, from program setup to ongoing optimization.',
          details: [
            'SCS therapy implementation guidance',
            'Patient selection criteria optimization',
            'Outcome measurement & continuous improvement',
          ],
        },
      },
      credentials: {
        title: 'Credentials & Achievements',
        subtitle: 'Proven expertise across clinical practice, education, and research',
        experience: {
          number: '25+',
          label: 'Years of Clinical Practice',
        },
        education: {
          number: '8',
          label: 'Education Content Areas',
        },
        societies: {
          number: '11',
          label: 'Professional Societies',
        },
        editorial: {
          number: '3',
          label: 'Editorial Boards',
        },
        highlights: {
          title: 'Key Achievements',
          items: [
            'Professor of Medical Education, Tokai University School of Medicine',
            'Research Fellow, Toronto Western Hospital (2018-2019)',
            'Board Member, Japan Medical Society of Spinal Cord Lesion',
            'Board Member, Eastern Japan Association of Orthopaedics',
            'KOL for Medtronic & Boston Scientific SCS',
            'PhD in Medicine, Keio University School of Medicine',
          ],
        },
      },
      cta: {
        title: "Let's Shape the Future of Medical Education Together",
        subtitle: 'Contact us about patient education platform implementation or medical education consulting.',
        button: 'Contact Us',
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

  const featureIcons = {
    content: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    evidence: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    patient: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    japanese: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  };

  return (
    <>
      <SEO
        title={language === 'ja' ? '医療教育の未来を患者とともに創る' : 'Shaping the Future of Patient Education'}
        description={language === 'ja' ? '医療教育コンサルティング・患者教育プラットフォーム・SCS臨床サポート。25年以上の臨床経験とAI技術を融合。' : 'Medical education consulting, patient education platforms, and SCS clinical support. 25+ years of clinical experience.'}
        path="/"
        language={language}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-50 via-cyan-50/20 to-stone-50 overflow-hidden">
        {/* Decorative Elements */}
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
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                {t.hero.title}
                <span className="block text-gradient mt-3 text-7xl md:text-8xl lg:text-9xl">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-body mb-10 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/patient-education"
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
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-neo-coral-500 to-neo-amber-400 rounded-3xl opacity-80 z-0 animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-3xl opacity-80 z-0 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>

                {/* Photo card */}
                <div className="relative z-10 bg-white rounded-3xl overflow-hidden card-glow transform hover:scale-105 transition-transform duration-500 border-t-4 border-neo-teal-500">
                  <img
                    src={hiroPhoto}
                    alt={language === 'ja' ? '加藤裕幸 - 医療教育イノベーター' : 'Hiroyuki Katoh - Medical Education Innovator'}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                    </h3>
                    <p className="text-cyan-100 font-body text-sm">
                      {language === 'ja' ? '東海大学医学部 基礎医学系医学教育学 教授' : 'Professor of Medical Education, Tokai University'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Education Projects Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neo-teal-500 via-neo-coral-500 to-neo-amber-400"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-neo-coral-500/10 text-neo-coral-500 rounded-full text-sm font-body font-bold tracking-wider mb-6">
              {t.projects.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {t.projects.title}
            </h2>
            <p className="text-2xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Two Site Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {t.projects.sites.map((site, index) => (
              <motion.a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group block"
              >
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}>
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-r ${site.gradient} p-8 pb-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-display font-bold text-white">
                        {site.name}
                      </h3>
                      <svg className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-body text-lg">{site.tagline}</p>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <p className="text-gray-600 font-body leading-relaxed mb-6">
                      {site.desc}
                    </p>

                    {/* Stats row */}
                    <div className="flex gap-6">
                      {Object.entries(site.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-2xl font-display font-bold text-${site.color}-500`}>{value}</div>
                          <div className="text-xs text-gray-500 font-body">{site.statsLabels[key]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Feature highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {t.projects.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/patient-education"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-neo-teal-500 to-cyan-600 text-white rounded-xl font-body font-bold text-lg hover:from-neo-teal-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.projects.cta}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
            {/* Service Card 1 - Consulting */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border-t-4 border-neo-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

            {/* Service Card 2 - Education Technology */}
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

            {/* Service Card 3 - SCS Clinical Support */}
            <motion.div
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border-t-4 border-neo-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-neo-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

      {/* Credentials Section */}
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { key: 'experience', color: 'neo-teal-500' },
              { key: 'education', color: 'neo-coral-500' },
              { key: 'societies', color: 'neo-amber-400' },
              { key: 'editorial', color: 'cyan-500' }
            ].map(({ key, color }) => {
              const data = t.credentials[key];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
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
            className="bg-gradient-to-br from-stone-50 to-cyan-50/30 rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100"
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

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-neo-teal-500 via-cyan-600 to-neo-teal-600 overflow-hidden">
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
    </>
  );
};

export default Home;
