import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBadgeClasses = (variant: string) => {
  switch (variant) {
    case "red":
      return "bg-[#E90000] hover:bg-[#E90000]/80";
    case "white":
      return "bg-[#8B7101] hover:bg-[#8B7101]/80";
    case "rose":
      return "bg-[#E30063] hover:bg-[#E30063]/80";
    case "barrique":
      return "bg-[#A46429] hover:bg-[#A46429]/80";
    default:
      return "";
  }
};

export const getBadgeName = (variant: string) => {
  switch (variant) {
    case "red":
      return "Červené";
    case "white":
      return "Bílé";
    case "rose":
      return "Rosé";
    case "barrique":
      return "Barrique";
    default:
      return "";
  }
};