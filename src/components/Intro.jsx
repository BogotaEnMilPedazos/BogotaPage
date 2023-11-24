import React from "react";
import { documento } from "../assets";
import { styles } from "../Styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Intro = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ fontFamily: "Crazy" }}>
          INTRODUCCIÒN
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className={styles.ParagraphText}> {/*' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'*/}
Bienvenido a este pequeño universo. Siga. Está en su casa. Seguramente viene del libro, de alguna de las historias que resultaron de un intento —aunque imposible— por recoger los trozos de esta ciudad fragmentada. Bogotá en mil pedazos —esta página y su libro— son un intento por tejer esos fragmentos con palabras y el amor de un artesano callejero. <br className='sm:block hidden' />
Bogotá en mil pedazos —esta página y su libro— son un intento por recoger los trozos de esta ciudad fragmentada. Tejerlos con palabras y paciencia, y entrelazarlos con el amor de un artesano callejero. Ese libro, y el universo expandido que de él se desprende, es un intento por contar el caos urbano, con la mirada de un paseante que, por primera vez, descubre un tesoro escondido en un lugar que llevaba visitando desde siempre.
<br />
<br/>
Los relatos son pequeños susurros de la vida urbana, versiones de la ciudad que se sobreponen y van creciendo desde el suelo como estalagmitas. En el libro Bogotá en mil pedazos encontrará los principios y los finales de esta ruta y en esta página le dejamos algunas paradas para que pueda revisitar esos lugares y conocer los tesoros que quisimos guardarle para el final; una risa, una flor, una canción a capela, un poema que quiere prolongar la existencia por siempre. Todos están en el mapa. Los dueños, sin embargo, están dentro del libro. <br className='sm:block hidden' />
A continuación encontrará un mapa de Bogotá que está ligado al mapa que hay en el libro. Aquí podrá visitar —con fotos, audios y videos— cada una de las localidades que allí lea. Solo deberá seleccionar el pedazo del mapa que desee. Aunque el poder de la palabra es infinito, no queríamos que terminara de leer el libro sin la posibilidad de conocer a sus personajes. El sonido de su risa, la fotografía de su flor favorita, su voz cantando a capela, un poema de su boca que pretende prolongar la existencia por siempre. 
<br />
<br/>
No se asuste si selecciona una localidad y ella no tiene relato. Que eso ocurra es imposible en el universo narrativo de Bogotá. Sin embargo, en este otro que construimos con papel y una grabadora, la mitad de las localidades todavía no tienen una historia. ¿Por qué? Varias razones. Porque es imposible contar la ciudad completa. Porque cambia y cada vez que intentamos narrarla ya era otra. Porque Bogotá está llena de fragmentos y no hay quien pueda recogerlos todos. Porque no queríamos hacer por usted todo el trabajo. Si quiere leer cada historia, deberá salir a la calle. La aventura está afuera. <br className='sm:block hidden' />
<br />
<br />
Un abrazo capitalino, 
<br />
<br/>
Camila y Daniela
</motion.p>


      <motion.div variants={textVariant()}>
        <div className='text-white mt-5 bg-[rgb(11,20,75,0.5)] py-3 px-8 rounded-xl outline-none w-fit text-[18px] border cursor-pointer hover:border-[#0B144B] hover:border-[3px]' >
          <a className='btn' href={documento} download="documento.pdf" >
            Descarga nuestra investigación
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Intro, "Intro");