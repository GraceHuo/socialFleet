/**
 * User.js
 *
 * @description :: Server-side logic for managing users
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    email: {
      type: 'string',
      unique: true,
      lowercase: true
    },
    displayName: 'string',
    twitter: 'string',
    twitterToken: 'string',
    twitterSecret: 'string'
  }
};


