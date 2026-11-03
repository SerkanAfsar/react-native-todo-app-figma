import AsynStorage from "@react-native-async-storage/async-storage";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export async function SetItem<T extends object>({
  key,
  value,
}: {
  key: string;
  value: T;
}): Promise<boolean> {
  try {
    await AsynStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getItem<T extends object>({
  key,
}: {
  key: string;
}): Promise<T | null> {
  try {
    const item = await AsynStorage.getItem(key);
    if (!item) {
      throw new Error("İtem is Null");
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getGreeting = (): string => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  }

  if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  }

  return "Good Evening";
};
