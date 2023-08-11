export type User = {
  _id: string;
  userId: string;
  __v: number;
  favoriteProperties: Property[];
  feedbacks?: FeedBack[];
  image: string;
  listedProperties?: Property[];
  rentedProperties?: RentedProperty[];
  username?: string;
  bio?: string;
};

export type Property = {
  title: string;
  description: string;
  price: number;
  propertyImages: string[];
  address: string;
  location: { x: number; y: number };
  type: PropertyType;
  amenities: string[];
  bookedDates: { startDate: Date; endDate: Date }[];
  availableMonths: number[];
  feedbacks?: FeedBack[];
  totalEarnings: number | 0;
};

export type RentedProperty = {
  property: Property;
  tenant: User;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
};

export type FeedBack = {
  comment: string;
  rating: number;
  user: User;
  feedbackUser?: User;
  property?: Property;
};

enum PropertyType {
  Apartment = "Apartment",
  House = "House",
  Villa = "Villa",
}
