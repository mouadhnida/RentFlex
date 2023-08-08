import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  image: String,
  bio: String,
  email: String,
  phone: String,
  favoriteProperties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
  listedProperties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
  rentedProperties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentedProperty",
    },
  ],
  feedbacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedBack",
    },
  ],
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
