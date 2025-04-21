
const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold mb-2">Reserva tu Fiesta</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Solo se aceptan reservas por teléfono.</strong>
          </p>
          <p className="text-2xl font-bold text-purple-600 mb-4">
            680 45 04 45
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Recuerda:</strong> Es obligatorio reservar por teléfono para asegurar tu fecha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

