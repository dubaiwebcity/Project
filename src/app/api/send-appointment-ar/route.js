import { connectDB } from "@/lib/mongodb";
import AppointmentAR from "@/models/AppointmentAR";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();
    const saved = await AppointmentAR.create(data);

    let recipient = "";
    if (data.branch === "Riyadh" || data.branch === "الرياض") recipient = "websitedesignbahrain@gmail.com";
    else if (data.branch === "Jeddah" || data.branch === "جدة") recipient = "zulaikhakhalid541@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "bnooninfo@gmail.com", pass: "vydxquzqzibdmjle" },
    });

    await transporter.sendMail({
      from: `"موقع بــنون" <bnooninfo@gmail.com>`,
      to: recipient,
      subject: `طلب موعد جديد - ${data.branch}`,
      html: `<h3>تم إرسال طلب موعد جديد</h3>
             <p><b>الاهتمام:</b> ${data.interest}</p>
             <p><b>الفرع:</b> ${data.branch}</p>
             <p><b>الطبيب:</b> ${data.doctor}</p>
             <p><b>الاسم:</b> ${data.name}</p>
             <p><b>هل الموعد لك شخصيًا؟:</b> ${data.isForYou === "yes" ? "نعم" : "لا"}</p>
             <p><b>الجنسية:</b> ${data.nationality}</p>
             <p><b>بلد الإقامة:</b> ${data.countryOfResidence}</p>
             <p><b>المدينة:</b> ${data.cityIfInSA}</p>
             <p><b>الجنس:</b> ${data.gender === "male" ? "ذكر" : "أنثى"}</p>
             <p><b>رقم الجوال:</b> ${data.mobile}</p>
             <p><b>البريد الإلكتروني:</b> ${data.email}</p>
             <p><b>التاريخ المفضل:</b> ${data.preferredDate}</p>
             <p><b>الوقت المفضل:</b> ${data.preferredTime}</p>
             <p><b>كيف سمعت عنا:</b> ${data.howHeard}</p>`
    });

    return new Response(JSON.stringify({ success: true, message: "تم حفظ الطلب وإرسال البريد!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
