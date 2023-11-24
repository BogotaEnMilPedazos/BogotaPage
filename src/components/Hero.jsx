import React from 'react'
import { styles } from '../Styles'
import { motion } from "framer-motion";
import bakgroung_image from "../assets/Bogotaazul01.png";
const Hero = () => {
  return (
    <section className={`relative lg:mt-10 sm:mt-[20%] w-full h-screen mx-auto`}>
      <div className={`relative inset-0 max-w-7xl mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}>
          <img
            src={bakgroung_image}
            alt='fondo'
            className='w-full '


          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero