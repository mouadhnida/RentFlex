import { User } from "@/models/User";
import { Property } from "@/models/Property";
import { RentedProperty } from "@/models/RentedProperty";
import { FeedBack } from "@/models/FeedBack";
import { getModelForClass } from "@typegoose/typegoose";

export const UserModel = getModelForClass(User);
export const PropertyModel = getModelForClass(Property);
export const RentedPropertyModel = getModelForClass(RentedProperty);
export const FeedBackModel = getModelForClass(FeedBack);
