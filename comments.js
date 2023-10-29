//create web server 
const express = require('express');
//create router object 
const router = express.Router();
//import comment model 
const Comment = require('../models/comment');
//import passport module 
const passport = require('passport');

//import comments controller 
const commentsController = require('../controllers/comments_controller');

//create routes for comments 
router.post('/create',passport.checkAuthentication,commentsController.create);

router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);

//export router
module.exports = router;