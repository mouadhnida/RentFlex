"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import { authSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Input = z.infer<typeof authSchema>;

export function SignUpForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signUp } = useSignUp();

  const form = useForm<Input>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: Input) {
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: values.email,
        //password: values.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      router.push("/signup/verifyemail");

      toast({
        title: "Check your email",
        description: "We sent  you a 6-digit verification code.",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        description: err.errors[0].longMessage,
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full h-10">Continue</Button>
      </form>
    </Form>
  );
}
