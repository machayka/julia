import * as functions from "firebase-functions";
import * as fs from "fs";
import * as nodemailer from "nodemailer";
import * as path from "path";
import {renderTemplate} from "./renderTemplate";

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

export async function sendEmail(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  subject: string,
  templateFile: string,
  to?: string,
  replyTo?: string
) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    // projekt jest kompilowany do JavaScript i umieszczany w folderze lib,
    // a kod źródłowy znajduje się w innym miejscu

    const template = fs.readFileSync(
      path.join(__dirname, "..", "..", "mails", templateFile),
      "utf-8"
    );
    const mailBody = renderTemplate(template, data);

    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: to ? to : SENDER_EMAIL,
      subject: subject,
      html: mailBody,
      replyTo: replyTo ? replyTo : SENDER_EMAIL,
    });
  } catch (e) {
    functions.logger.error(e);
    throw e;
  }
}
