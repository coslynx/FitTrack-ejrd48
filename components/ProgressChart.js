"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchUserWorkouts } from "@/lib/workouts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function ProgressChart() {
  const { data: session } = useSession();
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (session) {
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    }
  }, [session]);

  const workoutData = workouts.map((workout) => ({
    date: new Date(workout.createdAt).toLocaleDateString(),
    caloriesBurned: workout.caloriesBurned,
  }));

  return (
    <LineChart width={500} height={300} data={workoutData}>
      <XAxis dataKey="date" tickFormatter={(date) => date.slice(0, 5)} />
      <YAxis dataKey="caloriesBurned" />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="caloriesBurned" stroke="#8884d8" />
    </LineChart>
  );
}