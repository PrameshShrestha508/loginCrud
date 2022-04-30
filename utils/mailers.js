import nodemailer from "nodemailer";
import "dotenv/config";

let transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE_PROVIDER,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

export async function mailer(mailTo, username) {
  try {
    await transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: mailTo,
      subject: "Thank You!!You mail has been received",
      text: `I have recently received your mail at  ${new Date().toDateString()}. 
            Thank you Mr/Mrs. ${username} for showing your interest on me. I will try my best to contact you as soon as possible.
            sincerely,
            Pramesh Bandhu Shrestha`,
      html: `Received your message at <b>${new Date().toDateString()}.</b><br/><br />
    Thank you <b>${username}</b> for showing your interest on me. <br/><br/>I will try my best to contact you as soon as possible.<br/><br />
    <i>Sincerely</i>,<br/>
    <i>Pramesh Bandhu Shrestha</i><br/>`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
export async function mailerAdmin({ username, email, message }) {
  try {
    await transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "You mail has been received",
      text: `Received message at ${new Date().toDateString()}.
        Sender Name: ${username} , Email Address: ${email},[ ${message} ]`,
      html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
      <b>Sender Name:</b> <i>${username},</i><br/><br/>
      <b>Email:</b> <i>${email},</i> <br/><br/>
       <b>Message:</b><br/>
       <br/>
        ${message}
        <br/>
      `,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
