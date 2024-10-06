"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[23rem] flex items-center justify-center w-full text-base">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
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

const CARDS = [
  {
    id: 0,
    name: "Anna Kowalska",
    designation: "Klientka",
    content: (
      <p>
        Jestem pod wrażeniem profesjonalizmu i zaangażowania!{" "}
        <Highlight>Sprzedawczyni zawsze doradzała</Highlight> w sposób rzeczowy
        i pomocny. Dzięki niej znalazłam idealny produkt dopasowany do moich
        potrzeb.
      </p>
    ),
  },
  {
    id: 1,
    name: "Marek Nowak",
    designation: "Stały klient",
    content: (
      <p>
        Zakupy u tej sprzedawczyni to czysta przyjemność.{" "}
        <Highlight>Zawsze cierpliwie odpowiada na wszystkie pytania</Highlight>{" "}
        i proponuje świetne rozwiązania. Polecam każdemu, kto szuka
        profesjonalnej obsługi!
      </p>
    ),
  },
  {
    id: 2,
    name: "Ewa Wiśniewska",
    designation: "Zadowolona klientka",
    content: (
      <p>
        Nie spotkałam jeszcze kogoś tak zaangażowanego w swoją pracę.{" "}
        <Highlight>Szybka i sprawna obsługa</Highlight>, a do tego szeroka
        wiedza na temat produktów. Na pewno wrócę!
      </p>
    ),
  },
];
