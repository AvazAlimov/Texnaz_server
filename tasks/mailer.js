import nodemailer from 'nodemailer';

export default (path, filename) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'texnazbackup@gmail.com',
      pass: 'sZrkF76Qce8CBJp',
    },
  });

  const mailOptions = {
    from: 'texnazbackup@gmail.com',
    to: 'texnazbackup@gmail.com',
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
