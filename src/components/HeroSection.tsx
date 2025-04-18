
import { Phone, MapPin, Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/4337d79a-8533-4a07-948c-db9dd5401fca.png" 
            alt="Pikipark Interior" 
            className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¡Celebra tu fiesta en Pikipark!
          </h1>
          <p className="text-xl text-white mb-8">
            El lugar perfecto para celebrar cumpleaños y eventos infantiles en Badajoz
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="tel:680450445" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-purple-600 hover:bg-purple-50 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">680 45 04 45</span>
            </a>
            <a href="https://www.facebook.com/badajozPIKIPARK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="font-semibold">Síguenos en Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
