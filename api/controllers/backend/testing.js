var Email = require('email').Email


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
    
    // lets process the request from here.
    console.log(emailAd);

    var myMsg = new Email({
      from: "edmondmusiitwa@gmail.com",
      to: emailAd,
      subject: "Email Testing",
      body: `Hello visitor, the emails sending is working just fine so mind fucking Godamn business.`
    });

    myMsg.send(function(err){
      console.log(err);

    })
    // we need a success log for if the msg is sent.

    // All done.
    return;

  }


};
