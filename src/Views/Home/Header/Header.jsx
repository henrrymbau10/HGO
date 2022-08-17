import React from 'react'
import video from "../../../Assets/Desktop/JunkFood.mp4"
import whatsapp from "../../../Assets/Icons/whatsapp-svgrepo-com.svg"
import { Navbar } from '../../../Components/Navbar/Navbar'
import "./Header.scss"
import { motion } from "framer-motion"


export const Header = () => {

    const textAnimate = {
        offscreen: { y: -100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.5
            }
        }
    }

    return (
        <div className="header">
            <Navbar />
            <video autoPlay playsInline loop muted className="video"><source src={video} type="video/mp4" /></video>
            <motion.h1
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                variants={textAnimate}>Casi dos de cada tres adultos tiene sobrepeso u obesidad en Europa</motion.h1>
            <motion.h3
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                variants={textAnimate}>¿Cuando fue la ultima vez que te preocupaste por tu salud?</motion.h3>
            <img src={whatsapp} alt="Whatsapp" />
        </div>
    )
}
