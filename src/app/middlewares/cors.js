module.exports = (request, response, next) => {
  // Liberado para qualquer origem de requisição
  // response.setHeader('Access-Control-Allow-Origin', '*');

  // Liberado para qualquer origem específica
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Liberado para qualquer método
  response.setHeader('Access-Control-Allow-Methods', '*');

  // Liberado para métodos específicos
  // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Liberado para qualquer header
  response.setHeader('Access-Control-Allow-Headers', '*');

  // Liberado para headers específicos
  // response.setHeader('Access-Control-Allow-Headers', 'x-APP-id');

  // Armazena as requisições de pre-flight por 7200 segundos (cada navegador tem um limite)
  response.setHeader('Access-Control-Max-Age', '7200');

  next();
};
