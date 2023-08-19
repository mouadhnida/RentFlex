import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();

  try {
    dbConnect();
    if (id) {
      const user = await User.findOne({
        userId: id,
      });
      if (user) {
        const userData = {
          username: user.username,
          phone: user.phone,
          bio: user.bio,
        };
        return NextResponse.json({ user: userData });
      }
      console.log(`No User with id: ${id}`);
    }
    return NextResponse.redirect("/");
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
