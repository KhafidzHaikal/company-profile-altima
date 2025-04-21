import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const userEmail = body.email;

	if (!userEmail) {
		return NextResponse.json({ error: "Email is required" }, { status: 400 });
	}

	// Configure your SMTP transport
	const transporter = nodemailer.createTransport({
		host: "smtp.hostinger.com",
		port: 587,
		secure: false,
		auth: {
			user: "reservation@altimaworld.co.id",
			pass: "Altim@123",
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USERNAME,
		to: "reservation@altimaworld.co.id",
		subject: "New Email Submission",
		text: `
Dear Reservation Team,

We have received a new email submission through the website:

Email: ${userEmail}

Kindly follow up with the user at your earliest convenience.

Best regards,  
Altima World Web System`,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Email send error:", err);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
