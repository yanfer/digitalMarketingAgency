import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Tiene preguntas ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Obten respuestas.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Que es Y-N ?</AccordionTrigger>
      <AccordionContent>
        Y-N es una agencia de marketing completa que se especializa en branding, diseño web y marketing digital.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Como comenzar ?</AccordionTrigger>
      <AccordionContent>
        Puedes empezar poniéndote en contacto con nosotros. Nos comunicaremos contigo dentro de las 24 horas.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Precios ?
      </AccordionTrigger>
      <AccordionContent>
        Ofrecemos soluciones personalizadas a medida para su negocio. Contáctanos para obtener una cotización.
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Soporte ?
        </AccordionTrigger>
      <AccordionContent>
        Ofrecemos soporte de lunes a viernes para todos nuestros clientes.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;
