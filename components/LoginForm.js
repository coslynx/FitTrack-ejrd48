"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { toast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const data = await signIn(formData.email, formData.password);

      if (data) {
        toast({
          description: "You have successfully logged in.",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        variant: "destructive",
        description: "Invalid email or password. Please try again.",
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
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}