"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Fue el mejor de los tiempos, fue el peor de los tiempos, fue la era de la sabiduría, fue la era de la necedad, fue la época de la fe, fue la época de la incredulidad, fue la estación de la Luz, fue la época de la Era la estación de la Oscuridad, era la primavera de la esperanza, era el invierno de la desesperación.",
    name: "Charles Dickens",
    title: "Un cuento sobre dos ciudades",
  },
  {
    quote:
      "Ser o no ser, ese es el dilema: si es más noble para la mente sufrir los golpes y las flechas de la fortuna escandalosa, o tomar las armas contra un mar de problemas, y oponiéndose a ellos acabar: morir, morir. dormir.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Todo lo que vemos o parecemos no es más que un sueño dentro de un sueño.",
    name: "Edgar Allan Poe",
    title: "Un sueño dentro de un sueño",
  },
  {
    quote:
      "Es una verdad universalmente reconocida que un hombre soltero en posesión de una buena fortuna debe necesitar una esposa.",
    name: "Jane Austen",
    title: "Orgullo y prejuicio",
  },
  {
    quote:
      "Llámame Ismael. Hace algunos años (no importa cuántos exactamente), teniendo poco o ningún dinero en mi bolso y nada particular que me interesara en tierra, pensé en navegar un poco y ver la parte acuática del mundo.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
