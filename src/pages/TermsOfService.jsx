import SEO from '../components/SEO';

const TermsOfService = ({ language }) => {
  const content = {
    ja: {
      title: '利用規約',
      lastUpdated: '最終更新日: 2026年1月4日',
      sections: [
        {
          title: '1. 利用規約への同意',
          content: `本サービスを利用することで、お客様は本利用規約に同意したものとみなされます。同意いただけない場合は、サービスの利用をお控えください。`,
        },
        {
          title: '2. サービス内容',
          content: `加藤事務所は以下のサービスを提供します：

• 医療教育コンサルティング
• 教育ソフトウェアの提供
• その他関連サービス

サービス内容は予告なく変更される場合があります。`,
        },
        {
          title: '3. アカウント',
          content: `お客様は以下に同意するものとします：

• 正確な情報を提供すること
• アカウント情報を最新の状態に保つこと
• アカウントのセキュリティを保護すること
• 不正利用を直ちに報告すること`,
        },
        {
          title: '4. 支払いと料金',
          content: `• 料金はサービス内容に応じて個別に設定されます
• 支払いはStripeを通じて処理されます
• サブスクリプションは自動更新されます
• 価格は予告なく変更される場合があります`,
        },
        {
          title: '5. キャンセルと返金',
          content: `• サブスクリプションはいつでもキャンセル可能です
• サービス開始後7日以内のキャンセルには全額返金いたします
• 7日経過後のキャンセルには返金はありません
• 一部サービスには異なるポリシーが適用される場合があります`,
        },
        {
          title: '6. 知的財産権',
          content: `当サービスに関するすべてのコンテンツ、ソフトウェア、デザインは加藤事務所または そのライセンサーの財産です。無断での複製、配布、修正は禁止されています。`,
        },
        {
          title: '7. 免責事項',
          content: `当サービスは「現状有姿」で提供されます。当事務所は、サービスの正確性、信頼性、完全性について保証しません。法律で認められる範囲において、当事務所は一切の責任を負いません。`,
        },
        {
          title: '8. 利用規約の変更',
          content: `当事務所は、本利用規約をいつでも変更できます。重要な変更については、メールまたはウェブサイトにて通知します。`,
        },
        {
          title: '9. 準拠法と管轄',
          content: `本利用規約は日本法に準拠し、東京地方裁判所を専属的合意管轄裁判所とします。`,
        },
        {
          title: '10. お問い合わせ',
          content: `本利用規約に関するご質問は、hiroyuki.katoh.office@gmail.comまでお問い合わせください。`,
        },
      ],
    },
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 4, 2026',
      sections: [
        {
          title: '1. Agreement to Terms',
          content: `By using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`,
        },
        {
          title: '2. Services',
          content: `Katoh Office provides the following services:

• Medical education consulting
• Educational software provision
• Other related services

Service content may change without prior notice.`,
        },
        {
          title: '3. Account',
          content: `You agree to:

• Provide accurate information
• Keep your account information current
• Maintain account security
• Immediately report any unauthorized use`,
        },
        {
          title: '4. Payment and Fees',
          content: `• Fees are determined based on service content
• Payments are processed through Stripe
• Subscriptions auto-renew
• Prices may change without notice`,
        },
        {
          title: '5. Cancellation and Refunds',
          content: `• Subscriptions can be cancelled anytime
• Full refund available within 7 days of service start
• No refunds after 7 days
• Some services may have different policies`,
        },
        {
          title: '6. Intellectual Property',
          content: `All content, software, and designs related to our services are the property of Katoh Office or its licensors. Unauthorized reproduction, distribution, or modification is prohibited.`,
        },
        {
          title: '7. Disclaimer',
          content: `Our services are provided "as is". We do not guarantee the accuracy, reliability, or completeness of our services. To the extent permitted by law, we disclaim all liability.`,
        },
        {
          title: '8. Changes to Terms',
          content: `We may modify these Terms of Service at any time. Important changes will be communicated via email or our website.`,
        },
        {
          title: '9. Governing Law and Jurisdiction',
          content: `These Terms are governed by Japanese law. The Tokyo District Court has exclusive jurisdiction.`,
        },
        {
          title: '10. Contact',
          content: `For questions about these Terms, please contact us at hiroyuki.katoh.office@gmail.com`,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      <SEO
        title={language === 'ja' ? '利用規約' : 'Terms of Service'}
        description={language === 'ja' ? '加藤裕幸事務所のサービス利用規約。' : 'Katoh Office terms of service.'}
        path="/terms-of-service"
        language={language}
      />
      <div className="min-h-screen bg-ground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          {/* ——— Document header ——— */}
          <header className="mb-12">
            <p className="section-label mb-6">
              {language === 'ja' ? '加藤事務所 — 公式文書' : 'Katoh Office — Official Document'}
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold leading-snug mb-5">
              {t.title}
            </h1>
            <p className="text-sm text-content-4 font-body">{t.lastUpdated}</p>
            <div className="rule-double mt-8"></div>
          </header>

          {/* ——— Articles ——— */}
          <div className="divide-y divide-line">
            {t.sections.map((section, index) => (
              <article key={index} className="py-10 first:pt-0 last:pb-0">
                <h2 className="text-2xl font-display font-bold text-content mb-5">
                  {section.title}
                </h2>
                <div className="text-content-2 font-body text-base whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          {/* ——— Document close ——— */}
          <div className="rule-double mt-12"></div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
