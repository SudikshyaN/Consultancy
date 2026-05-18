
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/destinations/*"
  },
  {
    "renderMode": 0,
    "route": "/freetools"
  },
  {
    "renderMode": 0,
    "route": "/about"
  },
  {
    "renderMode": 0,
    "route": "/blog"
  },
  {
    "renderMode": 0,
    "route": "/finance"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "redirectTo": "/admin/universities",
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "route": "/admin/login"
  },
  {
    "renderMode": 0,
    "route": "/admin/universities"
  },
  {
    "renderMode": 0,
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/main"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/profile"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/universities"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/free-tools"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/wishlist"
  },
  {
    "renderMode": 0,
    "route": "/dashboard/community"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1394, hash: '01ee1950ba0c8ea4d56d939939eb2aae8128e72cb4c8a94801dcd2924cc9f3eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '45da4a44b6ffa2d1993926a2a100fcda16cf3bcad9a869375297cae3c07e7b5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27044, hash: 'db694b995035ad8b0b1dbe76bbddee10349a6cb9e5cf94205af69741bb90eff3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AUBBK2E7.css': {size: 2115, hash: 'bIHDtCgeisw', text: () => import('./assets-chunks/styles-AUBBK2E7_css.mjs').then(m => m.default)}
  },
};
