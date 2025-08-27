import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "ayanmajid802@gmail.com", // ✅ your inbox
      subject: data.subject || "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 500 }
    )
  }
}
