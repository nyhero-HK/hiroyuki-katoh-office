import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PatientEducation = ({ language }) => {
  const content = {
    ja: {
      hero: {
        title: '患者教育プロジェクト',
        subtitle: '専門医が執筆した、患者のための教育サイト — 正確な医学情報で、治療の意思決定を支援します',
      },
      mission: {
        title: 'ミッション',
        content: '慢性疾患と診断された患者が、自分の病気を正しく理解し、十分な情報に基づいた治療選択ができるよう支援することが、私たちの使命です。現在2つの患者教育サイトを運営しています。',
        quote: '「患者教育は治療の一部である」',
        quoteAuthor: '— 加藤裕幸',
      },
      sites: {
        title: '運営サイト',
        items: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: '腰痛・狭窄症 相談室',
            desc: '腰部脊柱管狭窄症・慢性腰痛の患者さんが、疾患の理解から治療選択、脊髄刺激療法の検討まで、正確な情報に基づいて意思決定できるよう支援します。',
            highlights: ['30+記事（10無料 + 会員）', '5カテゴリの体系的コンテンツ', '患者ポータル（経過記録・薬手帳OCR）', 'YouTube動画シリーズ', 'LINE公式アカウント'],
            gradient: 'from-neo-teal-500 to-cyan-600',
            iconColor: 'text-neo-teal-500',
            buttonText: 'サイトを見る',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: '骨粗鬆症 まなびサイト',
            desc: '骨粗鬆症と診断された患者さんやご家族が、病気の仕組み・検査・治療薬・食事・運動・予防法を体系的に学べる教育サイトです。',
            highlights: ['28記事（5つの柱で構成）', '7つの学習パスウェイ', 'FAQ（23問・6カテゴリ）', '編集方針・COI開示の透明性', '高齢者に優しいデザイン'],
            gradient: 'from-neo-coral-500 to-rose-600',
            iconColor: 'text-neo-coral-500',
            buttonText: 'サイトを見る',
          },
        ],
      },
      problem: {
        title: '課題',
        subtitle: 'なぜ患者教育が必要なのか',
        items: [
          {
            title: '情報格差',
            desc: 'SCSに関する日本語の正確な患者向け情報は極めて限られています。多くの患者がインターネット上の不正確な情報に頼らざるを得ない状況です。',
          },
          {
            title: '意思決定の困難さ',
            desc: 'SCSは侵襲的な治療法であり、患者は治療の効果、リスク、手術の流れ、術後の生活について包括的に理解する必要があります。',
          },
          {
            title: '治療継続率への影響',
            desc: '十分な教育を受けた患者は、治療への期待値が適切に設定され、結果として治療満足度と継続率が向上することが示されています。',
          },
        ],
      },
      solution: {
        title: 'コンテンツ',
        subtitle: '基礎知識から治療選択まで — 患者の理解に沿って構成された教育記事',
        description: '脊椎外科専門医が25年以上の臨床経験をもとに執筆した、体系的な教育コンテンツです。「背骨のしくみ」から始まり、疾患の理解、治療の選択肢、そして日常生活まで、患者の治療ジャーニーに沿った記事と解説で構成されています。',
        categories: [
          {
            title: '背骨のしくみ',
            type: '基礎解説',
            desc: '椎骨、脊柱管、椎間板の構造を「積み木」「あんパン」などの身近なたとえで解説',
            module: 'LCS',
          },
          {
            title: '腰部脊柱管狭窄症を知る',
            type: '疾患理解',
            desc: '病名の意味、なぜ起こるのか、痛みのメカニズム、似ている病気との違い',
            module: 'LCS',
          },
          {
            title: '検査と診断',
            type: '検査ガイド',
            desc: 'MRI・レントゲンなどの検査の流れ、画像の見方、診断のポイント',
            module: 'LCS',
          },
          {
            title: '治療の全体像',
            type: '治療戦略',
            desc: 'どんな治療法があるか一覧、治療の流れ（ステップ）、何を基準に選ぶか',
          },
          {
            title: '保存療法',
            type: '非手術治療',
            desc: '薬物療法、リハビリ・理学療法、神経ブロック注射、装具療法（コルセット）',
          },
          {
            title: '手術療法',
            type: '手術解説',
            desc: '除圧術・固定術の種類、手術の流れ、低侵襲手術、術後の回復',
          },
          {
            title: '脊髄刺激療法（SCS）',
            type: 'SCS',
            desc: '仕組み、トライアルから本植込みの流れ、効果と限界、費用と保険',
          },
          {
            title: '日常生活と用語集',
            type: '実践ガイド',
            desc: '姿勢・動作・運動のコツ、医学用語のやさしい解説集',
          },
        ],
        premium: {
          title: '会員限定コンテンツ',
          items: ['治療法の比較表', '症状別の治療選択ガイド', '医師への質問リスト', 'SCS詳細ガイド'],
        },
      },
      features: {
        title: 'プラットフォームの特徴',
        items: [
          {
            icon: 'evidence',
            title: '脊椎外科専門医が執筆',
            desc: '25年以上の臨床経験と最新の研究に基づき、脊椎外科専門医が直接執筆。医学的正確性と患者への配慮を両立しています。',
          },
          {
            icon: 'accessible',
            title: '身近なたとえで理解',
            desc: '「背骨は積み木」「椎間板はあんパン」「脊柱管はホース」— 日本の文化に根ざした身近な例えで、60代以上の患者にも直感的に理解できる解説。',
          },
          {
            icon: 'journey',
            title: 'あなたの状況に合わせたガイド',
            desc: '「まだ病院に行っていない方」「病名を告げられた方」「治療法を検討中の方」「手術を勧められた方」— 5つの状況別に最適な記事をご案内。',
          },
          {
            icon: 'premium',
            title: '無料 + 会員限定コンテンツ',
            desc: '基礎知識は全て無料で公開。治療比較表、治療選択ガイド、医師への質問リストなどの実践ツールは会員限定で提供。',
          },
        ],
      },
      forProfessionals: {
        title: '医療機関・企業の皆様へ',
        subtitle: 'パートナーシップのご案内',
        description: '独立した品質評価で平均スコア3.7/4.0を達成。医学的正確性・法令遵守・教育設計の全領域で業界水準を大きく上回るコンテンツを、パートナーの皆様と共有します。',
        partnerships: [
          {
            title: '医療機関向け',
            items: [
              'SCS導入施設向け患者教育ツールとしての提供',
              '施設のブランドに合わせたカスタマイズ版',
              '患者教育の効果測定データの共有',
            ],
          },
          {
            title: 'デバイスメーカー向け',
            items: [
              '製品教育と連携した患者教育コンテンツ',
              '治験参加者向けの教育資料',
              'ポストマーケット患者サポートの強化',
            ],
          },
          {
            title: '研究機関向け',
            items: [
              '患者理解度の評価研究',
              '教育介入と治療アウトカムの関連研究',
              '多施設共同研究の基盤',
            ],
          },
        ],
      },
      cta: {
        title: 'お問い合わせ',
        subtitle: 'プラットフォームの詳細やパートナーシップについて、お気軽にお問い合わせください。',
        button: 'お問い合わせ',
        scsButton: 'SCS for LCS',
        noPorosisButton: 'NO-POROSIS',
      },
    },
    en: {
      hero: {
        title: 'Patient Education Projects',
        subtitle: 'Expert-authored educational sites for patients — empowering informed treatment decisions through accurate medical information',
      },
      mission: {
        title: 'Mission',
        content: 'Our mission is to empower patients diagnosed with chronic conditions to understand their disease and make informed treatment decisions through accurate, accessible education. We currently operate two patient education sites.',
        quote: '"Patient education is part of the treatment."',
        quoteAuthor: '— Hiroyuki Katoh, MD, PhD',
      },
      sites: {
        title: 'Our Sites',
        items: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: 'Back Pain & Spinal Stenosis Guide',
            desc: 'Empowering patients with lumbar canal stenosis and chronic low back pain to make informed treatment decisions — from understanding their condition through spinal cord stimulation.',
            highlights: ['30+ articles (free + member)', '5 systematic content categories', 'Patient portal (progress tracking, drug OCR)', 'YouTube video series', 'LINE official account'],
            gradient: 'from-neo-teal-500 to-cyan-600',
            iconColor: 'text-neo-teal-500',
            buttonText: 'Visit Site',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: 'Osteoporosis Education',
            desc: 'A comprehensive educational site helping osteoporosis patients and their families understand the disease, diagnostics, medications, nutrition, exercise, and prevention.',
            highlights: ['28 articles across 5 pillars', '7 guided learning pathways', 'FAQ (23 questions, 6 categories)', 'Editorial policy & COI transparency', 'Elderly-friendly design'],
            gradient: 'from-neo-coral-500 to-rose-600',
            iconColor: 'text-neo-coral-500',
            buttonText: 'Visit Site',
          },
        ],
      },
      problem: {
        title: 'The Problem',
        subtitle: 'Why Patient Education Matters',
        items: [
          {
            title: 'Information Gap',
            desc: 'Accurate, patient-friendly information about SCS in Japanese is extremely limited. Many patients rely on inaccurate online sources for their understanding.',
          },
          {
            title: 'Decision Complexity',
            desc: 'SCS is an invasive therapy. Patients need comprehensive understanding of efficacy, risks, surgical procedures, and post-operative lifestyle implications.',
          },
          {
            title: 'Impact on Outcomes',
            desc: 'Well-educated patients develop appropriate treatment expectations, leading to improved satisfaction rates and better long-term therapy adherence.',
          },
        ],
      },
      solution: {
        title: 'Content',
        subtitle: 'From Fundamentals to Treatment — Systematic Articles Along the Patient Journey',
        description: 'A comprehensive Japanese-language educational library authored by a spine surgeon with 25+ years of clinical experience. Articles and illustrated explanations guide patients from understanding spinal anatomy through treatment decision-making.',
        note: '* All patient education content is currently available in Japanese only.',
        categories: [
          {
            title: 'Spinal Anatomy',
            type: 'Foundation',
            desc: 'Vertebrae, spinal canal, and disc structure explained through familiar analogies',
            module: 'LCS',
          },
          {
            title: 'Understanding LCS',
            type: 'Disease',
            desc: 'What lumbar canal stenosis means, why it happens, pain mechanisms, differential diagnosis',
            module: 'LCS',
          },
          {
            title: 'Tests & Diagnosis',
            type: 'Diagnosis',
            desc: 'MRI, X-ray, and other examinations; how to read imaging results',
            module: 'LCS',
          },
          {
            title: 'Treatment Overview',
            type: 'Strategy',
            desc: 'Full landscape of treatment options, decision framework, step-by-step treatment flow',
          },
          {
            title: 'Conservative Treatment',
            type: 'Non-Surgical',
            desc: 'Medication, physical therapy, nerve blocks, bracing (corsets)',
          },
          {
            title: 'Surgical Options',
            type: 'Surgery',
            desc: 'Decompression, fusion, minimally invasive approaches, recovery process',
          },
          {
            title: 'SCS Therapy',
            type: 'SCS',
            desc: 'How it works, trial-to-implant process, efficacy & limitations, cost & insurance',
          },
          {
            title: 'Daily Life & Glossary',
            type: 'Practical',
            desc: 'Posture, movement, and exercise tips; plain-language medical terminology reference',
          },
        ],
        premium: {
          title: 'Premium Content',
          items: ['Treatment comparison tables', 'Personalized treatment selection guide', 'Questions for your doctor checklist', 'Detailed SCS guide'],
        },
      },
      features: {
        title: 'Platform Features',
        items: [
          {
            icon: 'evidence',
            title: 'Spine Surgeon-Authored',
            desc: 'Written directly by a board-certified spine surgeon with 25+ years of clinical experience. Combines medical accuracy with genuine patient empathy.',
          },
          {
            icon: 'accessible',
            title: 'Culturally Adapted Education',
            desc: 'Not translated — authored in Japanese with culturally resonant analogies and reading level optimized for patients aged 60+. True localization, not translation.',
          },
          {
            icon: 'journey',
            title: 'Situation-Based Patient Pathways',
            desc: 'Five guided pathways: "Haven\'t seen a doctor yet," "Just diagnosed," "Considering treatment," "Surgery recommended," and "Surgery not an option."',
          },
          {
            icon: 'premium',
            title: 'Free + Premium Tiers',
            desc: 'All foundational articles freely accessible. Premium tools — treatment comparisons, selection guides, doctor question checklists — available to members.',
          },
        ],
      },
      forProfessionals: {
        title: 'For Healthcare Institutions & Industry',
        subtitle: 'Partnership Opportunities',
        description: 'Independent quality assessment scored 3.7/4.0 average — exceeding industry standards across medical accuracy, legal compliance, and educational design. We are exploring partnerships to bring this content to more patients.',
        partnerships: [
          {
            title: 'Healthcare Institutions',
            items: [
              'Patient education tool for SCS-implementing facilities',
              'Customized versions matching institutional branding',
              'Shared patient education effectiveness data',
            ],
          },
          {
            title: 'Device Manufacturers',
            items: [
              'Patient education content aligned with product education',
              'Educational materials for clinical trial participants',
              'Enhanced post-market patient support',
            ],
          },
          {
            title: 'Research Institutions',
            items: [
              'Patient comprehension assessment studies',
              'Education intervention and outcome correlation research',
              'Multi-center collaborative research infrastructure',
            ],
          },
        ],
      },
      cta: {
        title: 'Get in Touch',
        subtitle: 'For platform details or partnership inquiries, please contact us.',
        button: 'Contact Us',
        scsButton: 'SCS for LCS',
        noPorosisButton: 'NO-POROSIS',
      },
    },
  };

  const t = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const featureIcons = {
    evidence: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accessible: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    journey: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    premium: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  return (
    <>
      <SEO
        title={language === 'ja' ? '患者教育プロジェクト' : 'Patient Education Projects'}
        description={language === 'ja' ? '腰部脊柱管狭窄症・慢性腰痛・骨粗鬆症 — 専門医が執筆した患者教育サイトを運営しています。' : 'Expert-authored patient education sites for lumbar canal stenosis, chronic low back pain, and osteoporosis.'}
        path="/patient-education"
        language={language}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-stone-50 via-cyan-50/20 to-stone-50 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-neo-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neo-coral-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-neo-coral-500/10 text-neo-coral-500 rounded-full text-sm font-body font-bold tracking-wider mb-6">
              FLAGSHIP PROJECT
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              {t.mission.title}
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-10">
              {t.mission.content}
            </p>
            <div className="bg-gradient-to-br from-neo-teal-500 to-cyan-600 rounded-2xl p-8 text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-white italic mb-2">
                {t.mission.quote}
              </p>
              <p className="text-cyan-100 font-body">
                {t.mission.quoteAuthor}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Sites Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {t.sites.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.sites.items.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${site.gradient} p-8`}>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {site.name}
                  </h3>
                  <p className="text-white/90 font-body text-lg">{site.tagline}</p>
                </div>

                {/* Body */}
                <div className="p-8">
                  <p className="text-gray-600 font-body leading-relaxed mb-6">
                    {site.desc}
                  </p>

                  {/* Feature highlights */}
                  <ul className="space-y-3 mb-8">
                    {site.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <svg className={`w-5 h-5 ${site.iconColor} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-body">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${site.gradient} text-white rounded-xl font-body font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-md`}
                  >
                    {site.buttonText}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t.problem.title}
            </h2>
            <p className="text-2xl text-gray-600 font-body">
              {t.problem.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.problem.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-neo-coral-500"
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section - Content Library */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t.solution.title}
            </h2>
            <p className="text-2xl text-neo-teal-500 font-body mb-6">
              {t.solution.subtitle}
            </p>
            <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
              {t.solution.description}
            </p>
            {t.solution.note && (
              <p className="text-sm text-gray-500 font-body mt-3 italic">
                {t.solution.note}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {t.solution.categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br from-stone-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${index <= 2 ? 'border-l-4 border-l-neo-coral-500/30' : index === 6 ? 'border-l-4 border-l-neo-teal-500/30' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 ${category.module === 'LCS' ? 'bg-neo-coral-500/10 text-neo-coral-500' : category.type === 'SCS' ? 'bg-neo-teal-500/10 text-neo-teal-500' : 'bg-gray-100 text-gray-600'} rounded-full text-xs font-body font-bold`}>
                    {category.type}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {category.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium content callout */}
          {t.solution.premium && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 bg-gradient-to-br from-neo-amber-400/5 to-neo-coral-500/5 rounded-2xl p-6 border border-neo-amber-400/20"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-neo-amber-400 to-neo-coral-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-gray-900">{t.solution.premium.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.solution.premium.items.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-white rounded-full text-sm font-body text-gray-700 border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {t.features.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {t.features.items.map((feature, index) => {
              const colors = ['neo-teal-500', 'neo-coral-500', 'neo-amber-400', 'cyan-500'];
              const gradients = [
                'from-neo-teal-500 to-cyan-500',
                'from-neo-coral-500 to-neo-amber-400',
                'from-neo-amber-400 to-neo-coral-500',
                'from-cyan-500 to-neo-teal-500',
              ];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-${colors[index]}`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6`}>
                    {featureIcons[feature.icon]}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* For Professionals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t.forProfessionals.title}
            </h2>
            <p className="text-2xl text-neo-teal-500 font-body mb-6">
              {t.forProfessionals.subtitle}
            </p>
            <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
              {t.forProfessionals.description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {t.forProfessionals.partnerships.map((partner, index) => {
              const borders = ['border-neo-teal-500', 'border-neo-coral-500', 'border-neo-amber-400'];
              const iconColors = ['text-neo-teal-500', 'text-neo-coral-500', 'text-neo-amber-400'];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 border-t-4 ${borders[index]} shadow-lg`}
                >
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                    {partner.title}
                  </h3>
                  <ul className="space-y-3">
                    {partner.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <svg className={`w-5 h-5 ${iconColors[index]} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-body text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-neo-teal-500 via-cyan-600 to-neo-teal-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neo-coral-500/20 rounded-full blur-3xl"></div>

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="inline-block px-12 py-6 bg-white text-neo-teal-500 rounded-xl font-body font-bold text-xl hover:bg-stone-50 transition-all transform hover:scale-105 shadow-2xl"
              >
                {t.cta.button}
              </Link>
              <a
                href="https://scs-for-lcs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-6 bg-white/10 text-white border-2 border-white/30 rounded-xl font-body font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                {t.cta.scsButton} →
              </a>
              <a
                href="https://no-porosis.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-6 bg-white/10 text-white border-2 border-white/30 rounded-xl font-body font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                {t.cta.noPorosisButton} →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PatientEducation;
