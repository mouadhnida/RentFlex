import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();

  try {
    dbConnect();
    if (id) {
      const result = await User.findOne({
        userId: id,
      });
      if (result) {
        return NextResponse.json({ user: result });
      }
      console.log(`No User with id: ${id}`);
    }
    return NextResponse.redirect("/");
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
