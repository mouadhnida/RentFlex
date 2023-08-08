import { type Metadata } from "next";
import { SignInForm } from "@/components/forms/signInForm";
import { currentUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import Link from "next/link";
import OauthSignIn from "@/components/auth/OauthSignIn";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function SignInPage() {
  const user = await currentUser();
  if (user) {
    redirect("/");
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OauthSignIn />
          <Separator />
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm dark:text-gray">
            Don't have an account?{" "}
            <Link
              href={"/signup"}
              className="underline-offset-4 hover:underline dark:text-white"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
