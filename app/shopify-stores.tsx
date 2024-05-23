"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Y-N nos enseñó que hacer y como hacerlo.",
    name: "Marcos Gonzalez",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "No teníamos idea de como comenzar, peor Y-N nos mostró el camino. Ahora somos capaces de crear cosas asomobrosas.",
    name: "Pedro Canteros",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "El equipo de Y-N es asombroso. Nos ayudaron a crear una tienda asomobrosa de la cual estamos orgullosos.",
    name: "Elena Barrietos",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Shopify Stores <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          Creamos apantallantes tiendas diseñadas para dar confianza.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
