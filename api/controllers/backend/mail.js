var Email = require('email').Email
// const { main } = require("../../helpers/Mail-helper");


module.exports = {


  friendlyName: 'Mail',


  description: 'We are doing Ajax-form testing with this route here ',


  inputs: {
    
    emailAd :{
      description: "The test email to use the testing",
      type: 'string',
      required: true
    },

    desc: {
      description: "Simple Email description to send to the used email in the email prompt.",
      type: "string",
      required: true
    }
    
  },


  exits: {
    success: {
      description: "The Email has been received",
      extendedDescription: "Nothing really."
    }
  },


  fn: async function ({emailAd, desc}) {
  
    // lets try calling the Mail-helpers 'main function'
    await sails.helpers.mail.with({
      email: emailAd,
      description: desc
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
