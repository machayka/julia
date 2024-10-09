"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Card = {
  id: string;
  name: string;
  designation: string;
  content: React.ReactNode;
  link: string | undefined;
  image: string;
};

export const CardRotator = ({
  items,
  intervalTime = 5000,
}: {
  items: Card[];
  intervalTime?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Stan do sprawdzania, czy jest hover

  useEffect(() => {
    if (isHovered) return; // Wstrzymanie, gdy karta jest pod myszką

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items, intervalTime, isHovered]);

  const currentCard = items[currentIndex];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative h-60 w-full mx-2 md:h-60"
      onMouseEnter={handleMouseEnter} // Zatrzymanie automatycznego przełączania na hover
      onMouseLeave={handleMouseLeave} // Wznowienie automatycznego przełączania po opuszczeniu
    >
      <motion.div
        key={currentCard.id}
        className={`relative dark:bg-black bg-white h-fit mx-2 rounded-3xl p-4 shadow-xl border ${
          isHovered ? "border-neutral-300 bg-zinc-50" : "border-neutral-200"
        } transition-colors duration-300 ease-in-out dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between`}
        style={{
          transformOrigin: "top center",
        }}
        initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
        }}
        exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <div className="font-normal text-neutral-700 dark:text-neutral-200 mb-8">
          {currentCard.content}
        </div>
        <div className="flex">
          <div className="min-w-12">
            <Image
              height={100}
              width={100}
              src={currentCard.image}
              alt={currentCard.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-8 w-8 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>

          <div className="ml-3">
            <a
              className={`text-neutral-500 dark:text-white font-semibold ${
                currentCard.link && "underline"
              }`}
              href={currentCard.link}
              target="_blank"
            >
              {currentCard.name}
            </a>
            <p className="text-neutral-400 dark:text-neutral-200 font-light opacity-75 text-sm mt-1">
              {currentCard.designation}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
