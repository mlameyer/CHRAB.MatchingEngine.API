var Ask = require('./askModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Ask.findById(id)
    .then(function(ask) {
      if (!ask) {
        next(new Error('No ask with that id'));
      } else {
        req.ask = ask;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Ask.find({})
    .then(function(asks){
      res.json(asks);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var ask = req.ask;
  res.json(ask);
};

exports.put = function(req, res, next) {
  var ask = req.ask;

  var update = req.body;

  _.merge(ask, update);

  ask.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newask = req.body;

  Ask.create(newask)
    .then(function(ask) {
      res.json(ask);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.ask.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
