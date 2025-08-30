import ContactForm from "./form";

const Contact = () => {
  const iframeSrc =
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Univerexport%20Jug%20Bogdana%2025%20In%C4%91ija,%20Jug%20Bogdana,%20In%C4%91ija,%20Serbia&ie=UTF8&t=&z=14&iwloc=B&ll=45.046990,20.085370&output=embed";

  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            src={iframeSrc}
            className="w-full h-full absolute inset-0 border-0 filter grayscale-100 contrast-120 opacity-40"
            scrolling="no"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
