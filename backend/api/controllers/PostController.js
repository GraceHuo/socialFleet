/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Twit = require( 'twit' );

module.exports = {
  tweet: function( req, res ) {

    var T = new Twit( {
      consumer_key       : config.TWITTER_KEY,
      consumer_secret    : config.TWITTER_SECRET,
      access_token       : '953650847862394880-diWbxorCYM1yTozvBTTx8HAxpI8khYX', // get it from localDiskDb.db
      access_token_secret: 'iNAPfhg39PgsPVQyRCvEXCylQZFIpnF1SxFMNXhv4HUcb',
      timeout_ms         : 60 * 1000  // optional HTTP request timeout to apply to all requests.
    } );

    T.post( 'statuses/update', { status: 'hello world!' }, function( err, data, response ) {
      console.log( data, err );
    } )
  }
};

