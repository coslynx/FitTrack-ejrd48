"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DashboardLayout,
  GoalCard,
  ProgressChart,
  WorkoutCard,
  SocialFeed,
  UserProfile,
  UserGoal,
} from "@/components";
import { fetchUserGoals, fetchUserWorkouts } from "@/lib/goals";
import { fetchUser } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (session) {
      fetchUser(session.user.id)
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
      fetchUserGoals(session.user.id)
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        });
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    }
  }, [session]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg">Please login to access the dashboard.</p>
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
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Workouts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {workouts.slice(0, 3).map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Your Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {goals.slice(0, 3).map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <ProgressChart />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-bold mb-4">Social Feed</h2>
          <SocialFeed />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-xl font-bold mb-4">Profile</h2>
          <UserProfile user={user} />
        </div>
      </div>
    </DashboardLayout>
  );
}