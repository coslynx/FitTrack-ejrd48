"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  GoalForm,
  GoalCard,
} from "@/components";
import { fetchUserGoals, createGoal, updateGoal, deleteGoal } from "@/lib/goals";
import { constants } from "@/utils/constants";

export default function UserGoal({ goal, onDelete, onEdit }: {
  goal: any;
  onDelete: Function;
  onEdit: Function;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(goal);

  const handleEditGoal = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingGoal(goal);
  };

  const handleUpdateGoal = async (updatedGoal) => {
    try {
      await updateGoal(updatedGoal);
      onDelete(goal.id);
      onEdit(updatedGoal);
    } catch (error) {
      console.error("Error updating goal:", error);
    } finally {
      setShowForm(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <GoalCard goal={goal} onDelete={onDelete} onEdit={handleEditGoal} />
      {showForm && (
        <GoalForm
          onSubmit={handleUpdateGoal}
          onClose={handleCloseForm}
          editingGoal={editingGoal}
        />
      )}
    </div>
  );
}