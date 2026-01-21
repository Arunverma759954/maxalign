import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      date,
      time,
      service,
      message,
    } = await req.json();

    if (!name || !phone || !date || !time || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Appointment Request" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: `${process.env.GMAIL_USER}, maxaligndental@gmail.com`,
      subject: `New Appointment Booking - ${service}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment Email Error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
