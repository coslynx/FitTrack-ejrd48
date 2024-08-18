"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  createUser,
  useSignupFormStore,
} from "@/lib/auth/signup-form-store";
import { toast } from "@/components/ui/use-toast";

export default function SignupForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const signupFormStore = useSignupFormStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const data = await createUser(signupFormStore.formData);

      if (data) {
        toast({
          description: "You have successfully signed up.",
        });

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        variant: "destructive",
        description: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        type="email"
        required
        {...signupFormStore.getInputProps("email")}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        {...signupFormStore.getInputProps("password")}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </Button>
    </form>
  );
}