import { FirebaseError } from "firebase/app";
import {
  collection,
  DocumentData,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// Import Firebase Timestamp (używane dla dat)
import { Timestamp } from "firebase/firestore";

export type Recommendation = {
  id: string;
  description: string;
  name: string;
  role: string;
  date: Timestamp;
  rate: number;
  link?: string;
};

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirebaseError | null>(null);

  useEffect(() => {
    const db = getFirestore();
    const recommendationsRef = collection(db, "recommendations");

    const unsubscribe = onSnapshot(
      recommendationsRef,
      (snapshot) => {
        const data: Recommendation[] = snapshot.docs.map(
          (doc: DocumentData) => ({
            id: doc.id, // Przypisanie id z dokumentu Firestore
            ...doc.data(),
          })
        );
        setRecommendations(data);
        setLoading(false);
      },
      (error: FirebaseError) => {
        console.error("Error fetching recommendations: ", error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup: odsubskrybowanie, gdy komponent zostanie unmountowany
    return () => unsubscribe();
  }, []);
  return { recommendations, loading, error };
};

export default useRecommendations;
