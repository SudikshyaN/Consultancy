
export default {
  basePath: '/',
  allowedHosts: [
  "localhost"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
