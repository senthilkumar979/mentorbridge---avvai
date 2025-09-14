import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const id = formData.get("id") as string;
    const type = formData.get("type") as string; // 'resume' or 'picture'

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    if (!type || !["resume", "picture"].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type. Must be "resume" or "picture"' },
        { status: 400 }
      );
    }

    // Get file extension
    const fileExtension = file.name.split(".").pop() || "";

    // Create filename with ID and extension
    const filename = `${id}.${fileExtension}`;

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
