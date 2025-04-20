
import { MapPin, Phone, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pikipark Badajoz</h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-5 h-5 mt-1" />
              <p>C. Ramón Fernández Moreno, 4, 06006 Badajoz</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5" />
              <p>680 45 04 45</p>
            </div>
            <a 
              href="https://www.facebook.com/badajozPIKIPARK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Facebook className="w-5 h-5" />
              <span>Síguenos en Facebook</span>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Información Importante</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Reserva previa por teléfono obligatoria</li>
              <li>• Sistema de renovación de aire</li>
              <li>• Se debe dejar el local recogido</li>
              <li>• Disponemos de dos baños</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Pikipark Badajoz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
