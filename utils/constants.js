export const API_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";
export const API_BASE_URL = `${API_URL}/api`;
export const AUTH_BASE_URL = `${API_URL}/auth`;

export const GOAL_TYPES = [
  "weight loss",
  "muscle gain",
  "distance running",
  "strength training",
  "calorie deficit",
  "calorie surplus",
];

export const WORKOUT_TYPES = [
  "cardio",
  "strength training",
  "yoga",
  "pilates",
  "HIIT",
  "walking",
  "running",
  "swimming",
  "cycling",
];

export const INTENSITY_LEVELS = ["low", "medium", "high"];

export const DEFAULT_THEME = "system";

export const THEME_OPTIONS = ["system", "dark", "light"];

export const ROUTES = {
  DASHBOARD: "/dashboard",
  GOALS: "/goals",
  WORKOUTS: "/workouts",
  SOCIAL: "/social",
  PROFILE: "/profile",
  SIGN_IN: "/auth/signin",
  SIGN_UP: "/auth/signup",
};