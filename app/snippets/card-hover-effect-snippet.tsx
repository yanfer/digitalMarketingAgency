import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Diseño web",
        description:
          "Creamos sitios web totalmente responsivos que se ven geniales en todos los dispositivos. Nuestros sitios web están diseñados para convertir visitantes en clientes.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Tiendas E-commerce",
        description:
          "Desde pequeñas tiendas hasta grandes minoristas en línea, tenemos la experiencia para crear una tienda que le ayudará a hacer crecer su negocio.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Autenticación",
        description:
          "Soluciones de autenticación segura para su sitio web o aplicación. Utilizamos la última tecnología para mantener sus datos seguros.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Social Media",
        description:
          "Ofrecemos servicios de gestión de redes sociales y creación de anuncios. Podemos ayudarle a aumentar su presencia en las redes sociales y llegar a nuevos clientes.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Desarrollo de aplicaciones",
        description:
          "Creamos aplicaciones móviles personalizadas para iOS y Android. Nuestras aplicaciones están diseñadas para ser fáciles de usar y eficientes.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Soporte",
        description:
          "Ofrecemos soporte para todos nuestros clientes. Estamos aquí para ayudarle con cualquier problema o pregunta que pueda tener.",
     
      },
];
