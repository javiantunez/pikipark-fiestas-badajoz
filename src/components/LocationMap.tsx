
const LocationMap = () => {
  return (
    <div className="w-full flex justify-center items-center my-12">
      <iframe
        title="Pikipark Badajoz ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.3762399955105!2d-6.976582!3d38.8665042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15e189dde9a59b%3A0xfd439272407cf1ba!2sC.%20Ram%C3%B3n%20Fern%C3%A1ndez%20Moreno%2C%204%2C%2006006%20Badajoz!5e0!3m2!1ses!2ses!4v1713816043810!5m2!1ses!2ses"
        width="100%"
        height="350"
        allowFullScreen={true}
        loading="lazy"
        style={{ border: 0, borderRadius: "1rem", minHeight: "300px", maxWidth: "800px" }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
