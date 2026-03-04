const express = require('express');
const router = express.Router();

const usersCont = require('../controllers/usersController');

router.get('/', usersCont.getAll);
router.get('/:id', usersCont.getSingle);

module.exports = router