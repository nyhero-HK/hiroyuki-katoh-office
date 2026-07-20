import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';

const PatientEducation = ({ language }) => {
  const content = {
    ja: {
      hero: {
        kicker: 'Patient Education',
        title: '患者教育プロジェクト',
        subtitle: '専門医が執筆した、患者のための教育サイト — 正確な医学情報で、治療の意思決定を支援します',
      },
      mission: {
        title: 'ミッション',
        content: '慢性疾患と診断された患者が、自分の病気を正しく理解し、十分な情報に基づいた治療選択ができるよう支援することが、私たちの使命です。現在3つの患者教育サイトを運営しています。',
        quote: '「患者教育は治療の一部である」',
        quoteAuthor: '— 加藤裕幸',
      },
      sites: {
        label: '§2 患者教育プラットフォーム',
        title: '運営サイト',
        items: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: '腰痛・狭窄症 相談室',
            desc: '腰部脊柱管狭窄症・慢性腰痛の患者さんが、疾患の理解から治療選択、脊髄刺激療法の検討まで、正確な情報に基づいて意思決定できるよう支援します。',
            highlights: ['30+記事（10無料 + 会員）', '5カテゴリの体系的コンテンツ', '患者ポータル（経過記録・薬手帳OCR）', 'YouTube動画シリーズ', 'LINE公式アカウント'],
            buttonText: 'サイトを見る',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: '骨粗鬆症 まなびサイト',
            desc: '骨粗鬆症と診断された患者さんやご家族が、病気の仕組み・検査・治療薬・食事・運動・予防法を体系的に学べる教育サイトです。',
            highlights: ['28記事（5つの柱で構成）', '7つの学習パスウェイ', 'FAQ（23問・6カテゴリ）', '編集方針・COI開示の透明性', '高齢者に優しいデザイン'],
            buttonText: 'サイトを見る',
          },
          {
            name: 'porosis-care',
            url: 'https://porosis-care.com/',
            tagline: '骨粗鬆症 治療サポート',
            desc: '治療中の患者さんに向けて、治療薬の理解と継続、日々の骨の健康づくりを支援するサイトです。記録機能で治療の歩みを見える化します。基本機能は無料で利用できます。',
            highlights: ['治療薬ガイド', '記録機能', '無料の基本利用'],
            buttonText: 'サイトを見る',
          },
        ],
        youtube: {
          name: 'YouTube — @no-porosis',
          url: 'https://www.youtube.com/@no-porosis',
          desc: '骨粗鬆症の治療薬・検査・疾患をテーマにした動画解説。処方された薬の名前で検索する患者さんに、専門医の解説を届けます。',
          cta: 'チャンネルを見る',
        },
      },
      problem: {
        title: '課題',
        subtitle: 'なぜ患者教育が必要なのか',
        items: [
          {
            title: '情報格差',
            desc: '脊柱管狭窄症や骨粗鬆症など、慢性疾患に関する日本語の正確な患者向け情報は限られています。多くの患者が、インターネット上の断片的・不正確な情報に頼らざるを得ない状況です。',
          },
          {
            title: '意思決定の難しさ',
            desc: '手術や脊髄刺激療法、あるいは骨粗鬆症の長期薬物治療など、患者は効果・リスク・費用・生活への影響を包括的に理解したうえで選択する必要があります。',
          },
          {
            title: '治療継続率への影響',
            desc: '十分な教育を受けた患者は治療への期待値が適切に設定され、満足度と継続率が向上することが示されています。特に骨粗鬆症では「治療を続けられること」が成果を大きく左右します。',
          },
        ],
      },
      solution: {
        title: 'コンテンツ',
        subtitle: '基礎知識から治療選択まで — 患者の理解に沿って構成された教育記事',
        description: '両サイトとも、脊椎外科・整形外科の専門医が25年以上の臨床経験をもとに執筆した体系的な教育コンテンツです。疾患の理解から検査・治療の選択、そして日常生活まで、患者の治療ジャーニーに沿った記事と解説で構成されています。',
        libraries: [
          {
            site: 'SCS for LCS',
            tagline: '腰部脊柱管狭窄症・慢性腰痛',
            meta: '5カテゴリ・30+記事',
            categories: [
              { title: '背骨のしくみ', type: '基礎解説', desc: '椎骨、脊柱管、椎間板の構造を「積み木」「あんパン」などの身近なたとえで解説' },
              { title: '腰部脊柱管狭窄症を知る', type: '疾患理解', desc: '病名の意味、なぜ起こるのか、痛みのメカニズム、似ている病気との違い' },
              { title: '検査と診断', type: '検査ガイド', desc: 'MRI・レントゲンなどの検査の流れ、画像の見方、診断のポイント' },
              { title: '治療の全体像', type: '治療戦略', desc: 'どんな治療法があるか一覧、治療の流れ（ステップ）、何を基準に選ぶか' },
              { title: '保存療法', type: '非手術治療', desc: '薬物療法、リハビリ・理学療法、神経ブロック注射、装具療法（コルセット）' },
              { title: '手術療法', type: '手術解説', desc: '除圧術・固定術の種類、手術の流れ、低侵襲手術、術後の回復' },
              { title: '脊髄刺激療法（SCS）', type: 'SCS', desc: '仕組み、トライアルから本植込みの流れ、効果と限界、費用と保険' },
              { title: '日常生活と用語集', type: '実践ガイド', desc: '姿勢・動作・運動のコツ、医学用語のやさしい解説集' },
            ],
          },
          {
            site: 'NO-POROSIS',
            tagline: '骨粗鬆症',
            meta: '5つの柱・28記事',
            categories: [
              { title: '骨と体のしくみ', type: '基礎解説', desc: '「骨は生きている」骨のリモデリング、女性ホルモンと骨の関係、「静かな病気」とよくある誤解' },
              { title: 'あなたのリスクを知る', type: 'リスク評価', desc: 'リスクチェック、壁立ちテスト、骨密度検査（DEXA）、骨代謝マーカー、FRAX骨折リスク' },
              { title: '今日からできること', type: '予防', desc: '骨を強くする食事（カルシウム・ビタミンD/K2）、運動と転倒予防、生活習慣の見直し' },
              { title: '検査と治療を理解する', type: '治療解説', desc: '治療の全体像、お薬ガイド（ビスホスホネート・デノスマブ・ロモソズマブ・テリパラチド）、安全性と継続' },
              { title: 'ご家族と一緒に', type: '実践ガイド', desc: '大切な人の骨を守る家族向けガイド、自己注射のサポート、住まいの転倒予防' },
            ],
          },
        ],
        premium: {
          title: '会員限定コンテンツ',
          items: ['治療法の比較表', '症状別の治療選択ガイド', '医師への質問リスト', '詳細治療ガイド'],
        },
      },
      features: {
        label: '§5 特徴',
        title: 'プラットフォームの特徴',
        items: [
          {
            title: '専門医が執筆',
            desc: '脊椎外科・骨粗鬆症診療における25年以上の臨床経験と最新の研究に基づき、専門医が直接執筆。医学的正確性と患者への配慮を両立しています。',
          },
          {
            title: '身近なたとえで理解',
            desc: '「背骨は積み木」「椎間板はあんパン」、「骨のリモデリングは解体チームと建設チーム」— 日本の文化に根ざした身近な例えで、脊椎疾患も骨粗鬆症も、60代以上の患者が直感的に理解できる解説。',
          },
          {
            title: 'あなたの状況に合わせたガイド',
            desc: '脊椎疾患では「まだ受診していない方」「診断された方」「手術を勧められた方」、骨粗鬆症では「圧迫骨折と言われた方」「お薬が始まる方」「予防したい方」— 状況別に最適な記事をご案内。',
          },
          {
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
              'SCS導入施設・骨粗鬆症リエゾンサービス向けの患者教育ツールとしての提供',
              '施設のブランドに合わせたカスタマイズ版',
              '患者教育の効果測定データの共有',
            ],
          },
          {
            title: 'デバイス・製薬企業向け',
            items: [
              '製品・治療と連携した患者教育コンテンツ',
              '治験参加者・服薬継続支援向けの教育資料',
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
        porosisCareButton: 'porosis-care',
      },
    },
    en: {
      hero: {
        kicker: 'Patient Education',
        title: 'Patient Education Projects',
        subtitle: 'Expert-authored educational sites for patients — empowering informed treatment decisions through accurate medical information',
      },
      mission: {
        title: 'Mission',
        content: 'Our mission is to empower patients diagnosed with chronic conditions to understand their disease and make informed treatment decisions through accurate, accessible education. We currently operate three patient education sites.',
        quote: '"Patient education is part of the treatment."',
        quoteAuthor: '— Hiroyuki Katoh, MD, PhD',
      },
      sites: {
        label: '§2 Patient Education Platforms',
        title: 'Our Sites',
        items: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: 'Back Pain & Spinal Stenosis Guide',
            desc: 'Empowering patients with lumbar canal stenosis and chronic low back pain to make informed treatment decisions — from understanding their condition through spinal cord stimulation.',
            highlights: ['30+ articles (free + member)', '5 systematic content categories', 'Patient portal (progress tracking, drug OCR)', 'YouTube video series', 'LINE official account'],
            buttonText: 'Visit Site',
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: 'Osteoporosis Education',
            desc: 'A comprehensive educational site helping osteoporosis patients and their families understand the disease, diagnostics, medications, nutrition, exercise, and prevention.',
            highlights: ['28 articles across 5 pillars', '7 guided learning pathways', 'FAQ (23 questions, 6 categories)', 'Editorial policy & COI transparency', 'Elderly-friendly design'],
            buttonText: 'Visit Site',
          },
          {
            name: 'porosis-care',
            url: 'https://porosis-care.com/',
            tagline: 'Osteoporosis Treatment Support',
            desc: 'Supports patients undergoing treatment — understanding and continuing medication and building daily bone health, with tracking tools that visualize progress. Core features are free.',
            highlights: ['Medication guides', 'Tracking tools', 'Free core features'],
            buttonText: 'Visit Site',
          },
        ],
        youtube: {
          name: 'YouTube — @no-porosis',
          url: 'https://www.youtube.com/@no-porosis',
          desc: 'Video explainers on osteoporosis medications, tests, and the disease — reaching patients who search for the drug they were just prescribed.',
          cta: 'Visit the channel',
        },
      },
      problem: {
        title: 'The Problem',
        subtitle: 'Why Patient Education Matters',
        items: [
          {
            title: 'Information Gap',
            desc: 'Accurate, patient-friendly Japanese information on chronic conditions — from spinal stenosis to osteoporosis — is limited. Many patients rely on fragmented or inaccurate online sources.',
          },
          {
            title: 'Decision Complexity',
            desc: 'Whether facing spine surgery, spinal cord stimulation, or years of osteoporosis medication, patients must weigh efficacy, risks, cost, and lifestyle impact to choose well.',
          },
          {
            title: 'Impact on Outcomes',
            desc: 'Well-educated patients set appropriate expectations, improving satisfaction and adherence. In osteoporosis especially, staying on therapy is what determines results.',
          },
        ],
      },
      solution: {
        title: 'Content',
        subtitle: 'From Fundamentals to Treatment — Systematic Articles Along the Patient Journey',
        description: 'Comprehensive Japanese-language libraries authored by a spine surgeon and orthopedic specialist with 25+ years of clinical experience. Both sites guide patients from understanding their condition through diagnosis, treatment choices, and everyday life.',
        note: '* All patient education content is currently available in Japanese only.',
        libraries: [
          {
            site: 'SCS for LCS',
            tagline: 'Lumbar canal stenosis & chronic low back pain',
            meta: '5 categories · 30+ articles',
            categories: [
              { title: 'Spinal Anatomy', type: 'Foundation', desc: 'Vertebrae, spinal canal, and disc structure explained through familiar analogies' },
              { title: 'Understanding LCS', type: 'Disease', desc: 'What lumbar canal stenosis means, why it happens, pain mechanisms, differential diagnosis' },
              { title: 'Tests & Diagnosis', type: 'Diagnosis', desc: 'MRI, X-ray, and other examinations; how to read imaging results' },
              { title: 'Treatment Overview', type: 'Strategy', desc: 'Full landscape of treatment options, decision framework, step-by-step treatment flow' },
              { title: 'Conservative Treatment', type: 'Non-Surgical', desc: 'Medication, physical therapy, nerve blocks, bracing (corsets)' },
              { title: 'Surgical Options', type: 'Surgery', desc: 'Decompression, fusion, minimally invasive approaches, recovery process' },
              { title: 'SCS Therapy', type: 'SCS', desc: 'How it works, trial-to-implant process, efficacy & limitations, cost & insurance' },
              { title: 'Daily Life & Glossary', type: 'Practical', desc: 'Posture, movement, and exercise tips; plain-language medical terminology reference' },
            ],
          },
          {
            site: 'NO-POROSIS',
            tagline: 'Osteoporosis',
            meta: '5 pillars · 28 articles',
            categories: [
              { title: 'How Bone Works', type: 'Foundation', desc: '"Bone is alive" — remodeling, the role of estrogen, the "silent disease," and common myths' },
              { title: 'Know Your Risk', type: 'Risk', desc: 'Risk check, wall-stand self-test, DEXA bone density, bone turnover markers, FRAX fracture risk' },
              { title: 'Start Today', type: 'Prevention', desc: 'Bone-strengthening nutrition (calcium, vitamin D/K2), exercise, fall prevention, lifestyle' },
              { title: 'Tests & Treatment', type: 'Treatment', desc: 'Treatment overview and medication guide (bisphosphonates, denosumab, romosozumab, teriparatide), safety & adherence' },
              { title: 'Together With Family', type: 'Practical', desc: 'Guidance for families, support with self-injection, and making the home safer' },
            ],
          },
        ],
        premium: {
          title: 'Premium Content',
          items: ['Treatment comparison tables', 'Personalized treatment selection guide', 'Questions for your doctor checklist', 'Detailed treatment guides'],
        },
      },
      features: {
        label: '§5 Features',
        title: 'Platform Features',
        items: [
          {
            title: 'Specialist-Authored',
            desc: 'Written directly by a board-certified spine surgeon and orthopedic specialist with 25+ years treating spinal disorders and osteoporosis. Combines medical accuracy with genuine patient empathy.',
          },
          {
            title: 'Culturally Adapted Education',
            desc: 'Not translated — authored in Japanese with culturally resonant analogies (the spine as stacking blocks; bone remodeling as demolition and construction crews) at a reading level optimized for patients aged 60+.',
          },
          {
            title: 'Situation-Based Patient Pathways',
            desc: 'Guided pathways for both conditions — from "just diagnosed" or "surgery recommended" for spinal stenosis, to "told you have a compression fracture," "starting medication," or "want to prevent it" for osteoporosis.',
          },
          {
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
              'Patient education tool for SCS-implementing facilities & osteoporosis liaison services',
              'Customized versions matching institutional branding',
              'Shared patient education effectiveness data',
            ],
          },
          {
            title: 'Device & Pharmaceutical Companies',
            items: [
              'Patient education content aligned with product and therapy',
              'Materials for clinical trial participants & medication adherence support',
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
        porosisCareButton: 'porosis-care',
      },
    },
  };

  const t = content[language];

  const rise = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const romans = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];
  const Romans = ['I', 'II', 'III'];

  return (
    <>
      <SEO
        title={language === 'ja' ? '患者教育プロジェクト' : 'Patient Education Projects'}
        description={language === 'ja' ? '腰部脊柱管狭窄症・慢性腰痛・骨粗鬆症 — 専門医が執筆した患者教育サイトを運営しています。' : 'Expert-authored patient education sites for lumbar canal stenosis, chronic low back pain, and osteoporosis.'}
        path="/patient-education"
        language={language}
      />
      <div className="min-h-screen">
        {/* ——— Hero ——— */}
        <section className="relative bg-washi-50 bg-ruled overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="section-label mb-6">{t.hero.kicker}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.2] mb-8">
                {language === 'ja' ? (
                  <>
                    <span className="inline-block">患者教育</span>
                    <span className="inline-block">プロジェクト</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block">Patient Education</span>{' '}
                    <span className="inline-block">Projects</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-lg text-ink-600 font-body leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— §1 Mission ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <p className="section-label mb-4">§1 {t.mission.title}</p>
              <blockquote>
                <p className="text-3xl md:text-4xl font-display font-bold text-ink-900 leading-snug mb-4">
                  {t.mission.quote}
                </p>
                <footer className="fig-caption mb-8">{t.mission.quoteAuthor}</footer>
              </blockquote>
              <p className="text-lg text-ink-600 font-body leading-relaxed border-l-2 border-kin-300 pl-5">
                {t.mission.content}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ——— §2 Our Sites ——— */}
        <section className="py-24 bg-white border-y border-washi-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">{t.sites.label}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.sites.title}</h2>
            </motion.div>

            {/* Three site cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              {t.sites.items.map((site) => (
                <motion.a
                  key={site.name}
                  variants={rise}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group panel panel-hover flex flex-col p-8"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-2xl font-display font-bold text-ink-900 group-hover:text-shu-600 transition-colors">
                      {site.name}
                    </h3>
                    <span className="text-ink-300 group-hover:text-shu-500 group-hover:translate-x-1 transition-all font-display" aria-hidden="true">↗</span>
                  </div>
                  <p className="text-sm font-body font-bold text-shu-500 tracking-wide mb-4">{site.tagline}</p>
                  <p className="text-ink-600 font-body text-base leading-relaxed mb-6">{site.desc}</p>
                  <ul className="rule-fine pt-5 space-y-2.5 mb-6 flex-grow">
                    {site.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-ink-700 font-body leading-relaxed">
                        <span className="text-shu-500 mr-2.5 select-none" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="font-body font-bold text-sm text-shu-500 group-hover:text-shu-600">
                    {site.buttonText} ↗
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* YouTube row */}
            <motion.a
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={t.sites.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group panel panel-hover flex flex-col sm:flex-row sm:items-center gap-6 p-8"
            >
              <div className="shrink-0 w-14 h-14 bg-shu-500 flex items-center justify-center" aria-hidden="true">
                <svg className="w-7 h-7 text-washi-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-display font-bold text-ink-900 group-hover:text-shu-600 transition-colors mb-1">
                  {t.sites.youtube.name}
                </h3>
                <p className="text-ink-600 font-body text-base leading-relaxed">{t.sites.youtube.desc}</p>
              </div>
              <span className="shrink-0 font-body font-bold text-sm text-shu-500 group-hover:text-shu-600 whitespace-nowrap">
                {t.sites.youtube.cta} ↗
              </span>
            </motion.a>
          </div>
        </section>

        {/* ——— §3 The Problem ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§3 {t.problem.title}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.problem.subtitle}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {t.problem.items.map((item, index) => (
                <motion.div key={item.title} variants={rise} className="border-t-2 border-ink-900 pt-6">
                  <div className="font-display italic text-3xl text-shu-500 mb-4 select-none" aria-hidden="true">
                    {Romans[index]}.
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-ink-900">{item.title}</h3>
                  <p className="text-ink-600 font-body leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— §4 Content Libraries ——— */}
        <section className="py-24 bg-white border-y border-washi-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§4 {t.solution.title}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t.solution.subtitle}</h2>
              <p className="text-lg text-ink-600 font-body leading-relaxed">{t.solution.description}</p>
              {t.solution.note && (
                <p className="text-sm text-ink-500 font-body leading-relaxed mt-4 border-l-2 border-kin-300 pl-4">
                  {t.solution.note}
                </p>
              )}
            </motion.div>

            <div className="space-y-16">
              {t.solution.libraries.map((lib) => (
                <div key={lib.site}>
                  {/* Library masthead */}
                  <motion.div
                    variants={rise}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t-2 border-ink-900 pt-6 mb-8"
                  >
                    <h3 className="text-2xl font-display font-bold text-ink-900">{lib.site}</h3>
                    <p className="text-sm text-ink-500 font-body mt-1">
                      {lib.tagline} · <span className="font-display italic text-ink-700">{lib.meta}</span>
                    </p>
                  </motion.div>

                  {/* Catalogue rows */}
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="divide-y divide-washi-300 border-y border-washi-300"
                  >
                    {lib.categories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        variants={rise}
                        className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 md:items-baseline"
                      >
                        <div className="md:col-span-4 flex items-baseline gap-4">
                          <span className="shrink-0 w-8 font-display italic text-xl text-washi-400 select-none" aria-hidden="true">
                            {romans[index]}.
                          </span>
                          <h4 className="text-lg font-display font-bold text-ink-900">{category.title}</h4>
                        </div>
                        <p className="md:col-span-2 text-sm font-body text-ink-400 tracking-wide md:pt-0 pl-12 md:pl-0">
                          {category.type}
                        </p>
                        <p className="md:col-span-6 text-ink-600 font-body text-base leading-relaxed pl-12 md:pl-0">
                          {category.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Premium content note */}
            {t.solution.premium && (
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="panel mt-12 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
                  <h4 className="shrink-0 text-lg font-display font-bold text-ink-900">{t.solution.premium.title}</h4>
                  <ul className="flex flex-wrap gap-x-8 gap-y-2">
                    {t.solution.premium.items.map((item, index) => (
                      <li key={index} className="flex items-baseline text-sm text-ink-700 font-body">
                        <span className="text-shu-500 mr-2.5 select-none" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ——— §5 Platform Features ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">{t.features.label}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.features.title}</h2>
            </motion.div>

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl"
            >
              {t.features.items.map((feature, index) => (
                <motion.li key={feature.title} variants={rise} className="flex gap-5">
                  <span className="font-display italic text-2xl text-washi-400 leading-none select-none" aria-hidden="true">
                    {romans[index]}.
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-ink-900">{feature.title}</h3>
                    <p className="text-ink-600 font-body text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ——— §6 For Professionals ——— */}
        <section className="py-24 bg-white border-t border-washi-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§6 {t.forProfessionals.subtitle}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t.forProfessionals.title}</h2>
              <p className="text-lg text-ink-600 font-body leading-relaxed">{t.forProfessionals.description}</p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {t.forProfessionals.partnerships.map((partner, index) => (
                <motion.div key={partner.title} variants={rise} className="border-t-2 border-ink-900 pt-6">
                  <div className="font-display italic text-3xl text-shu-500 mb-4 select-none" aria-hidden="true">
                    {Romans[index]}.
                  </div>
                  <h3 className="text-xl font-display font-bold mb-5 text-ink-900">{partner.title}</h3>
                  <ul className="space-y-2.5">
                    {partner.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-ink-700 font-body leading-relaxed">
                        <span className="text-shu-500 mr-2.5 select-none" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— CTA ——— */}
        <section className="relative py-24 bg-ink-900 overflow-hidden">
          <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="block mb-8" aria-hidden="true">
                <Monogram dark className="text-5xl" />
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-washi-50 mb-6 leading-snug">
                <span className="inline-block">{t.cta.title}</span>
              </h2>
              <p className="text-lg text-ink-200 font-body mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <Link
                  to="/support"
                  className="inline-flex items-center justify-center gap-2 bg-washi-50 text-ink-900 font-body font-bold text-lg px-10 py-5 border border-washi-50 hover:bg-shu-500 hover:border-shu-500 hover:text-washi-50 transition-all duration-200"
                >
                  {t.cta.button}
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="https://scs-for-lcs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-washi-50 font-body font-bold text-lg px-8 py-5 border border-washi-50/40 hover:border-washi-50 hover:bg-washi-50/10 transition-all duration-200"
                >
                  {t.cta.scsButton}
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://no-porosis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-washi-50 font-body font-bold text-lg px-8 py-5 border border-washi-50/40 hover:border-washi-50 hover:bg-washi-50/10 transition-all duration-200"
                >
                  {t.cta.noPorosisButton}
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://porosis-care.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-washi-50 font-body font-bold text-lg px-8 py-5 border border-washi-50/40 hover:border-washi-50 hover:bg-washi-50/10 transition-all duration-200"
                >
                  {t.cta.porosisCareButton}
                  <span aria-hidden="true">↗</span>
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
