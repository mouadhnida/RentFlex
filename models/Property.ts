import { prop, Ref } from "@typegoose/typegoose";
import { FeedBack } from "@/models/FeedBack";

export class Property {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  description!: string;

  @prop({ required: true })
  price!: number;

  @prop({ required: true })
  propertyImages!: string[];

  @prop({ required: true })
  address!: string;

  @prop({ required: true })
  location!: { x: number; y: number };

  @prop({ required: true, enum: ["apartment", "house", "villa"] })
  type!: "apartment" | "house" | "villa";

  @prop({ default: [] })
  amenities: string[];

  @prop({ default: [] })
  bookedDates?: { startDate: Date; endDate: Date }[];

  @prop({
    type: () => [Number],
    default: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  })
  availableMonths?: number[];

  @prop({ ref: () => FeedBack })
  feedbacks?: Ref<FeedBack>[];

  @prop({ default: 0 })
  totalEarnings?: number;
}
