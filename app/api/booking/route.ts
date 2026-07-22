import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const body = await req.json();
    
    const booking = await Booking.create(body);
    
    return NextResponse.json(
      { success: true, data: booking },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 400 }
    );
  }
}
