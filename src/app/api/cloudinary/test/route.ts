import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get("public_id");

    if (!publicId) {
      return NextResponse.json(
        { error: "public_id parameter is required" },
        { status: 400 }
      );
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
      return NextResponse.json(
        { error: "Cloudinary cloud name not configured" },
        { status: 500 }
      );
    }

    // Test different URL formats
    const urls = {
      original: `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`,
      withFormat: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}`,
      withPng: `https://res.cloudinary.com/${cloudName}/image/upload/f_png,q_auto/${publicId}`,
      withJpg: `https://res.cloudinary.com/${cloudName}/image/upload/f_jpg,q_auto/${publicId}`,
    };

    return NextResponse.json({
      publicId,
      cloudName,
      urls,
      message:
        "Test URLs generated. Try accessing these URLs directly to see which ones work.",
    });
  } catch (error) {
    console.error("Error in test endpoint:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
