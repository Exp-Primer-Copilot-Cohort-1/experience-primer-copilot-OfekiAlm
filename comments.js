//create web server 
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');
var Post = require('../models/post.js');
var User = require('../models/user.js');

//create new comment
router.post('/', function(req, res, next){
	var comment = new Comment({
		content: req.body.content,
		post: req.body.post, 

    })});