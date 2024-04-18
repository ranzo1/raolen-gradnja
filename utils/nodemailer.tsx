import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

export const smtpEmail = process.env.EMAIL;
export const smtpPassword = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true,
  auth: {
    user: smtpEmail,
    pass: smtpPassword,
  },
});
