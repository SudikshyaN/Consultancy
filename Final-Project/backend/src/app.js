const express = require('express');
const mongoose = require('mongoose');
const { CLIENT_ORIGIN } = require('./config/env');
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const universityRoutes = require('./routes/university.routes');

const app = express();

app.use((req, res, next) => {
  const allowedOrigins = new Set([
    CLIENT_ORIGIN,
    'http://localhost:4200',
    'http://127.0.0.1:4200',
  ]);
  const origin = req.headers.origin;

  res.header('Access-Control-Allow-Origin', allowedOrigins.has(origin) ? origin : CLIENT_ORIGIN);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Consultancy application API is running',
    endpoints: {
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
      profile: 'GET /api/auth/me',
      universityRecommendations: 'GET /api/universities/recommendations?country=USA',
    },
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api', (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    return next();
  }

  console.log(`[Database] Connection state: ${mongoose.connection.readyState} (${mongoose.connection.readyState === 0 ? 'disconnected' : mongoose.connection.readyState === 2 ? 'connecting' : 'disconnecting'})`);

  return res.status(503).json({
    message: 'Database unavailable. Add your current IP address to MongoDB Atlas Network Access, then restart the backend.',
    currentState: mongoose.connection.readyState
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/universities', universityRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  });
});

module.exports = app;
