const nodemailer = require('nodemailer');

function sendEmail(user, code) {
  const mailOptions = {
    from: 'el.sobes@mail.ru',
    to: user.email,
    subject: 'Код подтверждения',
    html: `<p>Перейди по ссылке для завершения регистрации: 
    <a href="http://localhost:3001/api/auth/confirm/${code}">ссылка для подверждения</a>`,
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'el.sobes@mail.ru',
      pass: '2CNRhsSrrPNcCN0tidBw',
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sended', info);
    }
  });
}

module.exports = sendEmail;
