import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const recommendationsRef = collection(db, "recommendations");

    const unsubscribe = onSnapshot(
      recommendationsRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // setRecommendations(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching recommendations: ", error);
        // setError(error);
        setLoading(false);
      }
    );

    // Cleanup: odsubskrybowanie, gdy komponent zostanie unmountowany
    return () => unsubscribe();
  }, []);

  return { recommendations, loading, error };
};

export default useRecommendations;
