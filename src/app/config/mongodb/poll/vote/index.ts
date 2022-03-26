export const mongodb = Object.freeze({
  URI: process.env.SUAMUSICA_SMV_MONGODB_URI || '',
  DB_NAME: process.env.SUAMUSICA_SMV_MONGODB_DB_NAME || '',
  COLLECTION: process.env.SUAMUSICA_SMV_MONGODB_COLLECTION || ''
});
