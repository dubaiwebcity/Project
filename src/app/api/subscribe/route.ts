export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email required" });
    }

    // Check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({
        success: false,
        error: "You are already subscribed!",
      });
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
