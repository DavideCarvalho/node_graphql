const tungus = require('tungus');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = (uri) => {
  
  mongoose.connect(uri, {
    useMongoClient: true,
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB')
  });
  
  mongoose.connection.on('error', (error) => {
    console.log('Erro na conexão: ' + error);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do MongoDB')
  });
  
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Aplicação terminada, conexão fechada')
      process.exit(0);
    });
    
  })
}