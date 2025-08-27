"use server"

import nodemailer from "nodemailer"
import { Resend } from "resend"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const provider = process.env.EMAIL_PROVIDER

  try {
    if (provider === "gmail") {
      // ---------- Gmail SMTP ----------
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, // use TLS (465 often blocked)
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

    const mailOptions = {
  from: `"${data.name}" <${data.email}>`,
  to: "ayanmajid802@gmail.com", // 👈 hardcode your inbox here
  subject: data.subject,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Message:</b> ${data.message}</p>
  `,
}


      await transporter.sendMail(mailOptions)
    } else if (provider === "resend") {
      // ---------- Resend ----------
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // or your verified domain
        to: "youremail@example.com",
        subject: data.subject,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Subject:</b> ${data.subject}</p>
          <p><b>Message:</b></p>
          <p>${data.message}</p>
        `,
      })
    } else {
      throw new Error("Invalid EMAIL_PROVIDER. Use 'gmail' or 'resend'.")
    }

    return { success: true }
  }catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }
    return { success: false, error: "Unknown error" }
  }
}
