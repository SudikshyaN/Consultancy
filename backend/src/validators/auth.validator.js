function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRegister(body) {
  const value = {
    name: typeof body.name === 'string' ? body.name.trim() : '',
    email: typeof body.email === 'string' ? body.email.trim().toLowerCase() : '',
    password: typeof body.password === 'string' ? body.password : '',
  };
  const errors = [];

  if (value.name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!isValidEmail(value.email)) {
    errors.push('A valid email is required');
  }

  if (value.password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  return { value, errors };
}

function validateLogin(body) {
  const value = {
    email: typeof body.email === 'string' ? body.email.trim().toLowerCase() : '',
    password: typeof body.password === 'string' ? body.password : '',
  };
  const errors = [];

  if (!isValidEmail(value.email)) {
    errors.push('A valid email is required');
  }

  if (!value.password) {
    errors.push('Password is required');
  }

  return { value, errors };
}

module.exports = {
  validateLogin,
  validateRegister,
};
