module.exports = (request, response, next) => {
  const allowedOrigins  =[
    'http://localhost:3000',
    'http://localhost:3002'
  ];

  const { origin } = request.headers;
  // const origin = request.header('origin'); // Forma alternativa
  // const origin = request.get('origin'); // Forma alternativa
  
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    // Liberado para qualquer origem de requisição
    // response.setHeader('Access-Control-Allow-Origin', '*');
  
    // Liberado para qualquer origem específica
    // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    // Liberado para várias origens específicas
    response.setHeader('Access-Control-Allow-Origin', origin);
  
    // Liberado para qualquer método
    response.setHeader('Access-Control-Allow-Methods', '*');
  
    // Liberado para métodos específicos
    // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Liberado para qualquer header
    response.setHeader('Access-Control-Allow-Headers', '*');
  
    // Liberado para headers específicos
    // response.setHeader('Access-Control-Allow-Headers', 'x-APP-id');
  
    // Armazena as requisições de pre-flight por 7200 segundos (cada navegador tem um limite)
    response.setHeader('Access-Control-Max-Age', '10');
  }
  
  next();
};
