/**
 * SEO Component — Sets per-page title and meta description.
 * Uses React 19 native <title> and <meta> hoisting (no Helmet needed).
 */

const SITE_NAME_JA = '加藤裕幸事務所';
const SITE_NAME_EN = 'Katoh Office';
const SITE_URL = 'https://katoh-office-site.pages.dev';

const SEO = ({ title, description, path = '/', language = 'ja' }) => {
  const siteName = language === 'ja' ? SITE_NAME_JA : SITE_NAME_EN;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={language === 'ja' ? 'ja_JP' : 'en_US'} />
      <meta property="og:site_name" content={`${SITE_NAME_JA} | ${SITE_NAME_EN}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default SEO;
