import UserProfile from "@/components/forms/UserProfileForm";
import { currentUser } from "@clerk/nextjs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your account settings",
};

async function getData() {
  const user = await currentUser();
  const id = user?.id;

  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
    cache: "no-cache",
  });

  return res.json();
}

export default async function Profile() {
  const { user } = await getData();

  return (
    <div className="m-10 max-lg:-ml-16 max-md:mx-16 max-sm:mx-4">
      <h1 className="text-4xl font-medium">Account</h1>
      <p className="text-gray">Manage your account settings</p>
      <UserProfile user={user} />
    </div>
  );
}
