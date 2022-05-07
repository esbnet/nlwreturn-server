import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "5fe9f96d6bdfbc",
		pass: "3ea1d8df5c8338",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMain({ subject, body }: SendMailData): Promise<void> {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedget.com>",
			to: "Edmilson Soares <esbnet@fakemail.com>",
			subject,
			html: body,
		});
	}
}
