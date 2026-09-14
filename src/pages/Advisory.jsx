import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';

const CONTACT_EMAIL = 'hiroyuki.katoh.office@gmail.com';

const Advisory = ({ language }) => {
  const content = {
    ja: {
      hero: {
        label: '脊椎・脊髄外科と脊髄刺激療法の臨床から、日本市場の意思決定へ',
        title: 'アドバイザリー',
        lede: [
          '日本の整形外科・脊椎外科の現場で、新しい医療機器や治療法が実際にどう採用され、どこで止まるのか。その判断は、論文でも償還点数でもなく、現場の術者の納得で決まります。',
          '加藤裕幸事務所では、脊椎・脊髄外科医として25年、脊髄刺激療法の植込みと管理を日常的に行う立場から、医療機器企業・投資家・研究機関に対して助言を行っています。',
        ],
      },
      topics: {
        title: 'ご相談いただく領域',
        items: [
          { name: '臨床採用の実像', desc: '日本の術者が機器を選ぶ／選ばない理由、導入が止まる工程' },
          { name: '脊髄刺激療法（SCS）', desc: '適応判断、トライアルから植込みまでの流れ、抜去・再置換の現実' },
          { name: '腰部脊柱管狭窄症・慢性腰痛', desc: '日本での治療の段階（ラダー）と、その中での位置づけ' },
          { name: '医師教育・プロクタリング設計', desc: '新しい手技をどう伝え、どう定着させるか' },
          { name: '学会と普及', desc: '日本整形外科学会・日本脊椎脊髄病学会・日本脊髄障害医学会が果たす役割' },
          { name: '医学教育・評価設計', desc: 'カリキュラム、コンピテンシー評価、教育プログラム評価' },
        ],
      },
      decline: {
        title: 'お引き受けできないこと',
        lede: '誠実に申し上げます。以下はお引き受けしません。',
        items: [
          '所属機関の非公開データ（患者情報・学生情報・IR室が扱う学内データ）に関わるご相談',
          '特定製品の推奨・比較を、根拠なく断定する形での発言',
          '保険償還区分や材料価格の制度解釈（専門外のため、制度の専門家をご紹介します）',
          '守秘義務を負う他社との関係に抵触するご相談',
        ],
      },
      formats: {
        title: '形式',
        rows: [
          ['専門家インタビュー', '60分・オンライン。専門家ネットワーク経由も可'],
          ['アドバイザリー契約', '継続的な助言。期間・回数を定めて'],
          ['教育プログラム設計', '医師向け研修・患者教育コンテンツの監修'],
          ['講演', '学術集会・社内勉強会'],
        ],
        note: 'ご相談は無償で伺います。費用は内容が定まってからご提示します。',
      },
      coi: {
        title: '利益相反（COI）',
        paragraphs: [
          '透明性のため公開します。加藤裕幸は、脊髄刺激療法および骨粗鬆症領域の複数企業から、講演謝金、患者教育サイトへの協賛、および所属医療機関を通じた機器使用に関する取り決めに基づく対価を受けています。',
          '助言にあたっては、特定製品の推奨は行わず、すべてのご依頼について、判断に影響しうる関係をあらかじめ開示します。',
        ],
      },
      cta: {
        label: 'ご相談・お見積り',
        office: '加藤裕幸事務所',
      },
    },
    en: {
      hero: {
        label: 'From the operating room to decisions about the Japanese market',
        title: 'Advisory',
        lede: [
          'Whether a new device or technique takes hold in Japanese spine practice is rarely settled by the published evidence or by the reimbursement code. It is settled by whether the surgeon in the room is convinced.',
          'Hiroyuki Katoh advises medical device companies, investors and research organisations from that position — twenty-five years as a spine and spinal cord surgeon, implanting and managing spinal cord stimulation systems as part of routine practice.',
        ],
      },
      topics: {
        title: 'What I am asked about',
        items: [
          { name: 'How adoption actually works', desc: 'Why Japanese surgeons choose a device, and where adoption stalls' },
          { name: 'Spinal cord stimulation', desc: 'Patient selection, trial to implant, and the reality of explant and revision' },
          { name: 'Lumbar canal stenosis and chronic low back pain', desc: 'The treatment ladder as practised in Japan' },
          { name: 'Physician training and proctoring', desc: 'How a technique is taught so that it sticks' },
          { name: 'Societies and diffusion', desc: 'The role of JOA, JSSR and JASCOL' },
          { name: 'Medical education', desc: 'Curriculum, competency-based assessment, programme evaluation' },
        ],
      },
      decline: {
        title: 'What I decline',
        lede: '',
        items: [
          'Anything touching confidential data held by my institution — patients, students, institutional research',
          'Endorsing or ranking a specific product beyond what the evidence supports',
          'Interpreting reimbursement categories or device pricing policy; I will refer you to someone who does this properly',
          'Work that conflicts with confidentiality obligations I already hold',
        ],
      },
      formats: {
        title: 'How engagements work',
        rows: [
          ['Expert interview', '60 minutes, online. Expert networks welcome'],
          ['Advisory agreement', 'Ongoing counsel over a defined term'],
          ['Programme design', 'Physician training and patient-education content review'],
          ['Speaking', 'Academic meetings and internal sessions'],
        ],
        note: 'An initial conversation is free of charge. Fees follow once the scope is clear.',
      },
      coi: {
        title: 'Disclosure',
        paragraphs: [
          'For transparency: I receive speaking honoraria, sponsorship of my patient-education websites, and compensation arising from device-use arrangements held by my clinical institution, from several companies active in neuromodulation and osteoporosis.',
          'I do not endorse specific products, and I disclose any relationship that could bear on my advice before an engagement begins.',
        ],
      },
      cta: {
        label: 'Enquiries',
        office: 'Hiroyuki Katoh Office',
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
        title={language === 'ja' ? 'アドバイザリー' : 'Advisory'}
        description={
          language === 'ja'
            ? '脊椎・脊髄外科と脊髄刺激療法の臨床から、医療機器企業・投資家・研究機関に助言します。日本での臨床採用、医師教育、評価設計。'
            : 'Advisory for medical device companies, investors and research organisations — clinical adoption in Japan, spinal cord stimulation, physician training and assessment design.'
        }
        path="/advisory"
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
              <p className="section-label mb-6">{t.hero.label}</p>
              <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.2] mb-8">
                <span className="inline-block">{t.hero.title}</span>
              </h1>
              {t.hero.lede.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-lg text-content-3 font-body leading-relaxed mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— §1 ご相談いただく領域 ——— */}
        <section className="py-24 bg-ground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§1</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">{t.topics.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {t.topics.items.map((item, index) => (
                <motion.div key={item.name} variants={rise} className="rule-fine pt-5">
                  <h3 className="text-xl font-display font-semibold text-content mb-3">
                    <span className="font-display italic text-content-4 mr-3 select-none" aria-hidden="true">
                      {['i', 'ii', 'iii', 'iv', 'v', 'vi'][index]}.
                    </span>
                    {item.name}
                  </h3>
                  <p className="text-content-3 font-body text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— §2 お引き受けできないこと ——— */}
        <section className="py-24 bg-surface border-y border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">§2</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">{t.decline.title}</h2>
              {t.decline.lede ? (
                <p className="text-lg text-content-3 font-body leading-relaxed">{t.decline.lede}</p>
              ) : null}
            </motion.div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl space-y-3"
            >
              {t.decline.items.map((item) => (
                <motion.li
                  key={item.slice(0, 24)}
                  variants={rise}
                  className="flex items-start text-base text-content-2 font-body leading-relaxed"
                >
                  <span className="text-accent mr-2.5 select-none" aria-hidden="true">—</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ——— §3 形式 ——— */}
        <section className="py-24 bg-ground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">§3</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">{t.formats.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl border-t-2 border-line-strong"
            >
              {t.formats.rows.map(([name, desc]) => (
                <motion.div
                  key={name}
                  variants={rise}
                  className="grid grid-cols-1 md:grid-cols-12 border-b border-line py-6 md:gap-8"
                >
                  <div className="md:col-span-4 text-xl font-display font-semibold text-content mb-2 md:mb-0">
                    {name}
                  </div>
                  <p className="md:col-span-8 text-content-3 font-body text-base leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mt-8 text-lg text-content-3 font-body leading-relaxed"
            >
              {t.formats.note}
            </motion.p>
          </div>
        </section>

        {/* ——— §4 利益相反 ——— */}
        <section className="py-24 bg-surface border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <p className="section-label mb-4">§4</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">{t.coi.title}</h2>
              {t.coi.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base text-content-2 font-body leading-relaxed mb-5 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— Contact — the one lit plate on this page ——— */}
        <section className="on-plate relative py-24 bg-ground overflow-hidden">
          <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="block mb-8" aria-hidden="true">
                <Monogram dark className="text-5xl" />
              </span>
              <p className="section-label mb-6">{t.cta.label}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block font-display font-semibold text-2xl md:text-3xl text-content border-b-2 border-accent pb-2 hover:text-accent transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-8 text-content-3 font-body text-base">{t.cta.office}</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Advisory;
