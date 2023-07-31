import { type Metadata } from "next";
import { VerifyEmailForm } from "@/components/forms/VerifyEmailForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function SignUpPage() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-[446px]">
        <CardHeader>
          <CardTitle>Verify email</CardTitle>
          <CardDescription>
            Verify your email address to complete your account creation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </div>
  );
}
