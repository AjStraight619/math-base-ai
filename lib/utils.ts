import { clsx, type ClassValue } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (
  firstName: string | null | undefined,
  lastName: string | null | undefined
) => {
  return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getToastMessage = (
  error: string | null,
  success: boolean,
  successMessage: string
) => {
  if (error) {
    return toast.error(error);
  } else if (success) {
    return toast.success(successMessage);
  }
  return toast.error("Something went wrong");
};

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
