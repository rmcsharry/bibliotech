import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
// import * as sgMail from '@sendgrid/mail'

admin.initializeApp()

// REF: https://medium.com/firelayer/deploying-environment-variables-with-firebase-cloud-functions-680779413484
//
// firebase functions:config:unset env && firebase functions:config:set env="$(cat env.json)"
const config = functions.config()

interface Message {
  email: string
  firstName: string
  lastName: string
  message: string
}

// sgMail.setApiKey(config.env.sendgrid.apiKey)

// exports.sendEmail = functions.database.ref('messages/{pushId}/message').onCreate((snapshot, context) => {
//   const msg: Message = snapshot.val()
//   const mailOptions = {
//     from: `${msg.firstName} ${msg.lastName} <${msg.email}>`,
//     to: 'rmcsharry@gmail.com',
//     subject: 'Bibliotech - you have a new message',
//     html: `<p>Hi Juste,</p><br/><h4>You have a new message:</h4>
//        <h6> <b>Email: </b>${msg.email} </h6>
//        <h6> <b>First name: </b>${msg.firstName} </h6>
//        <h6> <b>Last name: </b>${msg.lastName} </h6>
//        <br/>
//        <p> <b>Message: </b>${msg.message} </p>`,
//   }
//   console.log(`Content is ${mailOptions}`)
//   return sgMail
//     .send(mailOptions)
//     .then(info => console.log('Email sent: ' + info))
//     .catch(error => console.log('Error sending email ---- ', error))
// })
