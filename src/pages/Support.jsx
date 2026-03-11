import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/Logo small.png';
import SEO from '../components/SEO';

const Support = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const content = {
    ja: {
      title: 'お問い合わせ',
      subtitle: 'ご質問やご相談がございましたら、お気軽にお問い合わせください。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        submit: '送信する',
      },
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
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
      },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend)
    console.log('Form submitted:', formData);
    alert(language === 'ja' ? 'お問い合わせありがとうございます！' : 'Thank you for contacting us!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-stone-50 rounded-2xl p-8 card-glow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-semibold text-gray-700 mb-2">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neo-teal-500 focus:border-transparent transition-all font-body"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-semibold text-gray-700 mb-2">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neo-teal-500 focus:border-transparent transition-all font-body"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-body font-semibold text-gray-700 mb-2">
                      {t.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neo-teal-500 focus:border-transparent transition-all font-body"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-semibold text-gray-700 mb-2">
                      {t.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neo-teal-500 focus:border-transparent transition-all font-body resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-neo-teal-500 text-white rounded-xl font-body font-semibold hover:bg-neo-teal-600 transition-all transform hover:scale-105 card-glow"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">{t.contact.title}</h2>

                <div className="bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-2xl p-8 text-white mb-6">
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
                </div>

                <div className="bg-stone-50 rounded-2xl p-6">
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
