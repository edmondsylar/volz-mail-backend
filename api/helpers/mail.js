// import the modules to use.
const nodemailer = require('nodemailer');

module.exports = {


  friendlyName: 'Mail',


  description: 'Mail something.',


  inputs: {
    email: {
      type: 'string',
      require: true
    },
    description: {
      type: 'string',
      require: true,
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({email, description}) {
    // get the random user credentials
    let testAccount = nodemailer.createTestAccount(); // this has been ignored.

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
        to: [email],
        subject: "Volzvok Reachout",
        test: `${description}`,
        html: `<b>${description}</b>`
    });


    // TODO
    console.log("Message sent: %s", info.messageId);
  }


};