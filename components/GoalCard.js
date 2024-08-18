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

interface GoalCardProps {
  goal: {
    id: string;
    createdAt: string;
    type: string;
    target: number;
    deadline: string;
    progress: number;
  };
  onDelete: (goalId: string) => void;
  onEdit: (goalId: string) => void;
}

export default function GoalCard({
  goal,
  onDelete,
  onEdit,
}: GoalCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Card className={cn("w-full", { "opacity-50": isDeleting })}>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-sm font-medium">
          {goal.type}
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onEdit(goal.id)}
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
            <span className="font-medium">Target:</span>{" "}
            {goal.target} {goal.type === "weight loss" ? "lbs" : ""}
          </div>
          <div>
            <span className="font-medium">Deadline:</span>{" "}
            {formatDate(new Date(goal.deadline))}
          </div>
          <div>
            <span className="font-medium">Progress:</span>{" "}
            {goal.progress}%
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}