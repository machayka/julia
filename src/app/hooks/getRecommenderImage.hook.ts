import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import { useEffect, useState } from "react";

export type RecommendatorImage = {
  id: string;
  url: string;
};

const useRecommendationImages = () => {
  const [images, setImages] = useState<RecommendatorImage[]>([]);
  const [loadingImages, setLoading] = useState<boolean>(true);
  const [errorImages, setError] = useState<string | null>(null);

  const fetchFilesRecursively = async (
    folderRef: StorageReference
  ): Promise<RecommendatorImage[]> => {
    const result = await listAll(folderRef);

    const filePromises = result.items.map(async (item) => {
      const url = await getDownloadURL(item);
      return { id: item.fullPath, url };
    });

    const subfolderPromises = result.prefixes.map((subfolderRef) => {
      return fetchFilesRecursively(subfolderRef);
    });

    const files = await Promise.all(filePromises);
    const subfolderFiles = await Promise.all(subfolderPromises);

    return [...files, ...subfolderFiles.flat()];
  };

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();
      const listRef = ref(storage, "recommendations");

      try {
        const allFiles = await fetchFilesRecursively(listRef);

        if (allFiles.length === 0) {
          console.warn("No files found in 'recommendations/' folder.");
        } else {
          console.log(`${allFiles.length} files found.`);
        }

        setImages(allFiles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Could not fetch images.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loadingImages, errorImages };
};

export default useRecommendationImages;
