"use client";

import { useUser } from "@clerk/nextjs";
import { UserProfileSchema } from "@/lib/validations/userProfile";
import { User } from "@/types";
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
import { useState } from "react";

type Input = z.infer<typeof UserProfileSchema>;

export default function UserProfileForm(props: { user: User }) {
  const { isLoaded, isSignedIn, user } = useUser();
  // const [image, setImage] = useState<string>(user?.imageUrl ?? "");

  const handleImageChange = async (e: any) => {
    const selectedImage = e.target.files[0];
    try {
      if (selectedImage) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64data = reader.result as string;
          user?.setProfileImage({ file: base64data });
        };
        reader.readAsDataURL(selectedImage);
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const form = useForm<Input>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      firstName: props.user.username?.split(" ")[0],
      lastName: props.user.username?.split(" ")[1],
      email: user.primaryEmailAddress?.emailAddress,
      phone: props.user.phone,
      bio: props.user.bio,
    },
  });

  async function onSubmit(values: Input) {
    console.log(values);
  }

  return (
    <div className=" relative mx-auto mt-5 w-full max-w-[700px]">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center w-full">
            <label
              className="group relative -top-20 h-[100px] w-[100px] object-cover max-md:top-0"
              htmlFor="userProfile"
            >
              <Image
                className="transition duration-200 rounded-full group-hover:opacity-40 "
                src={user.imageUrl}
                width={100}
                height={100}
                alt={"user image"}
              />
              <span className="absolute hidden w-20 text-xs transition duration-200 left-3 top-11 group-hover:block">
                Change Image
              </span>
            </label>
            <input
              type="file"
              id="userProfile"
              accept="image/**"
              className="hidden"
              onChange={handleImageChange}
            ></input>
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
                      <Input placeholder="First Name" {...field} className="" />
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone" {...field} className="" />
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
                      <Input placeholder="Email" {...field} className="" />
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
