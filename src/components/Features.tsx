
import { Instagram } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Instalaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Parque de Bolas</h3>
            <p className="text-gray-600">Amplio parque de bolas con toboganes, túneles y zona de juegos para todas las edades.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Zona Deportiva</h3>
            <p className="text-gray-600">Zona de juegos y actividades deportivas para todas las edades.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sala de Celebraciones</h3>
            <p className="text-gray-600">Amplia sala climatizada equipada con mesas, sillas y todo lo necesario para tu celebración.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <rect x="8" y="12" width="8" height="4" rx="1" />
                <rect x="7" y="10" width="10" height="2" rx="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cocina Equipada</h3>
            <p className="text-gray-600"> Cocina con frigorífico, microondas y zona para preparar meriendas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 17L17 6M6 6l11 11" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Baños Adaptados</h3>
            <p className="text-gray-600">Dos baños disponibles, adaptados para peques y adultos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Instagram className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">¡Síguenos en Instagram!</h3>
            <a href="https://www.instagram.com/piki__park" target="_blank" className="text-pink-500 hover:underline">Ver perfil</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
