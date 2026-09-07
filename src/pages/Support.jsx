import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';

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

  const rise = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
  ];

  return (
    <>
      <SEO
        title={language === 'ja' ? 'お問い合わせ' : 'Contact & Support'}
        description={language === 'ja' ? '加藤裕幸事務所へのお問い合わせ。医療教育コンサルティング、患者教育プラットフォーム導入のご相談。' : 'Contact Katoh Office for medical education consulting and patient education platform inquiries.'}
        path="/support"
        language={language}
      />
      <div className="min-h-screen">
        {/* ——— Hero ——— */}
        <section className="bg-ground bg-ruled">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="section-label mb-6">{t.contact.title}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold leading-snug mb-6">
                {t.title}
              </h1>
              <p className="text-lg text-content-3 font-body leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— Contact ——— */}
        <section className="py-20 bg-ground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Email — the centerpiece */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative panel p-10 md:p-12 text-center mb-8"
            >
              <span
                className="absolute -top-4 -right-4 bg-ground border border-line px-3 py-2"
                aria-hidden="true"
              >
                <Monogram className="text-2xl" />
              </span>
              <p className="section-label mb-6">{t.contact.email}</p>
              <a
                href="mailto:hiroyuki.katoh.office@gmail.com"
                className="link-editorial inline-block font-display font-semibold text-xl sm:text-2xl break-all mb-4"
              >
                hiroyuki.katoh.office@gmail.com
              </a>
              <p className="text-sm text-content-4 font-body leading-relaxed mb-8">{t.contact.response}</p>
              <a href="mailto:hiroyuki.katoh.office@gmail.com" className="btn-ink text-lg">
                {t.sendEmail}
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Office */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-t border-line pt-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Monogram className="text-3xl" />
                <div>
                  <div className="font-display font-semibold text-content">加藤裕幸事務所</div>
                  <div className="text-sm text-content-4 font-body">Katoh Office</div>
                </div>
              </div>
              <p className="text-content-3 font-body text-sm leading-relaxed">
                {language === 'ja'
                  ? '医療教育コンサルティングと教育ソフトウェアを提供しています。'
                  : 'Providing medical education consulting and educational software.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section className="py-20 bg-surface border-t border-line">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="section-label mb-4">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">{t.faq.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y divide-line border-y border-line"
            >
              {faqs.map((item, index) => (
                <motion.div key={index} variants={rise} className="flex gap-6 py-8">
                  <span
                    className="shrink-0 font-display italic text-2xl text-content-4 leading-none select-none"
                    aria-hidden="true"
                  >
                    {['i', 'ii', 'iii'][index]}.
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-content mb-3">{item.q}</h3>
                    <p className="text-content-3 font-body leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
