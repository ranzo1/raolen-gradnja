"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Pagination } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const objectsData = [
  {
    img: "/objects/img-1.png",
    message: `Kako smo sklopili saradnju sa firmom Univer Export, naši stanari imaju privilegiju uživanja u sopstvenom marketu. 
    Ovaj market nije samo obična prodavnica, ona je domaćin širokom spektru svežih namirnica, osnovnih potrepština i proizvoda vrhunskog kvaliteta. 
    Naš market je tu kako bi olakšao vašu svakodnevicu, omogućavajući vam da nabavite sve što vam je potrebno bez napuštanja komfora vašeg doma.`,
    title: "Univer Export",
    subtitle: "Praktična nabavka na dohvat ruke",
  },
  {
    img: "/objects/img-2.png",
    message: `Kafić u sklopu Raolen Gradnje nije samo prostor za ispijanje kafe, to je društveno središte gde se susreću komšije, prijatelji i porodice. 
    Ovaj kafić je koncipiran kao udoban prostor za relaksaciju, rad od kuće ili neformalna druženja. 
    Sa širokom paletom napitaka i ukusnih poslastica, naš kafić postaje omiljeno mesto svih stanara, stvarajući atmosferu zajedništva i prijateljstva.`,
    title: "Kafić",
    subtitle: "Mesto gde se svi okupljaju",
  },
  {
    img: "/objects/img-3.png",
    message: `Za porodice koje su deo naše zajednice, posebno smo osmislili prostor koji će obradovati najmlađe članove. 
    Naša igraonica za decu predstavlja sigurno mesto gde se mališani mogu slobodno igrati, učiti i razvijati. 
    Ovaj prostor je pažljivo osmišljen uzimajući u obzir bezbednost i potrebe dece, pružajući im mogućnost da uživaju u igri u neposrednoj blizini svog doma.`,
    title: "Igraonica za decu",
    subtitle: "Bezbedna i zabavna oaza",
  },
];

const Object = () => {
  return (
    <div className="bg-white mb-8 xl:mb-0">
      <div className="text-center p-8 mt-5">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h2 mb-6"
        >
          Objekti
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[638px] mx-auto "
        >
          Jedan od ključnih elemenata naše filozofije je uvođenje dodatnih
          sadržaja unutar zgrada, čime stvaramo živopisno mikrookruženje. U
          našim objektima pronaći ćete više od samo stambenog prostora. Nudimo
          dodatne pogodnosti koje čine život naših stanara jednostavnijim i
          ugodnijim.
        </motion.p>
      </div>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className=" xl:h-[730px]"
        id="objects"
      >
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="container mx-auto"
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="xl:h-[680px] overflow-hidden"
          >
            {objectsData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center xl:flex-row xl:justify-center  shadow-sm">
                    <Image
                      src={slide.img}
                      width={500}
                      height={500}
                      quality={100}
                      alt=""
                      className="w-[360px] h-[360px] xl:w-[500px] xl:h-[500px] rounded-t-md xl:rounded-tr-none xl:rounded-tl-md xl:rounded-bl-md"
                    />
                    <div className="bg-soft_green/80 rounded-b-md xl:rounded-bl-none xl:rounded-tr-md xl:rounded-br-md w-[360px] xl:w-[500px] xl:h-[500px] text-white p-10">
                      <p className="text-sm leading-7 xl:text-base xl:leading-8 mb-8">
                        {slide.message}
                      </p>
                      <p className="text-xl font-bold">{slide.title}</p>
                      <p>{slide.subtitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Object;
