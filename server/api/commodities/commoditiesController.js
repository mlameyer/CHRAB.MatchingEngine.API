var Commodity = require('./commoditiesModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
    Commodity.findById(id)
    .then(function(commodity) {
      if (!commodity) {
        next(new Error('No commodity with that id'));
      } else {
        req.commodity = commodity;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Commodity.find({})
    .then(function(commodity){
      res.json(commodity);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var commodity = req.commodity;
  res.json(commodity);
};

exports.put = function(req, res, next) {
  var commodity = req.commodity;

  var update = req.body;

  _.merge(commodity, update);

  commodity.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newcommodity = req.body;

  Commodity.create(newcommodity)
    .then(function(commodity) {
      res.json(commodity);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.commodity.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
