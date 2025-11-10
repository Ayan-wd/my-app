import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Resend Error: Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY environment variable" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const data = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev", // ✅ change to your domain later
      to: "ayanmajid88@gmail.com", // ✅ your inbox
      subject: data.subject || "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
