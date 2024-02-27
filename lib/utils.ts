import { clsx, type ClassValue } from "clsx";
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
