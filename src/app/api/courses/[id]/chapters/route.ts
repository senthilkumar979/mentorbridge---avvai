import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { CreateChapterData } from "@/types/course.types";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const { data, error } = await supabase
      .from("chapters")
      .select("*")
      .eq("course_id", id)
      .order('"order"', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch chapters" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const body: Omit<CreateChapterData, "course_id"> = await request.json();

    // Validate required fields
    if (!body.title || !body.content || body.order === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, order" },
        { status: 400 }
      );
    }

    const chapterData: CreateChapterData = {
      ...body,
      course_id: id,
    };

    const { data, error } = await supabase
      .from("chapters")
      .insert([chapterData])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to create chapter" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating chapter:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
