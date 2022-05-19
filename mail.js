const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '6ec0b85afa581e086407228a4984739e-100b5c8d-f5792037',
        domain: 'sandbox73d7c79829b44de599a72e8f439002a5.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'oluwadipegodwin@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data)
        }
    });
}

module.exports = sendMail;