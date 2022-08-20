import React from 'react'
import "./Access.scss"
import healthy from "../../../Assets/Desktop/HealthyFood2.jpeg"
import { motion } from "framer-motion"

export const Access = () => {

    const textAnimateD = {
        offscreen: { y: 100, opacity: 0 },
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
        <div className="access">
            <motion.div className="access__container"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.2 }}
                variants={textAnimateD}>
                <div className="access__container__left">
                    <h1>A un paso de acercarte a tu mejor version</h1>
                    <p>Porque cada comida impacta no solo en la salud, recuperacion y el bienestar general, si no que tambien en el medio ambiente y economias locales. Hagamos mejores elecciones juntos</p>
                    <div className="access__container__left__input">
                        <button>Descubrelo</button>
                    </div>
                </div>
                <div className="access__container__right">
                    <img src={healthy} alt="healthy" />
                </div>
            </motion.div>
            <div className="access__copy">
                <p>mail@mail.com</p>
                <p>Copyright © 2022 HGO</p>
                <p>+34 666 666 666</p>
            </div>
        </div>
    )
}
