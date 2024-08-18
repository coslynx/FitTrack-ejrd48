"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WorkoutCardProps {
  workout: {
    id: string;
    createdAt: string;
    type: string;
    duration: number;
    intensity: string;
    caloriesBurned: number;
  };
  onDelete: (workoutId: string) => void;
  onEdit: (workoutId: string) => void;
}

export default function WorkoutCard({
  workout,
  onDelete,
  onEdit,
}: WorkoutCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Card className={cn("w-full", { "opacity-50": isDeleting })}>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-sm font-medium">
          {workout.type}
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onEdit(workout.id)}
            className="text-xs"
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            onClick={() => setIsDeleting(true)}
            className="text-xs"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-2 text-xs">
          <div>
            <span className="font-medium">Duration:</span>{" "}
            {workout.duration} minutes
          </div>
          <div>
            <span className="font-medium">Intensity:</span>{" "}
            {workout.intensity}
          </div>
          <div>
            <span className="font-medium">Calories Burned:</span>{" "}
            {workout.caloriesBurned}
          </div>
          <div>
            <span className="font-medium">Date:</span>{" "}
            {formatDate(new Date(workout.createdAt))}
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}