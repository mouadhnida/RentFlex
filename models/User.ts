import { prop, Ref } from "@typegoose/typegoose";
import { Property } from "@/models/Property";
import { FeedBack } from "@/models/FeedBack";
import { RentedProperty } from "@/models/RentedProperty";

export class User {
  @prop({ required: true, unique: true })
  userId!: string;

  @prop({ ref: () => Property })
  favoriteProperties?: Ref<Property>[];

  @prop({ ref: () => Property })
  listedProperties?: Ref<Property>[];

  @prop({ ref: () => Property })
  rentedProperties?: Ref<RentedProperty>[];

  @prop({ ref: () => FeedBack })
  feedbacks?: Ref<FeedBack>[];
}
