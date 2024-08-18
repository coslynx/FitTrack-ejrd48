"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  GoalsLayout,
  GoalForm,
  GoalCard,
  GoalList,
  UserGoal,
} from "@/components";
import { fetchUserGoals, createGoal, updateGoal, deleteGoal } from "@/lib/goals";

export default function GoalsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingGoalId, setEditingGoalId] = useState(null);

  useEffect(() => {
    if (session) {
      setIsLoading(true);
      fetchUserGoals(session.user.id)
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [session]);

  const handleCreateGoal = async (newGoal) => {
    try {
      setIsLoading(true);
      await createGoal(session.user.id, newGoal);
      fetchUserGoals(session.user.id)
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        });
    } catch (error) {
      console.error("Error creating goal:", error);
    } finally {
      setIsLoading(false);
      setShowForm(false);
    }
  };

  const handleUpdateGoal = async (updatedGoal) => {
    try {
      setIsLoading(true);
      await updateGoal(updatedGoal);
      fetchUserGoals(session.user.id)
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        });
    } catch (error) {
      console.error("Error updating goal:", error);
    } finally {
      setIsLoading(false);
      setEditingGoalId(null);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      setIsLoading(true);
      await deleteGoal(goalId);
      fetchUserGoals(session.user.id)
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error("Error fetching goals:", error);
        });
    } catch (error) {
      console.error("Error deleting goal:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditGoal = (goalId) => {
    setEditingGoalId(goalId);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingGoalId(null);
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg">Please login to access your goals.</p>
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
    <GoalsLayout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Goals</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Add Goal
          </button>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center">
            <p className="text-lg">Loading...</p>
          </div>
        )}
        {goals.length > 0 ? (
          <GoalList>
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onDelete={handleDeleteGoal}
                onEdit={handleEditGoal}
              />
            ))}
          </GoalList>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg">You have no goals yet. Add your first goal!</p>
          </div>
        )}
      </div>
      {showForm && (
        <GoalForm
          onSubmit={editingGoalId ? handleUpdateGoal : handleCreateGoal}
          onClose={handleCloseForm}
          editingGoal={editingGoalId ? goals.find((g) => g.id === editingGoalId) : null}
        />
      )}
    </GoalsLayout>
  );
}