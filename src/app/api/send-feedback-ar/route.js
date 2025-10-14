import nodemailer from "nodemailer";
import { connectDB } from "../../../lib/mongodb";
import FeedbackAR from "../../../models/FeedbackAR"; // no .js needed

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      branch,
      name,
      phone,
      email,
      rating,
      story,
      feedbackType,
      feedbackDetails,
      consent,
    } = data;

    // Connect to MongoDB
    await connectDB();

    // Save feedback to DB
    const feedback = new FeedbackAR({
      branch,
      name,
      phone,
      email,
      rating,
      story,
      feedbackType,
      feedbackDetails,
      consent,
    });

    await feedback.save();

    // Choose email recipient
    const recipient =
      branch === "الرياض"
        ? "zulaikhakhalid18@gmail.com"
        : "zulaikhakhalid541@gmail.com";

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bnooninfo@gmail.com",
        pass: "vydxquzqzibdmjle",
      },
    });

    const mailOptions = {
  from: `"Bnoon Feedback" <bnooninfo@gmail.com>`,
  to: recipient,
  subject: `ملاحظة جديدة من ${name} (${branch})`,
  html: `
    <h3>📋 تفاصيل الملاحظة</h3>
    <p><strong>الفرع:</strong> ${branch}</p>
    <p><strong>اسم المريض/المريضة:</strong> ${name}</p>
    <p><strong>رقم الجوال:</strong> ${phone}</p>
    <p><strong>البريد الإلكتروني:</strong> ${email}</p>
    <p><strong>التقييم العام:</strong> ${rating}</p>
    <p><strong>نوع الملاحظة:</strong> ${feedbackType.join(", ")}</p>
    <p><strong>تفاصيل الملاحظة:</strong><br/>${feedbackDetails}</p>
    ${story ? `<p><strong>قصتكم:</strong><br/>${story}</p>` : ""}
    <p><strong>الموافقة على الشروط:</strong> ${consent ? "نعم" : "لا"}</p>
  `,
};

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending feedback:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send feedback" }),
      { status: 500 }
    );
  }
}
