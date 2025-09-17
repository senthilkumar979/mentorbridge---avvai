import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import {
  CloudinaryResource,
  CloudinarySearchResult,
  CloudinaryImage,
} from "@/types/gallery.types";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder") || "gallery";
    const maxResults = parseInt(searchParams.get("max_results") || "50");
    const transformation =
      searchParams.get("transformation") || "f_auto,q_auto";

    // Validate environment variables
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        {
          error:
            "Cloudinary configuration is missing. Please check your environment variables.",
        },
        { status: 500 }
      );
    }

    console.log("Searching Cloudinary folder:", folder);
    console.log("Max results:", maxResults);
    console.log("Transformation:", transformation);

    // Fetch images from Cloudinary
    const result = (await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by("created_at", "desc")
      .max_results(maxResults)
      .execute()) as CloudinarySearchResult;

    console.log(
      "Cloudinary search result:",
      result.resources.length,
      "images found"
    );

    // Transform Cloudinary response to our interface
    const images: CloudinaryImage[] = result.resources.map(
      (resource: CloudinaryResource) => {
        // Use folder name as title
        const title = folder;

        // Generate alt text from folder name
        const alt = `Image from ${folder} folder`;

        // Generate URL manually to ensure proper format
        const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${resource.public_id}`;

        // Also generate a fallback URL without transformation
        const fallbackUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${resource.public_id}`;

        console.log("Generated Cloudinary URL:", imageUrl);
        console.log("Fallback URL (no transformation):", fallbackUrl);
        console.log("Transformation string:", transformation);
        console.log("Public ID:", resource.public_id);
        console.log(
          "Original width/height:",
          resource.width,
          "x",
          resource.height
        );

        return {
          id: resource.public_id,
          src: imageUrl,
          title: title,
          alt: alt,
          public_id: resource.public_id,
          width: resource.width,
          height: resource.height,
        };
      }
    );

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Cloudinary" },
      { status: 500 }
    );
  }
}
