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

/**
 * Creates a snippet from the provided content.
 *
 * @param content The full text content from which to create the snippet.
 * @param maxLength The maximum length of the snippet. Defaults to 100 characters.
 * @returns A string representing the snippet.
 */
export const createSnippet = (
  content: string | null,
  maxLength: number = 100
): string => {
  if (!content) return "";
  content = content.trim();

  if (content.length <= maxLength) {
    return content;
  }

  const lastSpaceIndex = content.lastIndexOf(" ", maxLength);
  const snippetEndIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength;

  return `${content.substring(0, snippetEndIndex)}...`;
};

export const getMonthAndDay = (date: Date) => {
  const dateStr = date.toDateString();
  const [_, month, day, __] = dateStr.split(" ");

  return `${month} ${day}`;
};
