
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
    { src: "/lovable-uploads/85a8d2b3-3896-4c6d-8b9a-37e05b8c5b69.png", alt: "Toboganes del parque" },
    { src: "/lovable-uploads/aaed14ac-8232-49d1-8a2a-efc72d4be583.png", alt: "Estructura de juegos" },
    { src: "/lovable-uploads/ddc19a15-fbb8-4bad-a564-21a4d48d5b6e.png", alt: "Parque de bolas principal" },
  ],
  cocina: [
    { src: "/lovable-uploads/2a20e515-bbb4-4e00-bbc0-5aba55a2ded8.png", alt: "Zona de cocina" },
    { src: "/lovable-uploads/971d3d38-5bf5-4dea-8ef7-5e9387ca293f.png", alt: "Cocina equipada" },
  ],
  futbol: [
    { src: "/lovable-uploads/0acadf0a-9641-4448-8baa-1d457a974ee8.png", alt: "Campo de fútbol" },
    { src: "/lovable-uploads/486e036f-2bdd-4efe-b56b-2de489a46d3a.png", alt: "Portería" },
  ],
  salon: [
    { src: "/lovable-uploads/0b3c673f-41f1-42fe-96bd-a89c19f2b177.png", alt: "Salón principal" },
    { src: "/lovable-uploads/4b14a9e5-9ee3-4fc4-931f-791e0d95fa96.png", alt: "Zona de mesas" },
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
