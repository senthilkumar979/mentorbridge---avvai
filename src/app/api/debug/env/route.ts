import { NextResponse } from "next/server";

export async function GET() {
  try {
    const envCheck = {
      nodeEnv: process.env.NODE_ENV,
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY ? "***SET***" : "NOT_SET",
        apiSecret: process.env.CLOUDINARY_API_SECRET ? "***SET***" : "NOT_SET",
      },
      nextPublic: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      },
      vercel: {
        env: process.env.VERCEL_ENV,
        region: process.env.VERCEL_REGION,
      },
    };

    return NextResponse.json({
      success: true,
      environment: envCheck,
      message: "Environment variables check",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to check environment",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
