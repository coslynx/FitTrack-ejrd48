"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserProfile } from "@/components";
import { fetchUser } from "@/lib/auth";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      fetchUser(session.user.id)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [session]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg">Please login to access your profile.</p>
        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-primary text-white px-4 py-2 rounded-md mt-4"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <UserProfile user={user} />
    </div>
  );
}