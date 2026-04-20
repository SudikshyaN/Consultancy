function sanitizeUser(user) {
  const userObject = typeof user.toObject === 'function'
    ? user.toObject({ versionKey: false })
    : user;
  const { passwordHash, _id, ...safeUser } = userObject;

  return {
    id: user.id || _id?.toString(),
    ...safeUser,
  };
}

module.exports = {
  sanitizeUser,
};
