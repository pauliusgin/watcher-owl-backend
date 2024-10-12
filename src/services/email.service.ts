import nodemailer from "nodemailer";

export interface SendEmailInput {
    to: string;
    subject: string;
    html: string;
}

export async function sendNotificationEmail(input: SendEmailInput) {
    const { to, subject, html } = input;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error:", error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

}
