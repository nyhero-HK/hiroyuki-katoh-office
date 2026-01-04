import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          icon: '💡',
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
          icon: '💻',
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
          icon: '🤝',
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
        title: '無料相談のご予約',
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
          icon: '💡',
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
          icon: '💻',
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
          icon: '🤝',
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
        title: 'Book a Free Consultation',
        subtitle: 'Feel free to reach out. We will propose the optimal solution for your needs.',
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const colorMap = {
    consulting: {
      border: 'border-neo-teal-500',
      bg: 'bg-neo-teal-500',
      text: 'text-neo-teal-500',
      gradient: 'from-neo-teal-500 to-cyan-500',
    },
    software: {
      border: 'border-neo-coral-500',
      bg: 'bg-neo-coral-500',
      text: 'text-neo-coral-500',
      gradient: 'from-neo-coral-500 to-neo-amber-400',
    },
    support: {
      border: 'border-neo-amber-400',
      bg: 'bg-neo-amber-400',
      text: 'text-neo-amber-400',
      gradient: 'from-cyan-500 to-neo-teal-500',
    },
  };

  return (
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-body mb-8">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-body max-w-4xl mx-auto leading-relaxed">
              {t.intro.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {t.services.map((service, serviceIndex) => {
        const colors = colorMap[service.id];
        return (
          <section
            key={service.id}
            className={serviceIndex % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gradient-to-br from-stone-50 to-cyan-50/20'}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {service.title}
                </h2>
                <p className={`text-2xl ${colors.text} font-body mb-6`}>
                  {service.subtitle}
                </p>
                <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 mb-12"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`bg-white rounded-2xl p-8 border-t-4 ${colors.border} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                      {feature.name}
                    </h3>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-gray-700">
                          <svg className={`w-5 h-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-body">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-gradient-to-r ${colors.gradient} rounded-2xl p-8 text-white text-center`}
              >
                <h4 className="text-2xl font-display font-bold mb-2">
                  {service.pricing.type}
                </h4>
                <p className="text-cyan-100 font-body">
                  {service.pricing.note}
                </p>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
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
              {t.process.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neo-teal-500 to-cyan-500 text-white rounded-full font-display font-bold text-2xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t.why.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {t.why.reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
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

export default Services;
