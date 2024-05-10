import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getMealsData(
  dietType: string,
  cuisineType: string,
  mealType: string
) {
  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}&diet=${dietType}&cuisineType=${cuisineType}&mealType=${mealType}&imageSize=LARGE&random=true`,
    { next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
