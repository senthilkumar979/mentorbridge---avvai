import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { CreateEventData } from "@/types/event.types";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch events" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateEventData = await request.json();

    // Validate required fields
    if (
      !body.title ||
      !body.description ||
      !body.date ||
      !body.time ||
      !body.location ||
      !body.registrationLink
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, description, date, time, location, registrationLink",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("events")
      .insert([
        {
          title: body.title,
          description: body.description,
          date: body.date,
          time: body.time,
          location: body.location,
          registration_link: body.registrationLink,
          image_url: body.imageUrl,
          is_active: body.isActive ?? true,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to create event" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

