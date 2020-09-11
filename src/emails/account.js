const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jevgeni.glazunov@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how get along with the app.`
  })
}

const cancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jevgeni.glazunov@gmail.com',
    subject: 'Hopefully see you again!',
    text: `We will miss you, ${name}.`
  })
}

module.exports = {
  sendWelcomeEmail,
  cancelationEmail
}