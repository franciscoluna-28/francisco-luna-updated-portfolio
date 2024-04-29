import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Downloads a file from a given URL.
 * @param fileUrl The URL of the file to download.
 * @param fileName The name of the file that will be shown to the end user.
 */
export function downloadFile(
  fileUrl: string,
  fileName: string
): void {
  try {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Append the anchor to the document body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up: remove the anchor from the document body
    document.body.removeChild(link);
  } catch (error) {
    // Handle network errors or invalid URLs
    console.error("Error downloading the file:", error);
  }
}
