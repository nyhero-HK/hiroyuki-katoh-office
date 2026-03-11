import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = ({ language }) => {
  const content = {
    ja: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新日: 2026年1月4日',
      sections: [
        {
          title: '1. 収集する情報',
          content: `加藤事務所（以下「当事務所」）は、サービス提供のために以下の情報を収集します：

• 個人識別情報（氏名、メールアドレス、電話番号）
• 支払い情報（Stripe経由で安全に処理されます）
• サービス利用に関する情報
• 通信記録`,
        },
        {
          title: '2. 情報の利用目的',
          content: `収集した情報は以下の目的で利用します：

• サービスの提供および改善
• お客様との連絡・サポート
• 請求および支払い処理
• サービス利用状況の分析
• 法的義務の履行`,
        },
        {
          title: '3. 情報の共有',
          content: `当事務所は、以下の場合を除き、お客様の個人情報を第三者と共有しません：

• お客様の同意がある場合
• 法的義務がある場合
• サービス提供に必要な場合（Stripeなどの決済処理業者）
• 当事務所の権利保護に必要な場合`,
        },
        {
          title: '4. データセキュリティ',
          content: `当事務所は、お客様の個人情報を保護するために適切な技術的・組織的対策を講じています。決済情報はStripeによって安全に処理され、当事務所が直接保管することはありません。`,
        },
        {
          title: '5. お客様の権利',
          content: `お客様には以下の権利があります：

• 個人情報へのアクセス権
• 個人情報の訂正・削除を要求する権利
• データ処理の制限を要求する権利
• データポータビリティの権利
• 異議を申し立てる権利`,
        },
        {
          title: '6. Cookie',
          content: `当ウェブサイトはCookieを使用して、サービスの改善とユーザー体験の向上を図ります。ブラウザの設定でCookieを無効にすることができます。`,
        },
        {
          title: '7. お問い合わせ',
          content: `プライバシーに関するご質問は、hiroyuki.katoh.office@gmail.comまでお問い合わせください。`,
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 4, 2026',
      sections: [
        {
          title: '1. Information We Collect',
          content: `Katoh Office ("we", "our", or "us") collects the following information to provide our services:

• Personal identification information (name, email address, phone number)
• Payment information (securely processed through Stripe)
• Service usage information
• Communication records`,
        },
        {
          title: '2. How We Use Information',
          content: `We use collected information for the following purposes:

• Providing and improving our services
• Customer communication and support
• Billing and payment processing
• Analyzing service usage
• Complying with legal obligations`,
        },
        {
          title: '3. Information Sharing',
          content: `We do not share your personal information with third parties except in the following cases:

• With your consent
• When legally required
• When necessary for service provision (e.g., payment processors like Stripe)
• When necessary to protect our rights`,
        },
        {
          title: '4. Data Security',
          content: `We implement appropriate technical and organizational measures to protect your personal information. Payment information is securely processed by Stripe and is never directly stored by us.`,
        },
        {
          title: '5. Your Rights',
          content: `You have the following rights:

• Right to access your personal information
• Right to request correction or deletion
• Right to request restriction of data processing
• Right to data portability
• Right to object`,
        },
        {
          title: '6. Cookies',
          content: `Our website uses cookies to improve services and enhance user experience. You can disable cookies through your browser settings.`,
        },
        {
          title: '7. Contact Us',
          content: `For privacy-related inquiries, please contact us at hiroyuki.katoh.office@gmail.com`,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
        description={language === 'ja' ? '加藤裕幸事務所のプライバシーポリシー。個人情報の取り扱いについて。' : 'Katoh Office privacy policy. How we handle your personal information.'}
        path="/privacy-policy"
        language={language}
      />
      <div className="min-h-screen pt-20 bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neo-teal-500 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-cyan-100 font-body">{t.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 card-glow"
          >
            <div className="prose prose-lg max-w-none">
              {t.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 font-body whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicy;
