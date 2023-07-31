import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { SignUpForm } from "@/components/forms/SignUpForm";
import OauthSignIn from "@/components/OauthSignIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to your account",
};

export default async function SignUpPage() {
  const user = await currentUser();
  if (user) {
    redirect("/");
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OauthSignIn />
          <Separator />
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm dark:text-gray">
            Already have an account?{" "}
            <Link
              href={"/signin"}
              className="underline-offset-4 hover:underline dark:text-white"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
