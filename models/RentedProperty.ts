import { prop } from "@typegoose/typegoose";
import type { Ref } from "@typegoose/typegoose";
import { Property } from "@/models/Property";
import { User } from "@/models/User";

export class RentedProperty {
  @prop({ required: true, ref: () => Property })
  property: Ref<Property>;

  @prop({ required: true, ref: () => User })
  tenant: Ref<User>;

  @prop({ required: true })
  startDate: Date;

  @prop({ required: true })
  endDate: Date;

  @prop({ required: true })
  totalPrice: number;
}
