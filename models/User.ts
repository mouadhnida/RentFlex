import { prop, Ref } from "@typegoose/typegoose";
import { Property } from "@/models/Property";
import { FeedBack } from "@/models/FeedBack";
import { RentedProperty } from "@/models/RentedProperty";

export class User {
  @prop({ required: true, unique: true })
  name!: string;

  @prop({ required: true, unique: true })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop()
  profileImage?: string;

  @prop()
  contactInformation?: {
    phone?: string;
    address?: string;
    email?: string;
    socials?: string[];
  };

  @prop({ ref: () => Property })
  favoriteProperties?: Ref<Property>[];

  @prop({ ref: () => Property })
  listedProperties?: Ref<Property>[];

  @prop({ ref: () => Property })
  rentedProperties?: Ref<RentedProperty>[];

  @prop({ ref: () => FeedBack })
  feedbacks?: Ref<FeedBack>[];
}
