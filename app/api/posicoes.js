const api = {},
  mongoose = require('mongoose'),
  model = mongoose.model('Posicao');

api.buscaPosicoes = (req, res, next) => {
  
  model
    .find({})
    .then(posicoes => res.status(200).json(posicoes))
    .catch(err => { 
      next(err);
      res.status(404).json(err);
    });
}

api.buscaPosicaoPorData = (req, res, next) => {

  model
    .find({
      dateTime: req.params.data
    })
    .then(posicao => {
      if(!posicao) res.status(404).json({ message: 'posicao nao encontrada'});
      res.status(200).json(posicao); 
    })
    .catch(err => {
      next(err);
      res.status(404).json(err);
    });
}

api.adicionaPosicao = (req, res, next) => {
  
  model
    .create(req.body)
    .then(posicao => res.status(201).json(posicao))
    .catch(err => {
      next(err);
      res.status(400).json(err);
    });
}

api.adicionaPosicoes = (req, res, next) => {

  model
    .insertMany(req.body)
    .then(posicoes => res.status(201).json(posicoes))
    .catch(err => {
      next(err);
      res.status(400).json(err);
    });
}

api.atualizaPosicao = (req, res, next) => {
  model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(posicao => res.status(303).json(posicao))
    .catch(err => {
      next(err);
      res.status(400).json(err);
    });
}

module.exports = api;