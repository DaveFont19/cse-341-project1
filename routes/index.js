const router = require('express').Router();

// router.use('/', swaggerRouterouter = require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
  res.send('Hello World!!');
});

router.use('/users', require('./users'));

module.exports = router;
