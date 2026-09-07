import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import hiroPhoto from '../assets/Katoh2.jpeg';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';
import { Assemble, Count, Cue, Kinetic, Plane } from '../scroll/devices';

const Home = ({ language }) => {
  const content = {
    ja: {
      hero: {
        kicker: '医療教育 × 臨床 × AI',
        title: '医療教育の未来を、',
        titleHighlight: '患者とともに創る。',
        subtitle: '25年以上の臨床経験とAI技術を融合し、医療従事者と患者をつなぐ新しい教育プラットフォームを構築しています。',
        cta: '患者教育プラットフォーム',
        contact: 'お問い合わせ',
        figCaption: 'Fig. 1 — 加藤裕幸／東海大学医学部 医学教育学 教授・脊椎脊髄外科医',
      },
      projects: {
        label: '§1 患者教育プラットフォーム',
        title: '専門医が、自ら書く。',
        subtitle: '脊椎外科医が執筆・運営する患者教育サイト群。疾患の理解から治療の意思決定まで、正確な情報で支えます。',
        sites: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: '腰痛・狭窄症 相談室',
            desc: '腰部脊柱管狭窄症・慢性腰痛の患者さんが、疾患の理解から治療選択、脊髄刺激療法の検討まで、正確な情報に基づいて意思決定できるよう支援します。',
            stats: [
              { value: '30+', label: '記事' },
              { value: '5', label: 'カテゴリ' },
              { value: '5', label: '動画' },
            ],
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: '骨粗鬆症 まなびサイト',
            desc: '骨粗鬆症と診断された患者さんやそのご家族が、病気の仕組み・検査・治療薬・予防法を体系的に学べる教育サイトです。',
            stats: [
              { value: '28', label: '記事' },
              { value: '5', label: 'カテゴリ' },
              { value: '7', label: '学習パス' },
            ],
          },
          {
            name: 'porosis-care',
            url: 'https://porosis-care.com/',
            tagline: '骨粗鬆症 治療サポート',
            desc: '治療中の患者さんに向けて、治療薬の理解と継続、日々の骨の健康づくりを支援するサイトです。記録機能で治療の歩みを見える化します。',
            stats: [
              { value: '治療薬', label: 'ガイド' },
              { value: '記録', label: '機能' },
              { value: '無料', label: '基本利用' },
            ],
          },
        ],
        youtube: {
          name: 'YouTube — @no-porosis',
          url: 'https://www.youtube.com/@no-porosis',
          desc: '骨粗鬆症の治療薬・検査・疾患をテーマにした動画解説。処方された薬の名前で検索する患者さんに、専門医の解説を届けます。',
          cta: 'チャンネルを見る',
        },
        features: [
          { title: '専門家による教育コンテンツ', desc: '脊椎外科医が執筆した記事・解説で、疾患と治療を体系的に理解できる構成' },
          { title: 'エビデンスベース', desc: '最新の臨床研究と25年以上の実臨床経験に基づく正確な医学情報' },
          { title: '患者中心の設計', desc: '医学用語を分かりやすく解説し、60代以上の患者にも理解しやすい構成' },
          { title: '日本語コンテンツ', desc: '日本の医療制度・保険制度に即した、専門的な患者教育資料' },
        ],
        cta: '詳しく見る',
      },
      services: {
        label: '§2 サービス',
        title: '医療教育と臨床実践の架け橋として',
        titleLines: ['医療教育と臨床実践の', '架け橋として'],
        items: [
          {
            numeral: 'I',
            title: '医学教育コンサルティング',
            desc: '整形外科・慢性疼痛管理の豊富な臨床経験を活かし、医療機関の教育プログラム設計と改善を支援します。',
            details: ['カリキュラム設計と教育効果測定', '患者教育プログラムの開発', '国際基準に基づく教育プログラム'],
          },
          {
            numeral: 'II',
            title: '教育テクノロジー',
            desc: 'AI技術を活用した医学教育アプリケーション。患者教育から医療従事者の研修まで、学習効率を最大化します。',
            details: ['患者教育プラットフォームの開発・運営', 'AI活用の学習支援ツール', 'インタラクティブ教材開発'],
          },
          {
            numeral: 'III',
            title: 'SCS臨床サポート',
            desc: '脊髄刺激療法の導入から運用まで、施設に合わせた包括的なサポートを提供します。',
            details: ['脊髄刺激療法の導入支援', '患者選択基準の最適化', '治療効果測定と継続的改善'],
          },
        ],
      },
      academic: {
        label: '§3 大学での活動',
        title: '医学教育学の実践',
        note: '以下は東海大学医学部における教育・研究活動です（大学の職務として実施しており、事務所のサービスではありません）。',
        items: [
          {
            name: '医学教育FD基礎講座（オンライン）',
            desc: '医学部教員向けファカルティ・ディベロップメントのオンライン講座。動画教材と体系的カリキュラムで構成。',
            status: 'fd.tokai-meded.jp',
            url: 'https://fd.tokai-meded.jp',
          },
          {
            name: 'Clinical English',
            desc: '医学生・医療者向け臨床英語学習アプリ。1,600語以上の医学用語を間隔反復で習得。',
            status: 'english.tokai-meded.jp',
            url: 'https://english.tokai-meded.jp',
          },
          {
            name: '臨床実習評価システム',
            desc: '整形外科クリニカルクラークシップの学生評価をデジタル化するシステム。学内運用。',
            status: '学内システム',
            url: null,
          },
          {
            name: '東海大学 医学教育学サイト',
            desc: '医学教育学領域の活動・教育プログラムを紹介する公式サイト。',
            status: 'tokai-meded.jp',
            url: 'https://tokai-meded.jp',
          },
        ],
      },
      credentials: {
        label: '§4 実績と信頼',
        title: '臨床・教育・研究の確かな専門性',
        stats: [
          { number: '25+', label: '年の臨床経験' },
          { number: '8', label: '教育コンテンツ領域' },
          { number: '11', label: '専門学会所属' },
          { number: '3', label: '国際誌編集委員' },
        ],
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
        titleLines: ['医療教育の未来を、', '一緒に創りましょう。'],
        subtitle: '患者教育プラットフォームの導入や医学教育コンサルティングについて、お気軽にご相談ください。',
        button: 'お問い合わせ',
      },
    },
    en: {
      hero: {
        kicker: 'Medical Education × Clinical Practice × AI',
        title: 'Shaping the future of',
        titleHighlight: 'patient education.',
        subtitle: 'Building innovative education platforms that connect clinicians and patients, powered by 25+ years of clinical experience and AI technology.',
        cta: 'Patient Education Platforms',
        contact: 'Contact Us',
        figCaption: 'Fig. 1 — Hiroyuki Katoh, MD, PhD / Professor of Medical Education, Tokai University · Spine Surgeon',
      },
      projects: {
        label: '§1 Patient Education Platforms',
        title: 'Written by the specialist.',
        subtitle: 'Patient education sites authored and operated by a spine surgeon — supporting every step from understanding a diagnosis to making treatment decisions.',
        sites: [
          {
            name: 'SCS for LCS',
            url: 'https://scs-for-lcs.com/',
            tagline: 'Back Pain & Spinal Stenosis Guide',
            desc: 'Helps patients with lumbar spinal stenosis and chronic back pain make informed decisions — from understanding their condition to considering spinal cord stimulation.',
            stats: [
              { value: '30+', label: 'Articles' },
              { value: '5', label: 'Categories' },
              { value: '5', label: 'Videos' },
            ],
          },
          {
            name: 'NO-POROSIS',
            url: 'https://no-porosis.com/',
            tagline: 'Osteoporosis Learning Site',
            desc: 'A structured learning site where patients diagnosed with osteoporosis and their families can understand the disease, tests, medications, and prevention.',
            stats: [
              { value: '28', label: 'Articles' },
              { value: '5', label: 'Categories' },
              { value: '7', label: 'Pathways' },
            ],
          },
          {
            name: 'porosis-care',
            url: 'https://porosis-care.com/',
            tagline: 'Osteoporosis Treatment Support',
            desc: 'Supports patients undergoing treatment — understanding and continuing medication, and building daily bone health, with tracking tools that visualize progress.',
            stats: [
              { value: 'Rx', label: 'Guides' },
              { value: 'Track', label: 'Tools' },
              { value: 'Free', label: 'Core Use' },
            ],
          },
        ],
        youtube: {
          name: 'YouTube — @no-porosis',
          url: 'https://www.youtube.com/@no-porosis',
          desc: 'Video explainers on osteoporosis medications, tests, and the disease itself — reaching patients who search for the name of the drug they were just prescribed.',
          cta: 'Visit the channel',
        },
        features: [
          { title: 'Expert-Authored Content', desc: 'Articles and explainers written by a spine surgeon, structured for systematic understanding' },
          { title: 'Evidence-Based', desc: 'Accurate medical information grounded in current research and 25+ years of clinical practice' },
          { title: 'Patient-Centered Design', desc: 'Plain-language explanations designed to be readable for patients in their 60s and beyond' },
          { title: 'Made for Japan', desc: 'Specialized patient education aligned with the Japanese healthcare and insurance system' },
        ],
        cta: 'Learn More',
      },
      services: {
        label: '§2 Services',
        title: 'Bridging medical education and clinical practice',
        titleLines: ['Bridging medical education', 'and clinical practice'],
        items: [
          {
            numeral: 'I',
            title: 'Medical Education Consulting',
            desc: 'Supporting healthcare institutions in designing and improving education programs, drawing on extensive experience in orthopedics and chronic pain management.',
            details: ['Curriculum design & outcome measurement', 'Patient education program development', 'Programs built on international standards'],
          },
          {
            numeral: 'II',
            title: 'Education Technology',
            desc: 'AI-powered medical education applications — maximizing learning efficiency from patient education to professional training.',
            details: ['Patient education platform development & operation', 'AI-assisted learning tools', 'Interactive learning materials'],
          },
          {
            numeral: 'III',
            title: 'SCS Clinical Support',
            desc: 'Comprehensive, facility-tailored support for spinal cord stimulation — from introduction to ongoing operation.',
            details: ['SCS program introduction support', 'Patient selection optimization', 'Outcome measurement & continuous improvement'],
          },
        ],
      },
      academic: {
        label: '§3 Academic Activities',
        title: 'Medical education in practice',
        note: 'The following are educational and research activities at Tokai University School of Medicine, conducted in my university role — they are not services of this office.',
        items: [
          {
            name: 'Faculty Development Online Course',
            desc: 'An online FD core course for medical school faculty, built on video lectures and a structured curriculum.',
            status: 'fd.tokai-meded.jp',
            url: 'https://fd.tokai-meded.jp',
          },
          {
            name: 'Clinical English',
            desc: 'A clinical English learning app for medical students and professionals — 1,600+ terms with spaced repetition.',
            status: 'english.tokai-meded.jp',
            url: 'https://english.tokai-meded.jp',
          },
          {
            name: 'Clerkship Evaluation System',
            desc: 'Digitizing student evaluation for the orthopedic clinical clerkship. Internal university system.',
            status: 'Internal system',
            url: null,
          },
          {
            name: 'Tokai Medical Education Website',
            desc: 'The official site introducing the Department of Medical Education and its programs.',
            status: 'tokai-meded.jp',
            url: 'https://tokai-meded.jp',
          },
        ],
      },
      credentials: {
        label: '§4 Credentials',
        title: 'Proven expertise across clinical care, education, and research',
        stats: [
          { number: '25+', label: 'Years of Clinical Experience' },
          { number: '8', label: 'Education Content Areas' },
          { number: '11', label: 'Professional Societies' },
          { number: '3', label: 'International Editorial Boards' },
        ],
        highlights: {
          title: 'Key Achievements',
          items: [
            'Professor of Medical Education, Tokai University School of Medicine',
            'Research Fellow, Toronto Western Hospital (2018–2019)',
            'Board Member, Japan Medical Society of Spinal Cord Lesion',
            'Board Member, East Japan Association of Orthopaedics and Traumatology',
            'SCS KOL for Medtronic & Boston Scientific',
            'PhD in Medicine, Keio University School of Medicine',
          ],
        },
      },
      cta: {
        titleLines: ["Let's shape the future of", 'medical education together.'],
        subtitle: 'Feel free to reach out about patient education platforms or medical education consulting.',
        button: 'Contact Us',
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

  // ——— Scroll as the timeline ———————————————————————————————————
  // Every value below is driven by scroll POSITION, not by a timer, so the
  // page responds to the reader's own hand and reverses when they scroll back.
  // prefers-reduced-motion collapses all of it to the static composition.
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const plateRef = useRef(null);

  const { scrollYProgress: heroP } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Planes travel `rate * (p - 0.5) * 100` PIXELS, not viewport fractions.
  // Adjacent planes differ by 10-30%; beyond that it reads as things sliding
  // around rather than as distance. The copy is NOT a plane: it rides at 1x,
  // because text the reader is trying to read must not move against the thing
  // they are reading it on.
  const GROUND_RATE = reduce ? 0 : -1.4;   // 140px, the full-bleed bed
  const PLATE_RATE  = reduce ? 0 : -1.05;  // 105px, 25% ahead of the bed

  // §1's four claims are an argument, so they get the `pin`: the frame holds
  // and the states cross over inside it. The three sites are a comparison and
  // stay a grid.
  const pinRef = useRef(null);
  // Resolved on the FIRST render, not in an effect. With a false initial value
  // the pinned branch does not exist during the first paint, so `pinRef` is
  // null when useScroll measures, framer silently falls back to tracking the
  // whole document, and the act's progress is compressed to the fraction of the
  // page the act occupies — measured at 4x here, which left cues iii and iv
  // permanently unreachable. Nothing about that is visible in a screenshot.
  const [wide, setWide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  const pinned = wide && !reduce;
  // Progress starts as the act ENTERS, not when it pins. devices.md's "ground
  // or greet": a pinned stage is fully on screen roughly a viewport before its
  // own progress leaves 0, so measuring from 'start start' leaves the stage
  // sitting empty for that entire approach — which is exactly what reads as a
  // rendering fault. The first cards are already arriving by the time it pins.
  const { scrollYProgress: pinP } = useScroll({
    target: pinRef,
    offset: ['start end', 'end end'],
  });
  // The four claims are cards that fly in from beyond their own corner and lock
  // into a 2x2. Windows overlap so the arrivals read as one continuous
  // assembly rather than four separate events, and the composition holds for
  // the last third of the act — the landing IS the payoff, so the stage must
  // not empty out the way a text cue does.
  const CARDS = [
    { from: 0.04, to: 0.34, dx: -520, dy: -190, rotate: -7 },
    { from: 0.17, to: 0.47, dx: 520, dy: -150, rotate: 6 },
    { from: 0.30, to: 0.60, dx: -460, dy: 230, rotate: 5 },
    { from: 0.43, to: 0.73, dx: 500, dy: 260, rotate: -6 },
  ];

  const statsRef = useRef(null);
  const { scrollYProgress: statsP } = useScroll({
    target: statsRef,
    offset: ['start 90%', 'start 45%'],
  });

  const { scrollYProgress: plateP } = useScroll({
    target: plateRef,
    offset: ['start end', 'start 35%'],
  });
  // the plate does not fade in; it is uncovered, which is a change of state
  const plateClip = useTransform(plateP, [0, 1],
    reduce ? ['inset(0% 0 0 0)', 'inset(0% 0 0 0)'] : ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']);

  return (
    <>
      <SEO
        title={language === 'ja' ? '医療教育の未来を患者とともに創る' : 'Shaping the Future of Patient Education'}
        description={language === 'ja' ? '医療教育コンサルティング・患者教育プラットフォーム・SCS臨床サポート。25年以上の臨床経験とAI技術を融合。' : 'Medical education consulting, patient education platforms, and SCS clinical support. 25+ years of clinical experience.'}
        path="/"
        language={language}
      />
      <div className="min-h-screen">
        {/* ——— Hero ——— */}
        <section ref={heroRef} className="relative bg-ground overflow-hidden">
          <Plane progress={heroP} rate={GROUND_RATE} className="absolute inset-0 -top-32 -bottom-32 bg-ruled" aria-hidden="true" />
          <Cue progress={heroP} spec="0 0.92 0" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="lg:col-span-7"
              >
                <p className="section-label mb-6">{t.hero.kicker}</p>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-5xl font-display font-semibold leading-[1.2] mb-8">
                  <Kinetic still={reduce} lines={[t.hero.title]} delay={0.1} />
                  <Kinetic still={reduce} lines={[t.hero.titleHighlight]} delay={0.22} className="block mt-2 text-accent" />
                </h1>
                <p className="text-lg md:text-lg text-content-3 font-body mb-10 max-w-xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/patient-education" className="btn-ink text-lg">
                    {t.hero.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link to="/support" className="btn-paper text-lg">
                    {t.hero.contact}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="lg:col-span-5"
              >
                <Plane progress={heroP} rate={PLATE_RATE} className="relative max-w-sm mx-auto lg:ml-auto">
                  <figure className="plate relative">
                    <img
                      src={hiroPhoto}
                      alt={language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                      className="w-full h-auto"
                    />
                    <figcaption className="fig-caption pt-3 px-1">
                      {t.hero.figCaption}
                    </figcaption>
                    {/* Monogram chip overlapping the plate corner */}
                    <span className="absolute -top-4 -right-4 bg-ground border border-line px-3 py-2" aria-hidden="true">
                      <Monogram className="text-2xl" />
                    </span>
                  </figure>
                </Plane>
              </motion.div>
            </div>
          </Cue>
          {/* Section close rule */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— §1 Patient Education Platforms ——— */}
        <section className="py-24 bg-ground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">{t.projects.label}</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">{t.projects.title}</h2>
              <p className="text-lg text-content-3 font-body leading-relaxed">{t.projects.subtitle}</p>
            </motion.div>

            {/* Three site cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              {t.projects.sites.map((site) => (
                <motion.a
                  key={site.name}
                  variants={rise}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group panel panel-hover flex flex-col p-8"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-2xl font-display font-semibold text-content group-hover:text-accent transition-colors">
                      {site.name}
                    </h3>
                    <span className="text-content-4 group-hover:text-accent group-hover:translate-x-1 transition-all font-display" aria-hidden="true">↗</span>
                  </div>
                  <p className="text-sm font-body font-bold text-accent tracking-wide mb-4">{site.tagline}</p>
                  <p className="text-content-3 font-body text-base leading-relaxed mb-6 flex-grow">{site.desc}</p>
                  <div className="rule-fine pt-4 flex gap-8">
                    {site.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-xl font-display font-semibold text-content">{s.value}</div>
                        <div className="text-xs text-content-4 font-body tracking-wide">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* YouTube row */}
            <motion.a
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={t.projects.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group panel panel-hover flex flex-col sm:flex-row sm:items-center gap-6 p-8 mb-16"
            >
              <div className="shrink-0 w-14 h-14 bg-accent flex items-center justify-center" aria-hidden="true">
                <svg className="w-7 h-7 text-content" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-display font-semibold text-content group-hover:text-accent transition-colors mb-1">
                  {t.projects.youtube.name}
                </h3>
                <p className="text-content-3 font-body text-base leading-relaxed">{t.projects.youtube.desc}</p>
              </div>
              <span className="shrink-0 font-body font-bold text-sm text-accent group-hover:text-accent whitespace-nowrap">
                {t.projects.youtube.cta} ↗
              </span>
            </motion.a>

            {/* Editorial numbered features — `pin`: the frame holds, the four
                claims cross over inside it. Below md, and under reduced motion,
                this is an ordinary list; a pinned act on a phone fights the
                thumb. Everything is in the DOM either way, so the reading order
                and the accessibility tree do not change. */}
            {pinned ? (
              <div ref={pinRef} className="relative h-[260vh] mb-14">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                  <ol className="grid grid-cols-2 gap-6 w-full max-w-5xl mx-auto list-none">
                    {t.projects.features.map((feature, index) => (
                      <Assemble
                        key={index}
                        progress={pinP}
                        {...CARDS[index]}
                        className="bg-surface border border-line p-8 min-h-[15rem] flex flex-col"
                      >
                        <li className="list-none flex flex-col h-full">
                          <span
                            className="font-display italic text-4xl text-accent leading-none select-none mb-5"
                            aria-hidden="true"
                          >
                            {['i', 'ii', 'iii', 'iv'][index]}.
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-semibold mb-3 text-content">
                            {feature.title}
                          </h3>
                          <p className="text-content-3 font-body text-base leading-relaxed">
                            {feature.desc}
                          </p>
                        </li>
                      </Assemble>
                    ))}
                  </ol>
                </div>
              </div>
            ) : (
              <motion.ol
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-14 max-w-4xl"
              >
                {t.projects.features.map((feature, index) => (
                  <motion.li key={index} variants={rise} className="flex gap-5">
                    <span className="font-display italic text-2xl text-content-4 leading-none select-none" aria-hidden="true">
                      {['i', 'ii', 'iii', 'iv'][index]}.
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-1 text-content">{feature.title}</h3>
                      <p className="text-content-3 font-body text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            )}

            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to="/patient-education" className="link-editorial font-body font-bold text-lg">
                {t.projects.cta} →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ——— §2 Services — the peak: the one inverted field on the page ——— */}
        <motion.section ref={plateRef} style={{ clipPath: plateClip }} className="on-plate relative py-28 md:py-40 bg-ground overflow-hidden">
          <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20 max-w-3xl"
            >
              <p className="section-label mb-5 text-accent">{t.services.label}</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-content leading-[1.2]">
                {t.services.titleLines.map((line, i) => (
                  <span key={i} className="inline-block">
                    {line}
                  </span>
                ))}
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16 md:space-y-24"
            >
              {t.services.items.map((service) => (
                <motion.article
                  key={service.numeral}
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px -25% 0px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10"
                >
                  <div className="md:col-span-2">
                    <span
                      className="font-display italic font-normal text-5xl md:text-6xl text-accent leading-none select-none"
                      aria-hidden="true"
                    >
                      {service.numeral}.
                    </span>
                  </div>
                  <div className="md:col-span-10 max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-content mb-4">
                      {service.title}
                    </h3>
                    <p className="text-content-2 font-body leading-relaxed mb-5">{service.desc}</p>
                    {/* run-on列挙(md+) / 箇条書き(mobile) — 区切りが行頭に落ちないよう項目と一体で折る */}
                    <p className="font-body text-sm text-content-3 leading-loose">
                      {service.details.map((detail, i) => (
                        <span key={i} className="block md:inline">
                          <span
                            className="text-accent mr-2.5 md:mr-3 md:ml-3 select-none"
                            aria-hidden="true"
                          >
                            —
                          </span>
                          {detail}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ——— §3 Academic Activities ——— */}
        <section className="py-24 bg-ground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">{t.academic.label}</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">{t.academic.title}</h2>
              <p className="text-sm text-content-4 font-body leading-relaxed border-l-2 border-accent pl-4">
                {t.academic.note}
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y divide-line border-y border-line"
            >
              {t.academic.items.map((item) => {
                const inner = (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 md:items-baseline">
                    <h3 className={`md:col-span-4 text-xl font-display font-semibold ${item.url ? 'group-hover:text-accent transition-colors' : ''} text-content`}>
                      {item.name}
                    </h3>
                    <p className="md:col-span-6 text-content-3 font-body text-base leading-relaxed">{item.desc}</p>
                    <p className="md:col-span-2 md:text-right text-sm font-body">
                      {item.url ? (
                        <span className="text-accent font-bold group-hover:text-accent">{item.status} ↗</span>
                      ) : (
                        <span className="text-content-4">{item.status}</span>
                      )}
                    </p>
                  </div>
                );
                return item.url ? (
                  <motion.a
                    key={item.name}
                    variants={rise}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block hover:bg-surface transition-colors -mx-4 px-4"
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div key={item.name} variants={rise} className="-mx-4 px-4">
                    {inner}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ——— §4 Credentials ——— */}
        <section className="py-24 bg-surface border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">{t.credentials.label}</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">{t.credentials.title}</h2>
            </motion.div>

            {/* Stats — set like a data table in a paper */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 border-y-2 border-line-strong divide-x divide-line mb-16"
            >
              {t.credentials.stats.map((s) => (
                <motion.div key={s.label} variants={rise} className="py-10 px-6 text-center">
                  <div className="text-4xl md:text-5xl font-display font-semibold text-content mb-2">
                    <Count progress={statsP} spec="0.05 1 0.45 0" target={s.number} still={reduce} />
                  </div>
                  <div className="text-content-4 font-body text-sm leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key achievements */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h3 className="text-2xl font-display font-semibold mb-8">{t.credentials.highlights.title}</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                {t.credentials.highlights.items.map((item, index) => (
                  <div key={index} className="flex items-baseline">
                    <span className="shrink-0 text-accent font-display mr-3 select-none" aria-hidden="true">¶</span>
                    <p className="text-content-2 font-body leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ——— CTA ——— */}
        {/* ——— Close — on paper, so the ink footer reads as a colophon, not a continuation ——— */}
        <section className="relative py-28 bg-surface-2 bg-ruled overflow-hidden border-t border-line">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="block mb-8" aria-hidden="true">
                <Monogram className="text-5xl" />
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-content mb-6 leading-snug">
                <span className="inline-block">{t.cta.titleLines[0]}</span>{' '}
                <span className="inline-block">{t.cta.titleLines[1]}</span>
              </h2>
              <p className="text-lg text-content-3 font-body mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>
              <Link to="/support" className="btn-ink text-lg px-10 py-5">
                {t.cta.button}
                <span aria-hidden="true">→</span>
              </Link>
              <div className="rule-double mt-20 max-w-xs mx-auto" aria-hidden="true"></div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
