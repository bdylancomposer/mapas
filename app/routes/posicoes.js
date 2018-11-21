module.exports = app => {
  const api = app.api.posicoes;
  
  app.get('/posicoes', api.buscaPosicoes);
  app.get('/posicoes/:data', api.buscaPosicaoPorData);
  app.post('/posicoes', api.adicionaPosicao);
  app.post('/posicoes/addMany', api.adicionaPosicoes);
}