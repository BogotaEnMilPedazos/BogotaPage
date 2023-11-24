import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import DanielaV from '../assets/DanielaV.jpg';
import CamilaH from '../assets/Camilah.jpg';

const Autores = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText}`} style={{ fontFamily: "Crazy" }}>AUTORAS</h1>
      </motion.div>

      <div className="mt-10 ">
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          className="rounded-2xl float-left w-[30%] h-[30%] p-2 "
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.ParagraphText}  `}
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-[20vh]"
        >
          <p
            className={`${styles.ParagraphText} text-right`}
            style={{ fontFamily: "Crazy" }}>

            DANIELA VILLAMARÍN

          </p>

        </motion.div>



      </div>


      <div className="pt-[15%] lg:pt-[30%]">
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          className="rounded-2xl float-right w-[30%] h-[30%] p-2"
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.ParagraphText} text-right  `}
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-[20vh]"
        >
          <p
            className={`${styles.ParagraphText} text-left`}
            style={{ fontFamily: "Crazy" }}>

           CAMILA HURTADO 

          </p>

        </motion.div>

      </div>
    </>
  )
}

export default SectionWrapper(Autores, "Autores");
