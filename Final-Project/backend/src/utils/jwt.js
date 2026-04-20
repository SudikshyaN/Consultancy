const crypto = require('crypto');
const {
  JWT_EXPIRES_IN_SECONDS,
  JWT_SECRET,
  TOKEN_ISSUER,
} = require('../config/env');

function base64UrlEncode(value) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function base64UrlDecode(value) {
  return JSON.parse(Buffer.from(value, 'base64url').toString('utf8'));
}

function sign(unsignedToken) {
  return crypto
    .createHmac('sha256', JWT_SECRET)
    .update(unsignedToken)
    .digest('base64url');
}

function createToken(payload) {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };
  const body = {
    ...payload,
    iss: TOKEN_ISSUER,
    iat: now,
    exp: now + JWT_EXPIRES_IN_SECONDS,
  };
  const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(body)}`;

  return `${unsignedToken}.${sign(unsignedToken)}`;
}

function verifyToken(token) {
  try {
    const parts = token.split('.');

    if (parts.length !== 3) {
      return null;
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    const unsignedToken = `${encodedHeader}.${encodedPayload}`;
    const expectedSignature = sign(unsignedToken);

    if (
      !crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      )
    ) {
      return null;
    }

    const payload = base64UrlDecode(encodedPayload);
    const now = Math.floor(Date.now() / 1000);

    if (payload.iss !== TOKEN_ISSUER || payload.exp < now) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

module.exports = {
  createToken,
  verifyToken,
};
