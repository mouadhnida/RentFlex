import { prop } from "@typegoose/typegoose";
import type { Ref } from "@typegoose/typegoose";
import { User } from "@/models/User";
import { Property } from "@/models/Property";

export class FeedBack {
  @prop({ required: true })
  comment!: string;

  @prop({ required: true })
  rating!: number;

  @prop({ ref: () => User })
  user!: Ref<User>; // The user who wrote the feedback

  @prop({ ref: () => User })
  feedbackUser?: Ref<User>;

  @prop({ ref: () => Property })
  property?: Ref<Property>;
}
