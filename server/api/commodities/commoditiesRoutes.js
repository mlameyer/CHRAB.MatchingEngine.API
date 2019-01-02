var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./commoditiesController');
// var auth = require('../../auth/auth');

// var checkUser = [auth.decodeToken(), auth.getFreshUser()];
// setup boilerplate route jsut to satisfy a request
// for building
router.param('Commodity', controller.params);

router.route('/')
  .get(controller.get)
  //.post(checkUser, controller.post)
  .post(controller.post)

router.route('/:Commodity')
  .get(controller.getOne)
  //.put(checkUser, controller.put)
  .put(controller.put)

  .post(controller.post)
  //.delete(checkUser, controller.delete)
  .delete(controller.delete)

module.exports = router;