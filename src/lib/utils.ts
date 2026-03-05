import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function seededRandom(seed: number) {
    const value = Math.sin(seed * 9999.91) * 10000;
    return value - Math.floor(value);
}
