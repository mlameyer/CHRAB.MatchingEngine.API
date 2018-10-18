var Bid = require('./bidModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Bid.findById(id)
    .then(function(bid) {
      if (!bid) {
        next(new Error('No bid with that id'));
      } else {
        req.bid = bid;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Bid.find({})
    .then(function(bids){
      res.json(bids);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var bid = req.bid;
  res.json(bid);
};

exports.put = function(req, res, next) {
  var bid = req.bid;

  var update = req.body;

  _.merge(bid, update);

  bid.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newbid = req.body;

  Bid.create(newbid)
    .then(function(bid) {
      res.json(bid);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.bid.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
