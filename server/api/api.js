var router = require('express').Router();

// api router will mount other routers
// for all our resources
//router.use('/users', require('./user/userRoutes'));
router.use('/ask', require('./asks/askRoutes'));
router.use('/bid', require('./bids/bidRoutes'));

module.exports = router;
