const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vroumy2@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vroumy2@gmail.com',
        subject: 'Goodbye!',
        text: `Auld lang syne, ${name}. Let me know why you left, and if I could do anything to improve my service.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}