import { GOAL_TYPES, WORKOUT_TYPES, INTENSITY_LEVELS } from "./constants";

export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const validateGoal = (goal) => {
  if (!goal.type || !GOAL_TYPES.includes(goal.type)) {
    return "Invalid goal type.";
  }
  if (
    !goal.target ||
    typeof goal.target !== "number" ||
    goal.target <= 0
  ) {
    return "Invalid goal target.";
  }
  if (!goal.deadline || !isValidDate(goal.deadline)) {
    return "Invalid goal deadline.";
  }
  return null;
};

export const validateWorkout = (workout) => {
  if (!workout.type || !WORKOUT_TYPES.includes(workout.type)) {
    return "Invalid workout type.";
  }
  if (
    !workout.duration ||
    typeof workout.duration !== "number" ||
    workout.duration <= 0
  ) {
    return "Invalid workout duration.";
  }
  if (
    !workout.intensity ||
    !INTENSITY_LEVELS.includes(workout.intensity)
  ) {
    return "Invalid workout intensity.";
  }
  return null;
};

const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

export const calculateGoalProgress = (goal, workouts) => {
  // Implement the logic to calculate the goal progress based on workouts.
  // Example:
  // Calculate total calories burned from workouts related to the goal.
  // Calculate progress based on the target and calories burned.
  return 0;
};