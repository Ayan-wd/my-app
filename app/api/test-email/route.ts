import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "ayanmajid802@gmail.com",
      subject: "Test Email from Next.js",
      text: "If you see this, Gmail SMTP is working!",
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ success: false, error: err.message })
  }
}
