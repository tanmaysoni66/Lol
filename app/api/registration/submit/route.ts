import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { type, payment, form } = await req.json();
    const isAdvanced = type === "advanced";
    const courseTitle = isAdvanced ? "Advanced Mushroom Farming Training" : "Basic Mushroom Farming Training";

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ message: "Mock success for development" }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <h2>Successful Registration</h2>
      <p>✅ <strong>Registration Completed</strong></p>
      <p><strong>Course:</strong> ${courseTitle}</p>
      <br/>
      
      <h3>1. Personal Details</h3>
      <ul>
        <li><strong>Full Name:</strong> ${payment.name}</li>
        <li><strong>Email Address:</strong> ${payment.email}</li>
        <li><strong>WhatsApp Number:</strong> ${form.whatsapp}</li>
        <li><strong>Alternate Mobile:</strong> ${form.altPhone || "N/A"}</li>
        <li><strong>Country:</strong> ${form.country}</li>
        <li><strong>State/City:</strong> ${form.state || "N/A"}</li>
      </ul>
      
      <h3>2. Training Details</h3>
      <ul>
        <li><strong>Course:</strong> ${courseTitle}</li>
        <li><strong>Fee:</strong> ₹${payment.amount}</li>
        <li><strong>Mode:</strong> Online</li>
        <li><strong>Preferred Training Slot:</strong> ${form.slot}</li>
        <li><strong>Preferred Start Date:</strong> ${form.startDate || "N/A"}</li>
      </ul>
      
      <h3>3. ${isAdvanced ? "Mushroom Farming Information" : "Basic Farming Details"}</h3>
      <ul>
        <li><strong>Which mushroom do you want to learn?</strong> ${form.mushroom}</li>
        <li><strong>Current Experience:</strong> ${form.experience}</li>
        <li><strong>Do you already have a mushroom farm?</strong> ${form.haveFarm}</li>
        <li><strong>Planned Farm Size:</strong> ${form.farmSize || "N/A"}</li>
        ${isAdvanced ? `<li><strong>Main Purpose:</strong> ${form.purpose}</li>` : ""}
      </ul>
      
      <h3>4. Payment Details — Automatic</h3>
      <ul>
        <li><strong>Payment Status:</strong> PAID</li>
        <li><strong>Course Amount:</strong> ₹${payment.amount}</li>
        <li><strong>Payment ID:</strong> ${payment.payment_id}</li>
        <li><strong>Order ID:</strong> ${payment.order_id}</li>
        <li><strong>Payment Date:</strong> ${payment.payment_date}</li>
      </ul>
      
      <h3>5. Requirement</h3>
      <ul>
        <li><strong>What do you want to learn? / Requirement:</strong> ${form.requirement || "N/A"}</li>
        <li><strong>How did you hear about us?</strong> ${form.hearAbout || "N/A"}</li>
      </ul>
      
      <h3>6. Agreement</h3>
      <ul>
        <li>I confirm that the information provided is correct: <strong>Yes</strong></li>
        <li>I agree to the Training Terms & Conditions and Privacy Policy: <strong>Yes</strong></li>
      </ul>
    `;

    await transporter.sendMail({
      from: `"Website Training" <${process.env.SMTP_EMAIL}>`,
      to: "organicmushroomsfarms@gmail.com",
      subject: `[New Registration] ${courseTitle} - ${payment.name}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Registration submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting registration:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
