import { motion } from 'framer-motion';
import logo from '../assets/Logo small.png';
import SEO from '../components/SEO';

const Support = ({ language }) => {
  const content = {
    ja: {
      title: 'お問い合わせ',
      subtitle: 'ご質問やご相談がございましたら、お気軽にお問い合わせください。',
      sendEmail: 'メールで問い合わせる',
      contact: {
        title: '連絡先情報',
        email: 'メールアドレス',
        response: '通常24時間以内に返信いたします',
      },
      faq: {
        title: 'よくある質問',
        q1: 'サービスの料金はどのように決まりますか？',
        a1: 'サービス内容と期間に応じて個別にお見積りいたします。まずは無料相談からお気軽にお問い合わせください。',
        q2: 'サブスクリプションの解約はいつでも可能ですか？',
        a2: 'はい、サブスクリプションはいつでも解約可能です。解約手続きは簡単で、解約月の末日までサービスをご利用いただけます。',
        q3: '返金ポリシーについて教えてください',
        a3: 'サービス開始後7日以内であれば、全額返金いたします。詳細は利用規約をご確認ください。',
      },
    },
    en: {
      title: 'Contact & Support',
      subtitle: 'Have questions or need consultation? Feel free to reach out to us.',
      sendEmail: 'Send us an email',
      contact: {
        title: 'Contact Information',
        email: 'Email',
        response: 'We typically respond within 24 hours',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'How is the service pricing determined?',
        a1: 'Pricing is customized based on service content and duration. Please start with a free consultation to discuss your needs.',
        q2: 'Can I cancel my subscription anytime?',
        a2: 'Yes, you can cancel your subscription at any time. The process is simple, and you can use the service until the end of your billing period.',
        q3: 'What is your refund policy?',
        a3: 'We offer a full refund within 7 days of service start. Please refer to our Terms of Service for details.',
      },
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === 'ja' ? 'お問い合わせ' : 'Contact & Support'}
        description={language === 'ja' ? '加藤裕幸事務所へのお問い合わせ。医療教育コンサルティング、患者教育プラットフォーム導入のご相談。' : 'Contact Katoh Office for medical education consulting and patient education platform inquiries.'}
        path="/support"
        language={language}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-50 via-cyan-50/30 to-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">{t.title}</span>
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body font-semibold mb-1">{t.contact.email}</div>
                    <a href="mailto:hiroyuki.katoh.office@gmail.com" className="text-lg font-body hover:underline">
                      hiroyuki.katoh.office@gmail.com
                    </a>
                    <p className="text-sm text-cyan-100 mt-2">{t.contact.response}</p>
                  </div>
                </div>
                <a
                  href="mailto:hiroyuki.katoh.office@gmail.com"
                  className="mt-6 block w-full px-8 py-4 bg-white text-neo-teal-600 rounded-xl font-body font-semibold text-center hover:bg-cyan-50 transition-all transform hover:scale-105 card-glow"
                >
                  {t.sendEmail}
                </a>
              </div>
            </motion.div>

            {/* Office Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-stone-50 rounded-2xl p-6 card-glow">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={logo} alt="Katoh Office Logo" className="w-12 h-12" />
                  <div>
                    <div className="font-display font-bold text-gray-900">加藤事務所</div>
                    <div className="text-sm text-gray-600 font-body">Katoh Office</div>
                  </div>
                </div>
                <p className="text-gray-600 font-body text-sm">
                  {language === 'ja'
                    ? '医療教育コンサルティングと教育ソフトウェアを提供しています。'
                    : 'Providing medical education consulting and educational software.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              {t.faq.title}
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 card-glow">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t.faq.q1}</h3>
                <p className="text-gray-600 font-body">{t.faq.a1}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 card-glow">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t.faq.q2}</h3>
                <p className="text-gray-600 font-body">{t.faq.a2}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 card-glow">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t.faq.q3}</h3>
                <p className="text-gray-600 font-body">{t.faq.a3}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Support;
