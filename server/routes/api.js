const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../auth/user.js');

router.post('/signup',
  User.signup,
  userController.createUser,
  (req, res) => 
    res.status(200).json(res.locals.user)
);

router.post('/updateUser', 
  userController.getUserId,
  userController.updateUser
);

router.get('/getUser', 
  userController.getUser,
  (req, res) => {
    res.status(200).json(res.locals.user)
  }
);




module.exports = router;