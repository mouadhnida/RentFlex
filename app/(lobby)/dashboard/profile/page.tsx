import UserProfile from "@/components/forms/UserProfileForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your account settings",
};


export default async function Profile() {

  return (
    <div className="m-10 max-lg:-ml-16 max-md:mx-16 max-sm:mx-4">
      <h1 className="text-4xl font-medium">Account</h1>
      <p className="text-gray">Manage your account settings</p>
      <UserProfile />
    </div>
  );
}
