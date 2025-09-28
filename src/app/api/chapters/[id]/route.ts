import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { UpdateChapterData } from "@/types/course.types";

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
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Chapter not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Failed to fetch chapter" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching chapter:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const body: UpdateChapterData = await request.json();

    const { data, error } = await supabase
      .from("chapters")
      .update(body)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Chapter not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: "Failed to update chapter" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating chapter:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const { error } = await supabase.from("chapters").delete().eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to delete chapter" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Chapter deleted successfully" });
  } catch (error) {
    console.error("Error deleting chapter:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
