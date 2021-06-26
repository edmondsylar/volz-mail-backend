// "use strict";
// const nodemailer = require("nodemailer");

// // saync..await is not allowe in global scope must use a wrapper
// async function main(emailAd){
//     // generate test account from ethereal.email
//     let testAccount = await nodemailer.createTestAccount();

//     // create the transporter. | we going to use the smpt from ethereal
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true if for 465, false for othere ports.
//         auth:{
//             user: testAccount.user, //generated ethereal user
//             pass: testAccount.pass, //generated ethereal password
//         },
//     });

//     // now lets send the email with the defined transport object above.
//     let info = await transporter.sendMail({
//         from: '"volzvok LTD" <service@volzvok.com>',
//         to: emailAd,
//         subject: "Reachout Testing",
//         test: "Your test email is here.",
//         html: "<b>Your test email is here"
//     });

//     // logging the results.
//     console.log("Message Sent: %s", info.messageId)

//     console.log("Preview URL %s", nodemailer.getTestMessageUrl(info));
// }

// main.catch(console.error)