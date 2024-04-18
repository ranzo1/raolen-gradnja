import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/components/EmailTemplate";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const smtpEmail = process.env.EMAIL;
  const smtpPassword = process.env.PASSWORD;

  const mailOptions = {
    from: smtpEmail, // Ensure this is a valid email, registered in Yahoo Mail
    to: smtpEmail, // Recipient
    cc: email, // Optionally cc the sender
    subject: `Poruka od ${email}`,
    //text: `<h1> ${message} <h1>`,
    html: emailTemplate(name, email, message),
  };

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // host: "smtp.mail.yahoo.com",
    // port: 587,
    // secure: false, // For port 587, should be false (use true for 465)
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  const sendMail = () =>
    new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(new Error("Failed to send email: " + err.message));
        } else {
          console.log(`Email sent: ${info.response}`);
          resolve("Email sent successfully");
        }
      });
    });

  try {
    const result = await sendMail();
    console.log(result);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
