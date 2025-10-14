import { connectDB } from "../../../lib/mongodb";
import nodemailer from "nodemailer";
import FeedbackEN from "../../../models/FeedbackEN";

export async function POST(req) {
  try {
    const data = await req.json();

    // 1️⃣ Connect to MongoDB
    await connectDB();

    // 2️⃣ Save feedback to DB
    const feedback = new FeedbackEN(data);
    await feedback.save();

    // 3️⃣ Send email
    const recipient =
      data.branch === "Riyadh"
        ? "zulaikhakhalid18@gmail.com"
        : "zulaikhakhalid541@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bnooninfo@gmail.com",
        pass: "vydxquzqzibdmjle", // app password
      },
    });

    await transporter.sendMail({
      from: `"Bnoon Feedback" <bnooninfo@gmail.com>`,
      to: recipient,
      subject: `New Feedback from ${data.name} (${data.branch})`,
      html: `
        <h3>Feedback Details</h3>
        <p><strong>Branch:</strong> ${data.branch}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Rating:</strong> ${data.rating}</p>
        <p><strong>Feedback Type:</strong> ${data.feedbackType.join(", ")}</p>
        <p><strong>Details:</strong><br/>${data.feedbackDetails}</p>
        ${data.story ? `<p><strong>Story:</strong><br/>${data.story}</p>` : ""}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ English feedback error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Failed to send feedback" }),
      { status: 500 }
    );
  }
}
