import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tags = await db.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (error:any) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ message: 'Could not fetch tags', error: error.message }, { status: 500 });
  }
}
