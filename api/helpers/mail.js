// import the modules to use.
const nodemailer = require('nodemailer');

module.exports = {


  friendlyName: 'Mail',


  description: 'Mail something.',


  inputs: {
    email: {
      type: 'string',
      require: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({email}) {
    // get the random user credentials
    let testAccount = nodemailer.createTestAccount();

    // create the email transporter.
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'Login', //defailt
        user: 'edmondmusiitwa@gmail.com',
        pass: 'buevpbgickcacbcr',
      }
    });

    // now here lets send the email.
    let info = await transporter.sendMail({
        from: '"volzvok LTD" <service@volzvok.com>',
        to: 'edmondmusiitwa@gmail.com, edmondmusiitwa@volzvok.onmicrosoft.com',
        subject: "Reachout Testing",
        test: "Your test email is here.",
        html: "<b>Your test email is here"
    });


    // TODO
    console.log("Message sent: %s", info.messageId);
  }


};

// To call this helper:

//           // With default usage:
//           await sails.helpers.mail(…, …);

//           // With named parameters:
//           await sails.helpers.mail.with({
//             someInput: …,
//             someOtherInput: …
//           });