fetch('http://localhost:3000/api/videos', {
  headers: {
    'Origin': 'http://localhost:4200'
  }
}).then(res => res.json()).then(console.log).catch(console.error);
