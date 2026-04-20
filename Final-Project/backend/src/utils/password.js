const crypto = require('crypto');
const {
  PASSWORD_HASH_DIGEST,
  PASSWORD_HASH_ITERATIONS,
  PASSWORD_KEY_LENGTH,
  PASSWORD_SALT_LENGTH,
} = require('../config/env');

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(PASSWORD_SALT_LENGTH).toString('hex');

    crypto.pbkdf2(
      password,
      salt,
      PASSWORD_HASH_ITERATIONS,
      PASSWORD_KEY_LENGTH,
      PASSWORD_HASH_DIGEST,
      (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(
          [
            'pbkdf2',
            PASSWORD_HASH_DIGEST,
            PASSWORD_HASH_ITERATIONS,
            salt,
            derivedKey.toString('hex'),
          ].join('$')
        );
      }
    );
  });
}

function verifyPassword(password, storedHash) {
  return new Promise((resolve, reject) => {
    const [algorithm, digest, iterations, salt, originalHash] = storedHash.split('$');

    if (algorithm !== 'pbkdf2' || !digest || !iterations || !salt || !originalHash) {
      resolve(false);
      return;
    }

    crypto.pbkdf2(
      password,
      salt,
      Number(iterations),
      Buffer.from(originalHash, 'hex').length,
      digest,
      (err, derivedKey) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(
          crypto.timingSafeEqual(
            Buffer.from(originalHash, 'hex'),
            derivedKey
          )
        );
      }
    );
  });
}

module.exports = {
  hashPassword,
  verifyPassword,
};
