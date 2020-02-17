import nodemailer from 'nodemailer';

require('dotenv').config();

export default (path, filename) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_TO,
    subject: (new Date()).toString(),
    html: '<p>Texnaz backup</p>',
    attachments: [
      {
        filename,
        path: `./backups/${filename}`,
      },
    ],
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};
