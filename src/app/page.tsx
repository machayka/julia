"use client";

import Button from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { useEffect, useState } from "react";
import { Avatar } from "./components/Avatar";
import BusinessTitle from "./components/BusinessTitle";
import { CardStackDemo } from "./components/Recommendations";
import useRecommendations from "./hooks/getRecommendations.hook";
import useRecommendationImages from "./hooks/getRecommenderImage.hook";

export default function Home() {
  const { recommendations, loading, error } = useRecommendations();
  const { images, loadingImages, errorImages } = useRecommendationImages();
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("images: ", images);
  }, [images]);

  return (
    <div className="flex flex-col mt-16">
      <div className="text-left text-4xl leading-normal relative w-[95%] max-w-[400px] md:w-[400px] mx-auto">
        <BusinessTitle />
        <Avatar recommendationsLength={recommendations.length} />
        Julia Zając
        <br />
        <div className="text-black dark:text-white text-xl opacity-80 font-medium">
          Pomagam firmom zwiększać zyski poprzez{" "}
          <Highlight className="leading-relaxed">
            optymalizację procesów sprzedażowych
          </Highlight>
        </div>
        <div className="flex flex-row mt-8">
          <Button text={"Poleć"} ghost />
          <Button text={"Kontakt"} />
        </div>
        <CardStackDemo
          recommendations={recommendations}
          loading={loading || loadingImages}
          error={error}
          images={images}
        />
      </div>
    </div>
  );
}
