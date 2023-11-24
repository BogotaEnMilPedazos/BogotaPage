import React from 'react'
import { styles } from '../Styles'
import { motion } from "framer-motion";
import bakgroung_image from "../assets/Bogotaazul01.png";
const HeroPhone = () => {
  return (
    <section className={`mt-[20%] relative w-full h-[200%] mx-auto`}>
      <div className={`relative inset-0 top-[20%]  mx-auto  `}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}>
          <img
            src={bakgroung_image}
            alt='fondo'
            className='w-full '


          />
        </motion.div>

        <motion.div className={`text-left ${styles.paddingX}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className={`${styles.heroSubText} mt-2 relative font-extrabold`} style={{ fontFamily: "Athelas" }}>
            <br className='sm:block hidden' />
            <span className="italic">A Bogotá, por la vida y el caos. Para los marginados, los olvidados y los locos. Para quienes encontramos refugio en las palabras. Para los testigos de la ciudad. Los que sueñan sobre su suelo. Y todos los que la han llamado “casa”.</span></p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPhone