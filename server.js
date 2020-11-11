require('dotenv').config();

const stud = {
    subject: 'Physic',
    email: '123@mail.ru',
    text: 'Ало! Ало! Привет!'
};
const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testkek58@gmail.com', // TODO: your gmail account 
        pass: 'murikameDOTO20' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'testkek58@gmail.com', // TODO: email sender
    to: 'testkek58@gmail.com', // TODO: email receiver
    subject: `${stud.subject}`,
    text: `${stud.text} from: ${stud.email}`
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs', err);
    }
    return log('Email sent!!!');
});