const { AddWork } = require('../controllers/workController');

const router = require('express').Router();

router.post('/add', AddWork);


module.exports = router;