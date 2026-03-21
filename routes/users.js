const express = require('express');
const router = express.Router();

const usersCont = require('../controllers/usersController');

router.get('/', usersCont.getAll);
router.get('/:id', usersCont.getSingle);

router.post('/', usersCont.createUser);
router.put('/:id', usersCont.updateUser);
router.delete('/:id', usersCont.deleteUser);

module.exports = router;
