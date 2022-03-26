const mongodb = {
  SUAMUSICA_SMV_MONGODB_URI: process.env.SUAMUSICA_SMV_MONGODB_URI,
  SUAMUSICA_SMV_MONGODB_COLLECTION: process.env.SUAMUSICA_SMV_MONGODB_COLLECTION
};

const recaptchaV3 = {
  SUAMUSICA_SMV_RECAPTCHA_V3_SITE_KEY:
    process.env.SUAMUSICA_SMV_RECAPTCHA_V3_SITE_KEY,
  SUAMUSICA_SMV_RECAPTCHA_V3_SECRET_KEY:
    process.env.SUAMUSICA_SMV_RECAPTCHA_V3_SECRET_KEY
};

const hits = {
  SUAMUSICA_SMV_HITS_URL: process.env.SUAMUSICA_SMV_HITS_URL
};

const tagManager = {
  SUAMUSICA_SMV_GOOGLE_TAG_MANAGER_ID:
    process.env.SUAMUSICA_SMV_GOOGLE_TAG_MANAGER_ID,
  SUAMUSICA_SMV_GOOGLE_ANALYTICS_ID:
    process.env.SUAMUSICA_SMV_GOOGLE_ANALYTICS_ID
};

const env = {
  ...mongodb,
  ...recaptchaV3,
  ...tagManager,
  ...hits
};

const images = {
  path: '/_next/image',
  loader: 'default',
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  domains: ['images.suamusica.com.br', 'source.unsplash.com']
};

module.exports = {
  env,
  images
};
