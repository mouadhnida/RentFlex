"use client";

import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { UserProfileSchema } from "@/lib/validations/userProfile";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

type Input = z.infer<typeof UserProfileSchema>;

export default function UserProfileForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  const form = useForm<Input>({
    resolver: zodResolver(UserProfileSchema),
  });

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      form.setValue("firstName", user.firstName ?? "");
      form.setValue("lastName", user.lastName ?? "");
      form.setValue("email", user.primaryEmailAddress?.emailAddress as string);
      form.setValue(
        "bio",
        (user.unsafeMetadata as { bio?: string })?.bio ?? ""
      );
    }
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      try {
        await user.setProfileImage({ file: selectedImage });
      } catch (error: any) {
        console.error("Error updating image:", error.message);
      }
    }
  };

  async function onSubmit(values: Input) {
    const { firstName, lastName } = values;
    try {
      const result = await user?.update({
        unsafeMetadata: { bio: values.bio },
        firstName,
        lastName,
      });
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" relative mx-auto mt-5 w-full max-w-[700px]">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center w-full">
            <label
              className="group relative -top-20 h-[100px] w-[100px] overflow-hidden object-cover max-md:top-0"
              htmlFor="userProfile"
            >
              <Image
                className="min-h-[100px] max-w-[100px] rounded-full transition duration-200 group-hover:opacity-40 "
                src={user.imageUrl}
                width={100}
                height={100}
                alt={"user image"}
              />
              <span className="absolute hidden w-20 text-xs transition duration-200 left-3 top-11 group-hover:block">
                Change Image
              </span>
            </label>
            <Input
              type="file"
              id="userProfile"
              accept="image/**"
              className="hidden"
              onChange={handleImageChange}
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FirstName</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LastName</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        disabled
                        {...field}
                        className="border border-slate-300 bg-slate-200 dark:border-border dark:bg-border"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                        className="h-36"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="h-10">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
