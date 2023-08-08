import mongoose from "mongoose";

const RentedPropertySchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
});

const RentedProperty =
  mongoose.models.RentedProperty ||
  mongoose.model("RentedProperty", RentedPropertySchema);

export default RentedProperty;
