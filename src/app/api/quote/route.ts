import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { institutionName, email, phone, requirements } = body;

    if (!institutionName || !email || !requirements) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Extensible hook for Resend, Formspree, SendGrid, or CRM webhook:
    // e.g.:
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({ ... });
    // }

    console.log("New Quote Inquiry Received:", {
      institutionName,
      email,
      phone,
      requirements,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your inquiry has been safely received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach us by phone." },
      { status: 500 }
    );
  }
}

