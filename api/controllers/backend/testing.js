var Email = require('email').Email
// const { main } = require("../../helpers/Mail-helper");


module.exports = {


  friendlyName: 'Testing',


  description: 'We are doing Ajax-form testing with this route here ',


  inputs: {
    
    emailAd :{
      description: "The test email to use the testing",
      type: 'string',
      required: true
    }
    
  },


  exits: {
    success: {
      description: "The Email has been received",
      extendedDescription: "Nothing really."
    }
  },


  fn: async function ({emailAd}) {
  
    // lets try calling the Mail-helpers 'main function'
    await sails.helpers.mail.with({
      email: 'Checking if we can access this helpers'
    });
    
    // redirect to the home page on a success reception of the email here.
    var scode = this.res.statusCode;
    if (scode == 200) {
      try {
        this.res.redirect('/');
      } catch (error) {
        // try to redirect back the homepage.
        console.log(error);
      }
    }
    
    return;

  }


};
