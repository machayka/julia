"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { useEffect, useState } from "react";
import { Background } from "./components/Background";

export default function Home() {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  // Ustawienie stanu `isMounted` po zamontowaniu komponentu
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Background>
      With insomnia, nothing&apos;s real. Everything is far away. Everything is
      a{" "}
      <Highlight className="text-black dark:text-white">
        copy, of a copy, of a copy.
      </Highlight>
    </Background>
  );
}
