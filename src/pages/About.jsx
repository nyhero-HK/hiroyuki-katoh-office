import { motion } from 'framer-motion';
import hiroPhoto from '../assets/Katoh2.jpeg';

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
          '加藤裕幸は、東海大学医学部整形外科学教室の准教授であり、国際関係担当として医学教育のグローバル化を推進しています。',
          '慶應義塾大学医学部を卒業後、整形外科医として臨床経験を積み、特に脊椎外科と慢性疼痛管理の分野で専門性を確立しました。',
          '2018年から2019年にかけて、カナダのToronto Western HospitalにてDr. Michael G. Fehlingsの指導の下、脊髄損傷の基礎研究に従事し、国際的な研究ネットワークを構築しました。',
          '現在は、臨床医療と医学教育の両面で活躍し、次世代の医療従事者の育成とAI技術を活用した教育イノベーションに取り組んでいます。',
        ],
      },
      education: {
        title: '学歴・研修',
        items: [
          {
            year: '2000年',
            title: '慶應義塾大学医学部 卒業',
            desc: '医学博士課程修了',
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
            period: '2021年-現在',
            role: '東海大学医学部整形外科学教室',
            title: '准教授・国際関係担当',
          },
          {
            period: '2013-2021年',
            role: '東海大学医学部整形外科学教室',
            title: '講師',
          },
          {
            period: '2011-2013年',
            role: '国立病院機構 埼玉病院',
            title: '整形外科医',
          },
          {
            period: '2008-2011年',
            role: '国立病院機構 村山医療センター',
            title: '整形外科医',
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
          'Dr. Hiroyuki Katoh is an Associate Professor in the Department of Orthopedic Surgery at Tokai University School of Medicine, where he also serves as Chair of International Relations, promoting the globalization of medical education.',
          'After graduating from Keio University School of Medicine, he gained extensive clinical experience as an orthopedic surgeon, establishing expertise particularly in spinal surgery and chronic pain management.',
          'From 2018 to 2019, he conducted fundamental research on spinal cord injury under the guidance of Dr. Michael G. Fehlings at Toronto Western Hospital, Canada, building an international research network.',
          'Currently, he is active in both clinical medicine and medical education, committed to training the next generation of healthcare professionals and developing educational innovations using AI technology.',
        ],
      },
      education: {
        title: 'Education & Training',
        items: [
          {
            year: '2000',
            title: 'MD, Keio University School of Medicine',
            desc: 'Doctor of Medicine',
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
            period: '2021-Present',
            role: 'Tokai University School of Medicine',
            title: 'Associate Professor & Chair of International Relations',
          },
          {
            period: '2013-2021',
            role: 'Tokai University School of Medicine',
            title: 'Assistant Professor',
          },
          {
            period: '2011-2013',
            role: 'National Hospital Organization Saitama Hospital',
            title: 'Orthopedic Surgeon',
          },
          {
            period: '2008-2011',
            role: 'National Hospital Organization Murayama Medical Center',
            title: 'Orthopedic Surgeon',
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
            <p className="text-2xl md:text-3xl text-gray-600 font-body">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="sticky top-24">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-neo-teal-500 to-cyan-500 rounded-3xl opacity-20 z-0"></div>
                  <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-xl border-t-4 border-neo-teal-500">
                    <img
                      src={hiroPhoto}
                      alt={language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-display font-bold text-gray-900">
                    {language === 'ja' ? '加藤裕幸' : 'Hiroyuki Katoh'}
                  </h3>
                  <p className="text-gray-600 font-body mt-1">MD, PhD</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gray-900">
                {t.bio.title}
              </h2>
              <div className="space-y-4">
                {t.bio.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 font-body text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gray-900">
                {t.education.title}
              </h2>
              <div className="space-y-6">
                {t.education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-4 border-neo-teal-500 pb-6"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-neo-teal-500 rounded-full"></div>
                    <div className="text-neo-teal-600 font-body font-bold text-sm mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-body">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gray-900">
                {t.experience.title}
              </h2>
              <div className="space-y-6">
                {t.experience.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-neo-coral-500 font-body font-bold text-sm mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm">{item.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
              {t.expertise.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {t.expertise.areas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-stone-50 rounded-2xl p-8 border-l-4 border-neo-teal-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {area.name}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-neo-teal-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neo-coral-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t.philosophy.title}
            </h2>
            <p className="text-2xl text-cyan-100 font-body">
              {t.philosophy.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {t.philosophy.content.map((paragraph, index) => (
              <p key={index} className="text-white font-body text-lg leading-relaxed text-center md:text-left">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Memberships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t.societies.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {t.societies.list.map((society, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center bg-stone-50 rounded-xl p-4 hover:bg-stone-100 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-neo-teal-500 rounded-full mr-4 flex-shrink-0"></div>
                <p className="text-gray-800 font-body">{society}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
