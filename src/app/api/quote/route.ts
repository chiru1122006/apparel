import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "quotes.json");

interface QuoteSubmission {
  id: string;
  institutionName: string;
  email: string;
  phone: string;
  requirements: string;
  submittedAt: string;
  status: string;
}

// Helper to safely read quotes
async function readQuotes(): Promise<QuoteSubmission[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create directory and return empty array
    try {
      const dir = path.dirname(DATA_FILE_PATH);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2), "utf-8");
    } catch {
      // ignore
    }
    return [];
  }
}

// Helper to safely write quotes
async function writeQuotes(quotes: QuoteSubmission[]): Promise<void> {
  const dir = path.dirname(DATA_FILE_PATH);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(quotes, null, 2), "utf-8");
}

export async function GET() {
  try {
    const quotes = await readQuotes();
    return NextResponse.json({ success: true, quotes }, { status: 200 });
  } catch (error) {
    console.error("Error reading quotes:", error);
    return NextResponse.json(
      { error: "Failed to read quotes from JSON store." },
      { status: 500 }
    );
  }
}

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

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const quotes = await readQuotes();

    // Create unique ID
    const newId = `QT-${Date.now().toString().slice(-4)}${Math.floor(
      Math.random() * 90 + 10
    )}`;

    const newQuote: QuoteSubmission = {
      id: newId,
      institutionName: institutionName.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      requirements: requirements.trim(),
      submittedAt: new Date().toISOString(),
      status: "New",
    };

    // Prepend new submission to top of list
    quotes.unshift(newQuote);

    // Save to JSON file
    await writeQuotes(quotes);

    console.log("New Quote Saved to quotes.json:", newQuote);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your quote request has been recorded.",
        quote: newQuote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Internal server error while saving quote inquiry." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Quote ID is required for deletion." },
        { status: 400 }
      );
    }

    const quotes = await readQuotes();
    const updatedQuotes = quotes.filter((q) => q.id !== id);

    await writeQuotes(updatedQuotes);

    return NextResponse.json(
      { success: true, message: `Quote ${id} removed successfully.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete quote." },
      { status: 500 }
    );
  }
}
