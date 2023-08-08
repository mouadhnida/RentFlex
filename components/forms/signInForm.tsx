"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

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
import { LucideLoader2 } from "lucide-react";

type Input = z.infer<typeof authSchema>;

export function SignInForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState<Boolean>(false);

  const form = useForm<Input>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  async function onSubmit(values: Input) {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push(`${window.location.origin}/`);
      } else {
        console.log(result);
      }
      setLoading(false);
    } catch (err: any) {
      toast({
        variant: "destructive",
        description: err.errors[0].longMessage,
      });
      setLoading(false);
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="**********"
                  {...field}
                  className=" placeholder:pt-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex h-10 w-full items-center">
          {loading && <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
          Sign in
        </Button>
      </form>
    </Form>
  );
}
