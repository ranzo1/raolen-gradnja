import ContactForm from "./form";

const Contact = () => {
  const iframeSrc =
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Univerexport%20Jug%20Bogdana%2025%20In%C4%91ija,%20Jug%20Bogdana,%20In%C4%91ija,%20Serbia&ie=UTF8&t=&z=14&iwloc=B&ll=45.046990,20.085370&output=embed";

  return (
    <section className="text-gray-600 body-font" id="contact">
      <div className="container  mx-auto px-5 py-16">
        {/* Header (optional, improves hierarchy) */}
        <div className="mb-8 sm:mb-10 text-center"></div>

        {/* Balanced grid: equal columns on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map card */}
          <div className="relative rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm p-4 sm:p-6">
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-lg overflow-hidden">
              <iframe
                title="map"
                src={iframeSrc}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Optional caption */}
            <p className="mt-3 text-xs text-gray-500">
              Jug Bogdana 29, Inđija, Srbija
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-4 sm:p-6">
            <ContactForm />
          </div>
        </div>

        {/* Subtle section footer spacing */}
        <div className="mt-6" />
      </div>
    </section>
  );
};

export default Contact;
