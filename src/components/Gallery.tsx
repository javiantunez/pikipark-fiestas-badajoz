
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Utilidad para ordenar alfabéticamente por nombre de archivo
const sortImagesByFilename = (images: {src: string, alt: string}[]) => {
  return [...images].sort((a, b) => {
    const nameA = a.src.split('/').pop() || "";
    const nameB = b.src.split('/').pop() || "";
    return nameA.localeCompare(nameB);
  });
};

const galleryItemsRaw = {
  parque: [
    { src: "/archivos/Parque.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque1.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque2.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque3.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque4.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque5.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque6.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque7.jpeg", alt: "Parque de Bolas" },
    { src: "/archivos/Parque8.jpeg", alt: "Parque de Bolas" },
  ],
  cocina: [
    { src: "/archivos/Cocina1.jpeg", alt: "Zona de cocina" },
    { src: "/archivos/Cocina2.jpeg", alt: "Zona de cocina" },
    { src: "/archivos/Cocina3.jpeg", alt: "Zona de cocina" },
    { src: "/archivos/Cocina4.jpeg", alt: "Zona de cocina" },
  ],
  futbol: [
    { src: "/archivos/Futbol.jpeg", alt: "Campo de fútbol" },
    { src: "/archivos/Futbol1.jpeg", alt: "Campo de fútbol" },
    { src: "/archivos/Futbol2.jpeg", alt: "Campo de fútbol" },
    { src: "/archivos/Futbol3.jpeg", alt: "Campo de fútbol" },
  ],
  salon: [
    { src: "/archivos/Comun1.jpeg", alt: "Salón principal" },
    { src: "/archivos/Comun2.jpeg", alt: "Salón principal" },
  ]
};

// Ordenar imágenes de cada zona
const galleryItems = Object.fromEntries(
  Object.entries(galleryItemsRaw).map(([zone, images]) => [
    zone,
    sortImagesByFilename(images)
  ])
);

const allImages = Object.values(galleryItems).flat();

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("parque");
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Instalaciones</h2>
        <div className="mb-8">
          <Carousel>
            <CarouselContent>
              {allImages.map((image, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-w-lg h-64 object-cover rounded-xl shadow"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Tabs defaultValue="parque" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="parque" className="px-4 py-2">Parque de Bolas</TabsTrigger>
            <TabsTrigger value="cocina" className="px-4 py-2">Cocina</TabsTrigger>
            <TabsTrigger value="futbol" className="px-4 py-2">Zona Deportiva</TabsTrigger>
            <TabsTrigger value="salon" className="px-4 py-2">Salón</TabsTrigger>
          </TabsList>
          {Object.entries(galleryItems).map(([zone, images]) => (
            <TabsContent key={zone} value={zone}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
