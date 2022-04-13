const fs = require('fs');

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    https: {
      key: fs.readFileSync('./certKey/key.pem'),
      cert: fs.readFileSync('./certKey/cert.pem')
    },
    public: 'https://localhost:3000',
    host: 'localhost'
  }
};
