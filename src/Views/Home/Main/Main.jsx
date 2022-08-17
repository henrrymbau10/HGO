import React from 'react'
import "./Main.scss"
import healthy from "../../../Assets/Desktop/HealthyFood.jpeg"
import diet from "../../../Assets/Desktop/diet.jpeg"
import measure from "../../../Assets/Desktop/measure.jpeg"
import { motion } from "framer-motion"

export const Main = () => {

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)
        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    const textAnimateR = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.5
            }
        }
    }

    const textAnimateL = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.5
            }
        }
    }

    const textAnimateAppear = {
        offscreen: { x: 0, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 7
            }
        }
    }

    return (
        <div className="main">
            <div className="main__button">
                <motion.button onClick={() => scrollTo('.access')}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateAppear}>Pruebalo Ya!!</motion.button>
            </div>
            <div className="main__container1">
                <div className="main__container1__img">
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR}
                        src={healthy} alt="healthy" />
                </div>
                <motion.div className="main__container1__text"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateL}>
                    <h1>Beneficio 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </motion.div>
            </div>
            <div className="main__container2"
            >
                <div className="main__container1__img">
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateL}
                        src={diet} alt="healthy" />
                </div>
                <motion.div className="main__container1__text"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateR}>
                    <h1>Beneficio 2</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </motion.div>
            </div>
            <div className="main__container1">
                <div className="main__container1__img">
                    <motion.img
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={textAnimateR}
                        src={measure} alt="healthy" />
                </div>
                <motion.div className="main__container1__text"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.5 }}
                    variants={textAnimateL}>
                    <h1>Beneficio 3</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </motion.div>
            </div>
        </div>
    )
}
