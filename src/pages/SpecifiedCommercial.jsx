import SEO from '../components/SEO';

const SpecifiedCommercial = ({ language }) => {
  const content = {
    ja: {
      title: '特定商取引法に基づく表記',
      lastUpdated: '最終更新日: 2026年1月4日',
      sections: [
        {
          label: '事業者名',
          value: '加藤事務所',
        },
        {
          label: '運営責任者',
          value: '加藤裕幸',
          subtext: '（Hiroyuki Katoh）',
        },
        {
          label: '所在地',
          value: '〒XXX-XXXX',
          subtext: '※詳細な住所情報は、お問い合わせに応じて遅滞なく開示いたします',
        },
        {
          label: '電話番号',
          value: '※お問い合わせはメールにて承ります',
        },
        {
          label: 'メールアドレス',
          value: 'hiroyuki.katoh.office@gmail.com',
        },
        {
          label: 'ウェブサイトURL',
          value: 'https://katoh-office-site.pages.dev/',
        },
        {
          label: '販売価格',
          value: '各サービスページに表示',
          subtext: '消費税込みの価格を表示しています',
        },
        {
          label: '支払方法',
          value: 'クレジットカード（Stripe決済）',
          subtext: '対応カード：Visa、Mastercard、American Express、JCB等',
        },
        {
          label: '支払時期',
          value: `• 一時払い：サービス申込時
• サブスクリプション：毎月の更新日`,
        },
        {
          label: 'サービス提供時期',
          value: '入金確認後、速やかに提供いたします',
          subtext: '具体的な提供時期は各サービスにより異なります',
        },
        {
          label: 'キャンセル・返金について',
          value: `• サービス開始後7日以内：全額返金
• 7日経過後：返金不可
• サブスクリプション：いつでも解約可能（次回更新日以降の課金停止）`,
        },
        {
          label: '動作環境',
          value: `• 最新のWebブラウザ（Chrome、Safari、Firefox、Edge）
• インターネット接続環境
• ソフトウェアによっては追加要件あり`,
        },
      ],
    },
    en: {
      title: 'Specified Commercial Transaction Act',
      lastUpdated: 'Last Updated: January 4, 2026',
      sections: [
        {
          label: 'Business Name',
          value: 'Katoh Office (加藤事務所)',
        },
        {
          label: 'Operating Manager',
          value: 'Hiroyuki Katoh',
          subtext: '(加藤裕幸)',
        },
        {
          label: 'Address',
          value: 'Japan',
          subtext: '※Detailed address information will be disclosed upon request without delay',
        },
        {
          label: 'Phone',
          value: '※Please contact us via email',
        },
        {
          label: 'Email',
          value: 'hiroyuki.katoh.office@gmail.com',
        },
        {
          label: 'Website URL',
          value: 'https://katoh-office-site.pages.dev/',
        },
        {
          label: 'Pricing',
          value: 'Displayed on each service page',
          subtext: 'All prices include applicable taxes',
        },
        {
          label: 'Payment Methods',
          value: 'Credit Card (Stripe)',
          subtext: 'Accepted: Visa, Mastercard, American Express, JCB, etc.',
        },
        {
          label: 'Payment Timing',
          value: `• One-time: At service application
• Subscription: Monthly renewal date`,
        },
        {
          label: 'Service Delivery',
          value: 'Promptly after payment confirmation',
          subtext: 'Specific timing varies by service',
        },
        {
          label: 'Cancellation & Refunds',
          value: `• Within 7 days of service start: Full refund
• After 7 days: No refund
• Subscription: Cancel anytime (stops next renewal)`,
        },
        {
          label: 'System Requirements',
          value: `• Latest web browsers (Chrome, Safari, Firefox, Edge)
• Internet connection
• Additional requirements may apply for some software`,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === 'ja' ? '特定商取引法に基づく表記' : 'Specified Commercial Transaction Act'}
        description={language === 'ja' ? '特定商取引法に基づく表記。加藤事務所の事業者情報。' : 'Disclosure under the Specified Commercial Transaction Act.'}
        path="/specified-commercial-transaction"
        language={language}
      />
      <div className="min-h-screen bg-ground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          {/* ——— Document header ——— */}
          <header className="mb-12">
            <p className="section-label mb-6">
              {language === 'ja' ? '加藤事務所 — 公式文書' : 'Katoh Office — Official Document'}
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold leading-snug mb-5">
              {t.title}
            </h1>
            <p className="text-sm text-content-4 font-body">{t.lastUpdated}</p>
            <div className="rule-double mt-8"></div>
          </header>

          {/* ——— Disclosure table ——— */}
          <dl className="divide-y divide-line border-y border-line">
            {t.sections.map((section, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-6">
                <dt className="sm:col-span-4 font-body font-bold text-content-4 text-sm leading-relaxed pt-0.5">
                  {section.label}
                </dt>
                <dd className="sm:col-span-8">
                  <p className="text-content-2 font-body text-base whitespace-pre-line leading-relaxed">
                    {section.value}
                  </p>
                  {section.subtext && (
                    <p className="text-sm text-content-4 font-body mt-2 leading-relaxed">
                      {section.subtext}
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {/* ——— Additional notes ——— */}
          <div className="mt-12 border-l-2 border-accent pl-6">
            <h2 className="text-lg font-display font-semibold text-content mb-3">
              {language === 'ja' ? 'お問い合わせ' : 'Contact'}
            </h2>
            <p className="text-content-3 font-body text-base leading-relaxed">
              {language === 'ja'
                ? '本表記に関するご質問や詳細情報のご要望は、hiroyuki.katoh.office@gmail.comまでお問い合わせください。'
                : 'For questions about this disclosure or to request detailed information, please contact us at hiroyuki.katoh.office@gmail.com'}
            </p>
          </div>

          {/* ——— Document close ——— */}
          <div className="rule-double mt-12"></div>
        </div>
      </div>
    </>
  );
};

export default SpecifiedCommercial;
