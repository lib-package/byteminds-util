import * as nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

type ComposeMessage = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

/**
 * Composes an email message object with the specified sender, recipient, subject, and body content.
 *
 * @param {string} from - The email address of the sender.
 *
 * @param {string} to - The email address of the recipient.
 *
 * @param {string} subject - The subject line of the email.
 *
 * @param {string} body - The HTML content of the email body.
 *
 * @returns {object} - An object representing the composed email message. This object includes:
 *                     - `from`: The sender's email address.
 *                     - `to`: The recipient's email address.
 *                     - `subject`: The subject line of the email.
 *                     - `html`: The HTML content of the email body.
 *
 * @example
 * const from = 'sender@example.com';
 * const to = 'recipient@example.com';
 * const subject = 'Hello!';
 * const body = '<p>This is a test email.</p>';
 *
 * const message = mod.composeMessage(from, to, subject, body);
 *
 * console.log(message);
 * // Output:
 * // {
 * //   from: 'sender@example.com',
 * //   to: 'recipient@example.com',
 * //   subject: 'Hello!',
 * //   html: '<p>This is a test email.</p>',
 * // }
 */
export const composeMessage = (
  from: string,
  to: string,
  subject: string,
  body: string
): ComposeMessage => {
  return {
    from,
    to,
    subject,
    html: body,
  };
};

/**
 * Creates a mail transporter object using nodemailer for sending emails.
 *
 * @param {string} host - The hostname or IP address of the SMTP server.
 *
 * @param {number} port - The port number of the SMTP server.
 *
 * @param {boolean} secure - If true, the connection will use TLS when connecting to the SMTP server.
 *                           If false, the connection will use plaintext if the server supports it.
 *
 * @param {string} service - The name of the email service to use (e.g., 'gmail', 'yahoo').
 *                           This is optional if host and port are provided.
 *
 * @param {string} email - The email address used for authentication with the SMTP server.
 *
 * @param {string} password - The password used for authentication with the SMTP server.
 *
 * @returns {object} - A nodemailer transport object configured with the provided SMTP settings.
 *
 * @example
 * const host = 'smtp.example.com';
 * const port = 587;
 * const secure = false;
 * const service = 'gmail';
 * const email = 'user@example.com';
 * const password = 'user_app_password';
 *
 * const transporter = mod.mailTransporter(host, port, secure, service, email, password);
 *
 * console.log(transporter);
 * // Output: Transport object configured with the provided settings.
 */
export const mailTransporter = (
  host: string,
  port: number,
  secure: boolean,
  service: string,
  email: string,
  password: string
): nodemailer.Transporter<SMTPTransport.SentMessageInfo> => {
  return nodemailer.createTransport({
    host,
    port,
    secure,
    service,
    auth: {
      user: email,
      pass: password,
    },
  });
};
