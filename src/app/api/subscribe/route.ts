// 📁 /src/app/api/subscribe/route.ts

import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

// ✅ Model define
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// ✅ Connect function
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

// ✅ POST method
export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email required" });
    }

    // Save to MongoDB
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Mongo error:", err);
    return NextResponse.json({
      success: false,
      error: err.message || "Database error",
    });
  }
}
