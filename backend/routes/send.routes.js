const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transport = {
  host: 'smtp.poczta.onet.pl',
  port: 465,
  secure: true,
  auth: {
    user: process.env.emailSenderAddress,
    pass: process.env.emailSenderPassword,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `Imię: ${name} \nEmail: ${email} \nWiadomość: ${message}`;

  const mail = {
    from: process.env.emailSenderAddress,
    to: [process.env.emailSenderAddress, email],
    subject: 'To jest automatyczna wiadomość z formularza kontaktowego',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

module.exports = router;
