/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Twit = require( 'twit' );

module.exports = {
  tweet: function( req, res ) {

    User.findOne(req.userId, function( error, user ) {
      var message =  req.body.message;
      var scheduledfor =  req.body.scheduledfor;

      Post.create({
        message: message,
        scheduledfor: scheduledfor,
        isPosted: false,
        owner: req.userId
      }).exec(function( err, post ) {
        console.log( 'working', post, err );
        res.status(200).end();
      })
    });

  },

  myPosts: function( req, res ) {
    Post.find({owner: req.userId}, function( err, posts ) {
      res.json(posts);
    })
  }
};

