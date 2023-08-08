import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  propertyImages: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: { x: Number, y: Number },
    required: true,
  },
  type: {
    type: String,
    enum: ["apartment", "house", "villa"],
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  bookedDates: {
    type: [{ startDate: Date, endDate: Date }],
    default: [],
  },
  availableMonths: {
    type: [Number],
    default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  feedbacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedBack",
    },
  ],
  totalEarnings: {
    type: Number,
    default: 0,
  },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", PropertySchema);

export default Property;
