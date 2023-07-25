import { User } from "@/models/User";
import { Property } from "@/models/Property";
import { RentedProperty } from "@/models/RentedProperty";
import { FeedBack } from "@/models/FeedBack";
import { getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";

export const UserModel = mongoose.models.User || getModelForClass(User);
export const PropertyModel =
  mongoose.models.Property || getModelForClass(Property);
export const RentedPropertyModel =
  mongoose.models.RentedProperty || getModelForClass(RentedProperty);
export const FeedBackModel =
  mongoose.models.FeedBack || getModelForClass(FeedBack);
