"use client";

import { CardRotator } from "@/components/ui/card-stack";
import { Ratings } from "@/components/ui/ratings";
import { cn } from "@/lib/utils";
import { FirebaseError } from "firebase/app";
import React from "react";
import { Recommendation } from "../hooks/getRecommendations.hook";
import { RecommendatorImage } from "../hooks/getRecommenderImage.hook";
import { SkeletonRecommendation } from "./SkeletonRecommendation";

// Komponent Highlight do podświetlania treści
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-gradient-to-r from-indigo-500/[0.3] to-purple-500/[0.3] text-black dark:text-white px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};

// Komponent ParseWithHighlight z zamianą \n na <br />
export const ParseWithHighlight = ({ text }: { text: string }) => {
  const parts = text.split(/(\*[^*]+\*)/g);

  return (
    <p>
      {parts.map((part, index) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <Highlight key={index}>{part.slice(1, -1)}</Highlight>
        ) : (
          part.split("/n").map((line, lineIndex) => (
            <React.Fragment key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < part.split("\n").length - 1 && <br />}{" "}
            </React.Fragment>
          ))
        )
      )}
    </p>
  );
};

// Główna funkcja renderująca CardStack z rekomendacjami
export function CardStackDemo({
  recommendations,
  loading,
  error,
  images,
}: {
  recommendations: Recommendation[];
  loading: boolean;
  error: FirebaseError | null;
  images: RecommendatorImage[];
}) {
  if (loading) {
    return <SkeletonRecommendation />; // Wyświetlanie komunikatu ładowania
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Obsługa błędów
  }

  const findImageById = (recId: string) => {
    const image = images.find((img) => img.id.includes(recId));
    return image ? image.url : "/default-image.jpg"; // Domyślne zdjęcie, jeśli brak
  };

  // Renderowanie kart z rekomendacjami, jeśli są dostępne
  const cards = recommendations.map((rec: Recommendation) => ({
    id: rec.id,
    name: rec.name,
    link: rec.link,
    designation: rec.role,
    image: findImageById(rec.id),
    content: (
      <div>
        <div className="mb-2 flex justify-between w-full">
          <div className="flex items-start opacity-50">
            {rec.date.toDate().toLocaleDateString()}
          </div>
          <div className="flex items-start">
            <Ratings rating={rec.rate} variant="yellow" totalstars={5} />
          </div>
        </div>

        <ParseWithHighlight text={rec.description} />
      </div>
    ),
  }));

  return (
    <div className="mt-16 flex items-center justify-center w-full text-base mb-16">
      <CardRotator items={cards} />
    </div>
  );
}
