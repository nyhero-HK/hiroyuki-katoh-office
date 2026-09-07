import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';

const Services = ({ language }) => {
  const content = {
    ja: {
      hero: {
        title: 'サービス',
        subtitle: '医療機関と医療従事者の成長をサポート',
      },
      intro: {
        text: '加藤事務所では、25年以上の医療経験と国際的な研究実績を活かし、医療機関と医療従事者の皆様に専門的なコンサルティングと教育ソフトウェアを提供しています。',
      },
      services: [
        {
          id: 'consulting',
          numeral: 'I',
          title: 'コンサルティング',
          subtitle: '整形外科・慢性疼痛・医学教育の専門家として',
          description: '医療機関の業務最適化から手術チームのトレーニングまで、包括的なコンサルティングサービスを提供します。',
          features: [
            {
              name: '医療機関の業務最適化',
              details: [
                '診療フローの効率化分析',
                'スタッフ配置の最適化提案',
                '医療機器選定サポート',
                'コスト削減戦略の立案',
              ],
            },
            {
              name: '手術チームトレーニング',
              details: [
                '脊椎外科手術のプロトコル設計',
                '手術室スタッフの教育プログラム',
                '安全管理システムの構築',
                '技術向上のための継続的サポート',
              ],
            },
            {
              name: '慢性疼痛管理プロトコル',
              details: [
                '脊髄刺激療法の導入支援',
                '多角的疼痛管理アプローチの設計',
                '患者教育プログラムの開発',
                '治療効果測定システムの構築',
              ],
            },
            {
              name: '医学教育コンサルティング',
              details: [
                'カリキュラム設計サポート',
                '教育効果測定と改善提案',
                '国際基準に基づく教育プログラム',
                'AI技術活用の教育イノベーション',
              ],
            },
          ],
          pricing: {
            type: 'カスタマイズ',
            note: 'プロジェクトの規模と期間に応じて個別にお見積もりいたします。',
          },
        },
        {
          id: 'software',
          numeral: 'II',
          title: '教育ソフトウェア',
          subtitle: 'AI技術を活用した次世代の医学教育',
          description: '医学生と医療従事者の学習効率を最大化する、AI技術を活用した教育アプリケーションを開発・提供します。',
          features: [
            {
              name: 'AI活用の学習支援アプリ',
              details: [
                '個別最適化された学習プラン',
                'リアルタイムの理解度分析',
                'インタラクティブな症例学習',
                'パフォーマンス追跡とフィードバック',
              ],
            },
            {
              name: 'インタラクティブ教材開発',
              details: [
                '3Dビジュアライゼーション',
                'バーチャル手術シミュレーション',
                'マルチメディア統合教材',
                'モバイル対応学習プラットフォーム',
              ],
            },
            {
              name: 'ユーザー分析による改善',
              details: [
                '学習データの詳細分析',
                '効果測定と継続的改善',
                'カスタマイズされた進捗レポート',
                'エビデンスベースの教育最適化',
              ],
            },
          ],
          pricing: {
            type: 'サブスクリプション',
            note: '機能と利用人数に応じたプランをご用意しています。詳細はお問い合わせください。',
          },
        },
        {
          id: 'support',
          numeral: 'III',
          title: '継続的サポート',
          subtitle: '長期的な成長をお手伝い',
          description: 'サブスクリプション型の継続サポートで、医療機関と医療従事者の持続的な成長を支援します。',
          features: [
            {
              name: '定期的なフォローアップ',
              details: [
                '月次進捗確認ミーティング',
                '課題の早期発見と解決',
                '定期的なパフォーマンスレビュー',
                '戦略的アドバイス',
              ],
            },
            {
              name: '最新医学教育トレンド共有',
              details: [
                '国際学会情報のキュレーション',
                '最新研究成果の共有',
                'グローバルベストプラクティス',
                '教育イノベーション事例',
              ],
            },
            {
              name: '個別カスタマイズ対応',
              details: [
                'ニーズに応じた柔軟なサポート',
                '優先的なコンサルティング',
                'カスタム教材開発',
                '緊急時の即時対応',
              ],
            },
          ],
          pricing: {
            type: '月額制',
            note: 'サポート内容に応じた複数プランをご用意しています。',
          },
        },
      ],
      process: {
        title: 'ご利用の流れ',
        steps: [
          {
            number: '01',
            title: '無料相談',
            desc: 'まずはお気軽にご相談ください。課題やニーズをお伺いします。',
          },
          {
            number: '02',
            title: 'ニーズ分析',
            desc: '現状分析を行い、最適なソリューションをご提案します。',
          },
          {
            number: '03',
            title: 'プラン設計',
            desc: 'お客様のニーズに合わせたカスタマイズプランを作成します。',
          },
          {
            number: '04',
            title: '実施・サポート',
            desc: 'プランに基づいてサービスを提供し、継続的にサポートします。',
          },
        ],
      },
      why: {
        title: '選ばれる理由',
        reasons: [
          {
            title: '25年以上の医療経験',
            desc: '臨床医として豊富な実務経験を持ち、現場の課題を深く理解しています。',
          },
          {
            title: '国際的な研究実績',
            desc: 'Toronto Western Hospitalでの研究経験とグローバルなネットワーク。',
          },
          {
            title: '医学教育の専門知識',
            desc: '東海大学医学部での教育実践とAI技術活用の最先端ノウハウ。',
          },
          {
            title: '個別最適化アプローチ',
            desc: 'お客様一人ひとりのニーズに合わせたカスタマイズサービス。',
          },
        ],
      },
      cta: {
        titleLines: ['無料相談のご予約'],
        subtitle: 'まずはお気軽にご相談ください。お客様のニーズに最適なソリューションをご提案いたします。',
        button: 'お問い合わせ',
      },
    },
    en: {
      hero: {
        title: 'Services',
        subtitle: 'Supporting the Growth of Healthcare Institutions and Professionals',
      },
      intro: {
        text: 'Katoh Office leverages over 25 years of medical experience and international research achievements to provide specialized consulting and educational software for healthcare institutions and professionals.',
      },
      services: [
        {
          id: 'consulting',
          numeral: 'I',
          title: 'Consulting',
          subtitle: 'Expert in Orthopedic Surgery, Chronic Pain, and Medical Education',
          description: 'We provide comprehensive consulting services from healthcare workflow optimization to surgical team training.',
          features: [
            {
              name: 'Healthcare Workflow Optimization',
              details: [
                'Clinical flow efficiency analysis',
                'Staff allocation optimization',
                'Medical equipment selection support',
                'Cost reduction strategy planning',
              ],
            },
            {
              name: 'Surgical Team Training',
              details: [
                'Spinal surgery protocol design',
                'Operating room staff education programs',
                'Safety management system development',
                'Continuous support for skill improvement',
              ],
            },
            {
              name: 'Chronic Pain Management Protocols',
              details: [
                'Spinal cord stimulation therapy implementation',
                'Multidisciplinary pain management approach design',
                'Patient education program development',
                'Treatment effectiveness measurement systems',
              ],
            },
            {
              name: 'Medical Education Consulting',
              details: [
                'Curriculum design support',
                'Educational effectiveness measurement and improvement',
                'International standard-based education programs',
                'AI technology educational innovation',
              ],
            },
          ],
          pricing: {
            type: 'Customized',
            note: 'Individual quotes based on project scope and duration.',
          },
        },
        {
          id: 'software',
          numeral: 'II',
          title: 'Educational Software',
          subtitle: 'Next-Generation Medical Education Using AI Technology',
          description: 'We develop and provide AI-powered educational applications that maximize learning efficiency for medical students and healthcare professionals.',
          features: [
            {
              name: 'AI-Enhanced Learning Apps',
              details: [
                'Personalized learning plans',
                'Real-time comprehension analysis',
                'Interactive case-based learning',
                'Performance tracking and feedback',
              ],
            },
            {
              name: 'Interactive Educational Materials',
              details: [
                '3D visualization',
                'Virtual surgery simulation',
                'Multimedia integrated materials',
                'Mobile-compatible learning platform',
              ],
            },
            {
              name: 'User Analytics and Improvements',
              details: [
                'Detailed learning data analysis',
                'Effectiveness measurement and continuous improvement',
                'Customized progress reports',
                'Evidence-based educational optimization',
              ],
            },
          ],
          pricing: {
            type: 'Subscription',
            note: 'Plans available based on features and number of users. Contact us for details.',
          },
        },
        {
          id: 'support',
          numeral: 'III',
          title: 'Ongoing Support',
          subtitle: 'Supporting Long-Term Growth',
          description: 'Subscription-based continuous support to help healthcare institutions and professionals achieve sustainable growth.',
          features: [
            {
              name: 'Regular Follow-Up',
              details: [
                'Monthly progress review meetings',
                'Early issue identification and resolution',
                'Regular performance reviews',
                'Strategic advice',
              ],
            },
            {
              name: 'Latest Medical Education Trends',
              details: [
                'Curated international conference information',
                'Latest research findings sharing',
                'Global best practices',
                'Educational innovation cases',
              ],
            },
            {
              name: 'Customized Solutions',
              details: [
                'Flexible support based on needs',
                'Priority consulting access',
                'Custom educational material development',
                'Immediate response in emergencies',
              ],
            },
          ],
          pricing: {
            type: 'Monthly',
            note: 'Multiple plans available based on support content.',
          },
        },
      ],
      process: {
        title: 'Process',
        steps: [
          {
            number: '01',
            title: 'Free Consultation',
            desc: 'Feel free to reach out. We will listen to your challenges and needs.',
          },
          {
            number: '02',
            title: 'Needs Analysis',
            desc: 'We analyze the current situation and propose optimal solutions.',
          },
          {
            number: '03',
            title: 'Plan Design',
            desc: 'We create a customized plan tailored to your needs.',
          },
          {
            number: '04',
            title: 'Implementation & Support',
            desc: 'We deliver services based on the plan and provide continuous support.',
          },
        ],
      },
      why: {
        title: 'Why Choose Us',
        reasons: [
          {
            title: '25+ Years of Medical Experience',
            desc: 'Extensive practical experience as a clinician with deep understanding of field challenges.',
          },
          {
            title: 'International Research Achievements',
            desc: 'Research experience at Toronto Western Hospital and global network.',
          },
          {
            title: 'Medical Education Expertise',
            desc: 'Educational practice at Tokai University and cutting-edge AI technology know-how.',
          },
          {
            title: 'Personalized Approach',
            desc: 'Customized services tailored to each client\'s individual needs.',
          },
        ],
      },
      cta: {
        titleLines: ['Book a Free', 'Consultation'],
        subtitle: 'Feel free to reach out. We will propose the optimal solution for your needs.',
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

  return (
    <>
      <SEO
        title={language === 'ja' ? 'サービス' : 'Services'}
        description={language === 'ja' ? '医学教育コンサルティング、教育テクノロジー開発、SCS臨床サポート。医療機関と医療従事者の成長をサポートします。' : 'Medical education consulting, education technology development, and SCS clinical support for healthcare institutions.'}
        path="/services"
        language={language}
      />
      <div className="min-h-screen">
        {/* ——— Masthead ——— */}
        <section className="relative bg-ground bg-ruled overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="section-label mb-6">{t.hero.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.2] mb-8">
                <span className="inline-block">{t.hero.title}</span>
              </h1>
              <p className="text-lg text-content-3 font-body leading-relaxed">
                {t.intro.text}
              </p>
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— §1–§3 The three services, set as numbered chapters ——— */}
        {t.services.map((service, serviceIndex) => (
          <section
            key={service.id}
            className={serviceIndex % 2 === 0 ? 'py-24 bg-ground' : 'py-24 bg-surface border-y border-line'}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Chapter header */}
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-16 border-t-2 border-line-strong pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-2">
                    <span className="font-display italic font-normal text-5xl md:text-6xl text-accent leading-none select-none" aria-hidden="true">
                      {service.numeral}.
                    </span>
                  </div>
                  <div className="md:col-span-10 max-w-3xl">
                    <p className="section-label mb-4">§{serviceIndex + 1} {service.subtitle}</p>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">{service.title}</h2>
                    <p className="text-lg text-content-3 font-body leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature groups */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16"
              >
                {service.features.map((feature, index) => (
                  <motion.div key={feature.name} variants={rise} className="rule-fine pt-5">
                    <h3 className="text-2xl font-display font-semibold text-content mb-5">
                      <span className="font-display italic text-content-4 mr-3 select-none" aria-hidden="true">
                        {['i', 'ii', 'iii', 'iv'][index]}.
                      </span>
                      {feature.name}
                    </h3>
                    <ul className="space-y-2.5">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-base text-content-2 font-body leading-relaxed">
                          <span className="text-accent mr-2.5 select-none" aria-hidden="true">—</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* Engagement / pricing band */}
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 border-y-2 border-line-strong md:divide-x md:divide-line"
              >
                <div className="md:col-span-4 py-8 md:pr-8">
                  <div className="text-2xl md:text-3xl font-display font-semibold text-content">{service.pricing.type}</div>
                </div>
                <div className="md:col-span-8 py-2 pb-8 md:py-8 md:pl-8">
                  <p className="text-content-3 font-body text-base leading-relaxed">{service.pricing.note}</p>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* ——— §4 Process ——— */}
        <section className="py-24 bg-ground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§4</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">{t.process.title}</h2>
            </motion.div>

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-10"
            >
              {t.process.steps.map((step) => (
                <motion.li key={step.number} variants={rise} className="border-t-2 border-line-strong pt-6">
                  <div className="font-display italic text-3xl text-content-4 mb-4 select-none" aria-hidden="true">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-content mb-3">{step.title}</h3>
                  <p className="text-content-3 font-body text-base leading-relaxed">{step.desc}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ——— §5 Why Choose Us ——— */}
        <section className="py-24 bg-surface border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§5</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">{t.why.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl"
            >
              {t.why.reasons.map((reason) => (
                <motion.div key={reason.title} variants={rise} className="flex items-baseline">
                  <span className="shrink-0 text-accent font-display mr-3 select-none" aria-hidden="true">¶</span>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-content mb-2">{reason.title}</h3>
                    <p className="text-content-3 font-body text-base leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— CTA — dark band ——— */}
        <section className="on-plate relative py-24 bg-ground overflow-hidden">
          <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="block mb-8" aria-hidden="true">
                <Monogram dark className="text-5xl" />
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-content mb-6 leading-snug">
                <span className="inline-block">{t.cta.titleLines[0]}</span>
                {t.cta.titleLines[1] ? (
                  <span className="inline-block">{'\u00A0'}{t.cta.titleLines[1]}</span>
                ) : null}
              </h2>
              <p className="text-lg text-content-3 font-body mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-ground text-content font-body font-bold text-lg px-10 py-5 border border-content hover:bg-accent hover:border-accent hover:text-content transition-all duration-200"
              >
                {t.cta.button}
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
