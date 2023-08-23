import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

type EventType = "user.created" | "user.updated" | "user.deleted";

export async function POST(req: Request) {
  const payload = await req.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (error) {
    console.error((error as Error).message);

    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  const {
    id,
    image_url,
    first_name,
    last_name,
    unsafe_metadata,
    ...attributes
  } = evt.data;

  dbConnect();
  if (eventType === "user.created" || eventType === "user.updated") {
    const bio = (unsafe_metadata as any).bio;
    const result = await User.findOneAndUpdate(
      { userId: id },
      {
        userId: id,
        image: image_url,
        username: first_name + " " + last_name,
        bio: bio,
      },
      { upsert: true }
    );
  } else if (eventType === "user.deleted") {
    await User.deleteOne({ userId: id });
  }
}
