"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  WorkoutsLayout,
  WorkoutForm,
  WorkoutCard,
  WorkoutList,
  UserWorkout,
} from "@/components";
import {
  fetchUserWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "@/lib/workouts";

export default function WorkoutsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingWorkoutId, setEditingWorkoutId] = useState(null);

  useEffect(() => {
    if (session) {
      setIsLoading(true);
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [session]);

  const handleCreateWorkout = async (newWorkout) => {
    try {
      setIsLoading(true);
      await createWorkout(session.user.id, newWorkout);
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    } catch (error) {
      console.error("Error creating workout:", error);
    } finally {
      setIsLoading(false);
      setShowForm(false);
    }
  };

  const handleUpdateWorkout = async (updatedWorkout) => {
    try {
      setIsLoading(true);
      await updateWorkout(updatedWorkout);
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    } catch (error) {
      console.error("Error updating workout:", error);
    } finally {
      setIsLoading(false);
      setEditingWorkoutId(null);
    }
  };

  const handleDeleteWorkout = async (workoutId) => {
    try {
      setIsLoading(true);
      await deleteWorkout(workoutId);
      fetchUserWorkouts(session.user.id)
        .then((data) => {
          setWorkouts(data);
        })
        .catch((error) => {
          console.error("Error fetching workouts:", error);
        });
    } catch (error) {
      console.error("Error deleting workout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditWorkout = (workoutId) => {
    setEditingWorkoutId(workoutId);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingWorkoutId(null);
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg">Please login to access your workouts.</p>
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
    <WorkoutsLayout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Workouts</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Add Workout
          </button>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading...</p>
          </div>
        )}
        {workouts.length > 0 ? (
          <WorkoutList>
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onDelete={handleDeleteWorkout}
                onEdit={handleEditWorkout}
              />
            ))}
          </WorkoutList>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg">You have no workouts yet. Log your first workout!</p>
          </div>
        )}
      </div>
      {showForm && (
        <WorkoutForm
          onSubmit={editingWorkoutId ? handleUpdateWorkout : handleCreateWorkout}
          onClose={handleCloseForm}
          editingWorkout={
            editingWorkoutId
              ? workouts.find((w) => w.id === editingWorkoutId)
              : null
          }
        />
      )}
    </WorkoutsLayout>
  );
}