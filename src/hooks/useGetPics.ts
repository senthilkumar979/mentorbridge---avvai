import { useState, useEffect, useCallback } from "react";
import {
  CLOUDINARY_FOLDERS,
  DEFAULT_TRANSFORMATION,
  DEFAULT_MAX_RESULTS,
} from "@/constants/cloudinary";

interface CloudinaryImage {
  id: string;
  src: string;
  title: string;
  alt: string;
  public_id: string;
  width: number;
  height: number;
  folder: string;
}

interface UseGetPicsOptions {
  folders?: string[];
  maxResults?: number;
  transformation?: string;
}

interface UseGetPicsReturn {
  images: CloudinaryImage[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  loadingProgress: {
    currentFolder: string | null;
    completedFolders: string[];
    totalFolders: number;
  };
}

export const useGetPics = (
  options: UseGetPicsOptions = {}
): UseGetPicsReturn => {
  const {
    folders = CLOUDINARY_FOLDERS,
    maxResults = DEFAULT_MAX_RESULTS,
    transformation = DEFAULT_TRANSFORMATION,
  } = options;

  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState({
    currentFolder: null as string | null,
    completedFolders: [] as string[],
    totalFolders: folders.length,
  });

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setImages([]);
    setLoadingProgress({
      currentFolder: null,
      completedFolders: [],
      totalFolders: folders.length,
    });

    const allImages: CloudinaryImage[] = [];
    const completedFolders: string[] = [];

    try {
      for (let i = 0; i < folders.length; i++) {
        const folder = folders[i];

        // Update loading progress
        setLoadingProgress({
          currentFolder: folder,
          completedFolders: [...completedFolders],
          totalFolders: folders.length,
        });

        console.log(
          `Fetching images from folder: ${folder} (${i + 1}/${folders.length})`
        );

        try {
          const response = await fetch(
            `/api/cloudinary/images?folder=${encodeURIComponent(
              folder
            )}&max_results=${maxResults}&transformation=${encodeURIComponent(
              transformation
            )}`
          );

          if (!response.ok) {
            console.warn(
              `Failed to fetch images from folder ${folder}: ${response.statusText}`
            );
            continue; // Skip this folder and continue with the next one
          }

          const data = await response.json();

          if (data.error) {
            console.warn(
              `Error fetching images from folder ${folder}:`,
              data.error
            );
            continue; // Skip this folder and continue with the next one
          }

          // Add folder information to each image
          const folderImages = (data.images || []).map(
            (image: CloudinaryImage) => ({
              ...image,
              folder: folder,
            })
          );

          allImages.push(...folderImages);
          completedFolders.push(folder);

          console.log(
            `Successfully fetched ${folderImages.length} images from folder: ${folder}`
          );
          console.log(`Total images so far: ${allImages.length}`);

          // Update images state after each folder (for progressive loading)
          setImages([...allImages]);

          // Update loading progress
          setLoadingProgress({
            currentFolder: i < folders.length - 1 ? folders[i + 1] : null,
            completedFolders: [...completedFolders],
            totalFolders: folders.length,
          });

          // Add a small delay between folder requests to avoid overwhelming the API
          if (i < folders.length - 1) {
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (folderError) {
          console.warn(
            `Error fetching images from folder ${folder}:`,
            folderError
          );
          // Continue with the next folder
        }
      }

      console.log(
        `Completed fetching images from all folders. Total images: ${allImages.length}`
      );
      console.log(
        `Successfully loaded from folders: ${completedFolders.join(", ")}`
      );

      if (allImages.length === 0) {
        setError("No images found in any of the specified folders");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch images";
      setError(errorMessage);
      console.error("Error fetching images:", err);
    } finally {
      setIsLoading(false);
      setLoadingProgress({
        currentFolder: null,
        completedFolders: [...completedFolders],
        totalFolders: folders.length,
      });
    }
  }, [folders, maxResults, transformation]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return {
    images,
    isLoading,
    error,
    refetch: fetchImages,
    loadingProgress,
  };
};
