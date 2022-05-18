const { AddWork, GetWrokDetiails } = require('../controllers/workController');
const { CheckSignIn } = require('../middlewares/AuthMiddleware');

const router = require('express').Router();

router.post('/add',CheckSignIn, AddWork);

//route for work details 
router.get('/details/:todoId', CheckSignIn,GetWrokDetiails)
// edit work details 
// get all work
// get work with status 

module.exports = router;