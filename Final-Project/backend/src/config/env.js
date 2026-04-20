require('./loadEnv');

const PORT = Number(process.env.PORT) || 3000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';
const MONGODB_URI = process.env.MONGODB_URI || '';
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-development-secret';
const JWT_EXPIRES_IN_SECONDS = Number(process.env.JWT_EXPIRES_IN_SECONDS) || 24 * 60 * 60;

if (JWT_SECRET === 'change-this-development-secret') {
  console.warn('Warning: using default JWT_SECRET. Set a strong value in .env for real projects.');
}

module.exports = {
  PORT,
  CLIENT_ORIGIN,
  MONGODB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN_SECONDS,
  TOKEN_ISSUER: 'consultancy-api',
  PASSWORD_KEY_LENGTH: 64,
  PASSWORD_SALT_LENGTH: 16,
  PASSWORD_HASH_DIGEST: 'sha512',
  PASSWORD_HASH_ITERATIONS: 120000,
};
