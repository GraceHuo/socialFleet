/**
 * Post.js
 *
 * @description :: Post
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    message: 'string',
    datetime: 'datetime',
    owner: {
      model: 'user'
    }
  }
};

