"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  HeroBanner,
  FeatureHighlights,
  LoginButton,
  SignupButton,
} from "@/components";
import { constants } from "@/utils/constants";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <HeroBanner />
      <FeatureHighlights />
      {!session && (
        <div className="flex gap-4">
          <LoginButton onClick={handleLogin} />
          <SignupButton onClick={handleSignup} />
        </div>
      )}
      {session && (
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome, {session.user.name}!</h2>
          <p className="text-lg">
            Let's start your fitness journey!
          </p>
          <button
            className="bg-primary text-white px-4 py-2 rounded-md mt-4"
            onClick={() => router.push("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      )}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {/* Implement login form */}
            <button
              className="bg-gray-300 px-4 py-2 rounded-md mt-4"
              onClick={handleCloseLogin}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            {/* Implement signup form */}
            <button
              className="bg-gray-300 px-4 py-2 rounded-md mt-4"
              onClick={handleCloseSignup}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}