
import { Phone, MapPin, Facebook, MessageSquare, Instagram } from "lucide-react";

const openWhatsApp = (phoneNumber: string) => {
  const cleanedPhoneNumber = phoneNumber.replace(/\s/g, '');
  
  // Detect if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  const baseUrl = isMobile 
    ? `whatsapp://send?phone=34${cleanedPhoneNumber}` 
    : `https://wa.me/34${cleanedPhoneNumber}`;
  
  window.open(baseUrl, '_blank');
};

const HeroSection = () => {
  const phoneNumber = "680 45 04 45";

  return (
    <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 py-20">
      {/* Imagen a ancho completo */}
      <div className="w-full overflow-hidden">
        <img 
          src="/lovable-uploads/4337d79a-8533-4a07-948c-db9dd5401fca.png" 
          alt="Pikipark Interior" 
          className="w-full object-cover max-h-[400px] md:max-h-[500px] mb-8"
          style={{ minHeight: "200px" }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
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
            <button 
              onClick={() => openWhatsApp("680 45 04 45")}
              className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-full text-white hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">WhatsApp</span>
            </button>
            <a href="https://www.facebook.com/badajozPIKIPARK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="font-semibold">Síguenos en Facebook</span>
            </a>
            <a href="https://www.instagram.com/piki__park" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

