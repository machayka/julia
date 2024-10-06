"use client";

import Button from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { useEffect, useState } from "react";
import { Avatar } from "./components/Avatar";
import { Background } from "./components/Background";
import BusinessTitle from "./components/BusinessTitle";
import { CardStackDemo } from "./components/Opinions";

export default function Home() {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Background>
      <div className="flex flex-col lg:flex-row mt-12 align-middle text-center">
        <div className="text-left text-4xl leading-normal relative w-[95%] max-w-[400px] md:w-[400px] mx-auto">
          <BusinessTitle />
          <Avatar />
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
          <CardStackDemo />
        </div>
      </div>
    </Background>
  );
}
