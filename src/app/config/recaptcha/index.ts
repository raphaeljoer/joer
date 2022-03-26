const siteKey = process.env.SUAMUSICA_SMV_RECAPTCHA_V3_SITE_KEY || '';
const secretKey = process.env.SUAMUSICA_SMV_RECAPTCHA_V3_SECRET_KEY || '';
const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=`;

export const recaptcha = Object.freeze({
  SITE_KEY: siteKey,
  SECRET_KEY: secretKey,
  MINIMUM_SCORE: 0.5,
  URL: url
});
