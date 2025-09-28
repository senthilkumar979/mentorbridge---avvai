import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { CreateCourseData } from "@/types/course.types";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch courses" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateCourseData = await request.json();

    // Validate required fields
    if (
      !body.title ||
      !body.description ||
      !body.category ||
      !body.created_by
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, description, category, created_by",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("courses")
      .insert([body])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to create course" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
