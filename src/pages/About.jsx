import { motion } from 'framer-motion';
import hiroPhoto from '../assets/Katoh2.jpeg';
import SEO from '../components/SEO';
import Monogram from '../components/Monogram';

const About = ({ language }) => {
  const content = {
    ja: {
      hero: {
        title: '事務所について',
        subtitle: '医療教育と整形外科の架け橋',
      },
      bio: {
        title: 'プロフィール',
        content: [
          '加藤裕幸は、東海大学医学部 基礎医学系医学教育学の教授です。',
          '慶應義塾大学医学部を卒業後、整形外科医として25年以上の臨床経験を積み、特に脊椎外科と慢性疼痛管理（脊髄刺激療法）の分野で専門性を確立しました。MedtronicおよびBoston ScientificのSCS領域においてKOLとして活動しています。',
          '2018年から2019年にかけて、カナダのToronto Western HospitalにてDr. Michael G. Fehlingsの指導の下、脊髄損傷の基礎研究に従事し、国際的な研究ネットワークを構築しました。',
          '現在は、臨床医療と医学教育の両面で活躍し、AI技術を活用した患者教育プラットフォーム（腰部脊柱管狭窄症の「SCS for LCS」、骨粗鬆症の「NO-POROSIS」）の開発や、次世代の医療従事者育成に取り組んでいます。',
        ],
      },
      education: {
        title: '学歴・研修',
        items: [
          {
            year: '2000年',
            title: '慶應義塾大学医学部 卒業',
            desc: '整形外科学教室に入局',
          },
          {
            year: '2012年',
            title: '博士（医学）取得',
            desc: '慶應義塾大学',
          },
          {
            year: '2018-2019年',
            title: 'Toronto Western Hospital 研究員',
            desc: 'Dr. Michael G. Fehlings研究室にて脊髄損傷の基礎研究',
          },
        ],
      },
      experience: {
        title: '職歴',
        items: [
          {
            period: '2008-2011年',
            role: '国立病院機構 村山医療センター',
            title: '整形外科医',
          },
          {
            period: '2011-2013年',
            role: '国立病院機構 埼玉病院',
            title: '整形外科医',
          },
          {
            period: '2013-2021年',
            role: '東海大学医学部整形外科学教室',
            title: '講師',
          },
          {
            period: '2021-2026年',
            role: '東海大学医学部整形外科学教室',
            title: '整形外科学 准教授・国際関係担当',
          },
          {
            period: '2026年4月-',
            role: '東海大学医学部 基礎医学系',
            title: '医学教育学 教授',
          },
        ],
      },
      expertise: {
        title: '専門分野',
        areas: [
          {
            name: '脊椎外科',
            desc: '脊椎変性疾患、脊髄損傷の診断と治療',
          },
          {
            name: '慢性疼痛管理',
            desc: '脊髄刺激療法を含む包括的疼痛管理',
          },
          {
            name: '医学教育',
            desc: 'AI技術を活用した教育方法の開発と実践',
          },
          {
            name: '国際医療連携',
            desc: 'グローバルな医療ネットワークの構築と運営',
          },
        ],
      },
      philosophy: {
        title: '理念',
        subtitle: '医療教育に対する想い',
        content: [
          '医療教育は、単なる知識の伝達ではなく、次世代の医療従事者が患者中心の医療を実践するための基盤を築くことだと考えています。',
          'テクノロジーの進化、特にAIの発展は、医学教育に革新的な可能性をもたらしています。しかし、技術はあくまでツールであり、人間の思考力、共感力、倫理観を育むことが何より重要です。',
          '国際的な視点を持ちながら、日本の医療の強みを活かし、グローバルに通用する医療人材の育成に貢献することを使命としています。',
        ],
      },
      societies: {
        title: '所属学会',
        list: [
          '日本整形外科学会',
          '日本脊椎脊髄病学会',
          '日本脊髄障害医学会（評議員）',
          '日本医学教育学会',
          '東日本整形災害外科学会（評議員）',
          'North American Spine Society',
          'International Spinal Cord Society',
          'Orthopedic Research Society',
        ],
      },
    },
    en: {
      hero: {
        title: 'About',
        subtitle: 'Bridging Medical Education and Orthopedic Surgery',
      },
      bio: {
        title: 'Biography',
        content: [
          'Dr. Hiroyuki Katoh is a Professor of Medical Education in the Department of Basic Medical Sciences at Tokai University School of Medicine.',
          'After graduating from Keio University School of Medicine, he gained 25+ years of clinical experience as an orthopedic surgeon, establishing expertise in spinal surgery and chronic pain management, particularly spinal cord stimulation (SCS) therapy. He serves as a Key Opinion Leader for Medtronic and Boston Scientific in the SCS field.',
          'From 2018 to 2019, he conducted fundamental research on spinal cord injury under the guidance of Dr. Michael G. Fehlings at Toronto Western Hospital, Canada, building an international research network.',
          'Currently, he is active in both clinical medicine and medical education, developing AI-powered patient education platforms — SCS for LCS (lumbar canal stenosis) and NO-POROSIS (osteoporosis) — and training the next generation of healthcare professionals.',
        ],
      },
      education: {
        title: 'Education & Training',
        items: [
          {
            year: '2000',
            title: 'MD, Keio University School of Medicine',
            desc: 'Joined the Department of Orthopaedic Surgery',
          },
          {
            year: '2012',
            title: 'PhD in Medicine',
            desc: 'Keio University',
          },
          {
            year: '2018-2019',
            title: 'Research Fellow, Toronto Western Hospital',
            desc: 'Spinal cord injury research under Dr. Michael G. Fehlings',
          },
        ],
      },
      experience: {
        title: 'Professional Experience',
        items: [
          {
            period: '2008-2011',
            role: 'National Hospital Organization Murayama Medical Center',
            title: 'Orthopedic Surgeon',
          },
          {
            period: '2011-2013',
            role: 'National Hospital Organization Saitama Hospital',
            title: 'Orthopedic Surgeon',
          },
          {
            period: '2013-2021',
            role: 'Tokai University School of Medicine',
            title: 'Assistant Professor',
          },
          {
            period: '2021-2026',
            role: 'Tokai University School of Medicine',
            title: 'Associate Professor, Orthopedic Surgery & Chair of International Relations',
          },
          {
            period: '2026-',
            role: 'Tokai University School of Medicine, Dept. of Basic Medical Sciences',
            title: 'Professor of Medical Education',
          },
        ],
      },
      expertise: {
        title: 'Areas of Expertise',
        areas: [
          {
            name: 'Spinal Surgery',
            desc: 'Diagnosis and treatment of degenerative spine diseases and spinal cord injury',
          },
          {
            name: 'Chronic Pain Management',
            desc: 'Comprehensive pain management including spinal cord stimulation therapy',
          },
          {
            name: 'Medical Education',
            desc: 'Development and implementation of AI-enhanced educational methods',
          },
          {
            name: 'International Medical Collaboration',
            desc: 'Building and managing global healthcare networks',
          },
        ],
      },
      philosophy: {
        title: 'Philosophy',
        subtitle: 'Vision for Medical Education',
        content: [
          'I believe medical education is not merely about transferring knowledge, but about building a foundation for the next generation of healthcare professionals to practice patient-centered care.',
          'Technological advancement, particularly in AI, brings revolutionary possibilities to medical education. However, technology is merely a tool; what matters most is cultivating human critical thinking, empathy, and ethics.',
          'My mission is to contribute to training healthcare professionals who can compete globally, while maintaining an international perspective and leveraging the strengths of Japanese healthcare.',
        ],
      },
      societies: {
        title: 'Professional Memberships',
        list: [
          'Japanese Orthopaedic Association',
          'Japanese Society for Spine Surgery and Related Research',
          'Japan Medical Society of Spinal Cord Lesion (Board Member)',
          'Japan Society for Medical Education',
          'Eastern Japan Association of Orthopaedics and Traumatology (Board Member)',
          'North American Spine Society',
          'International Spinal Cord Society',
          'Orthopedic Research Society',
        ],
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
        title={language === 'ja' ? '事務所について' : 'About'}
        description={language === 'ja' ? '加藤裕幸 — 東海大学医学部 基礎医学系医学教育学 教授。25年以上の整形外科・脊椎外科の臨床経験。' : 'Hiroyuki Katoh — Professor of Medical Education, Tokai University School of Medicine. 25+ years in orthopedic surgery.'}
        path="/about"
        language={language}
      />
      <div className="min-h-screen">
        {/* ——— Masthead ——— */}
        <section className="relative bg-washi-50 bg-ruled overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="section-label mb-6">{t.hero.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.2]">
                <span className="inline-block">{t.hero.title}</span>
              </h1>
            </motion.div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rule-double"></div>
          </div>
        </section>

        {/* ——— §1 Biography ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="md:col-span-4"
              >
                <div className="md:sticky md:top-24 max-w-sm mx-auto md:mx-0">
                  <figure className="plate relative">
                    <img
                      src={hiroPhoto}
                      alt={language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                      className="w-full h-auto"
                    />
                    <figcaption className="fig-caption pt-3 px-1">
                      {language === 'ja' ? '加藤裕幸 — MD, PhD' : 'Hiroyuki Katoh — MD, PhD'}
                    </figcaption>
                    <span className="absolute -top-4 -right-4 bg-washi-50 border border-ink-300 px-3 py-2" aria-hidden="true">
                      <Monogram className="text-2xl" />
                    </span>
                  </figure>
                </div>
              </motion.div>

              <motion.div
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="md:col-span-8"
              >
                <p className="section-label mb-4">§1</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{t.bio.title}</h2>
                <div className="space-y-5 max-w-2xl">
                  {t.bio.content.map((paragraph, index) => (
                    <p key={index} className="text-ink-700 font-body text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ——— §2 Education & Training ——— */}
        <section className="py-24 bg-white border-y border-washi-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">§2</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.education.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y divide-washi-300 border-y border-washi-300"
            >
              {t.education.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={rise}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 md:items-baseline"
                >
                  <p className="md:col-span-3 font-display italic text-2xl text-shu-500">{item.year}</p>
                  <h3 className="md:col-span-4 text-xl font-display font-bold text-ink-900">{item.title}</h3>
                  <p className="md:col-span-5 text-ink-600 font-body text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— §3 Professional Experience ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">§3</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.experience.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="divide-y divide-washi-300 border-y border-washi-300"
            >
              {t.experience.items.map((item) => (
                <motion.div
                  key={`${item.period}-${item.title}`}
                  variants={rise}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6 md:items-baseline"
                >
                  <p className="md:col-span-3 font-display italic text-2xl text-shu-500">{item.period}</p>
                  <h3 className="md:col-span-4 text-xl font-display font-bold text-ink-900">{item.title}</h3>
                  <p className="md:col-span-5 text-ink-600 font-body text-base leading-relaxed">{item.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— §4 Areas of Expertise ——— */}
        <section className="py-24 bg-white border-y border-washi-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <p className="section-label mb-4">§4</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.expertise.title}</h2>
            </motion.div>

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl"
            >
              {t.expertise.areas.map((area, index) => (
                <motion.li key={area.name} variants={rise} className="flex gap-5 border-t-2 border-ink-900 pt-6">
                  <span className="font-display italic text-2xl text-washi-400 leading-none select-none" aria-hidden="true">
                    {['i', 'ii', 'iii', 'iv'][index]}.
                  </span>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-ink-900">{area.name}</h3>
                    <p className="text-ink-600 font-body leading-relaxed">{area.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ——— §5 Philosophy — dark band ——— */}
        <section className="relative py-24 bg-ink-900 overflow-hidden">
          <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
              <p className="font-body text-sm font-bold tracking-label uppercase text-shu-300 mb-4">§5 {t.philosophy.subtitle}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-washi-50">
                <span className="inline-block">{t.philosophy.title}</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {t.philosophy.content.map((paragraph, index) => (
                <motion.p key={index} variants={rise} className="text-washi-100 font-body text-lg leading-relaxed">
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— §6 Professional Memberships ——— */}
        <section className="py-24 bg-washi-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >
              <p className="section-label mb-4">§6</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t.societies.title}</h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl"
            >
              {t.societies.list.map((society, index) => (
                <motion.div key={index} variants={rise} className="flex items-baseline">
                  <span className="shrink-0 text-shu-500 font-display mr-3 select-none" aria-hidden="true">¶</span>
                  <p className="text-ink-700 font-body leading-relaxed">{society}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="rule-double mt-16"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
