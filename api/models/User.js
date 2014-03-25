/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  
  //this property makes it so only the properties below are being saved to the db
  schema: true,

  attributes: {
  	
  	name: {
      type: 'string',
      required: true
    },

    title: {
      type: 'string'
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    encryptedPassword: {
      type: 'string'
    }
    
  }

};
