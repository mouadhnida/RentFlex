import { NextResponse } from "next/server";
import { UserModel } from "@/models";
import dbConnect from "@/lib/dbConnect";

interface Body {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await dbConnect();
  const user = await UserModel.create({ name, email, password });
  return NextResponse.json({ success: user });
}
