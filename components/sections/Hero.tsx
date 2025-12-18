"use client"
import { motion } from 'framer-motion';
import TextType from "../TextType";

export default function Hero(){

    return (

        <div id='hero' className="relative flex flex-col md:flex-row items-center text-center md:text-start">

            <motion.div
                initial={{ opacity: 0, y:50 }}   
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[90%] lg:w-[60%] mt-20 md:-mt-20"
            >
                <img src="/Selrvk-Logo.png"></img>

            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y:50 }}   
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.7 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-5 justify-center w-80 md:w-100"
            >

            <div id='name-info'>

                <TextType 
                    text={["SELRVK"]}
                    typingSpeed={250}
                    pauseDuration={2500}
                    showCursor={true}
                    cursorCharacter="_"
                />

                <h2 className="md:text-2xl mt-5">
                    Full Stack Developer • UI/UX Designer • Visual Graphics Designer
                </h2>

                <div className='flex flex-row mt-5 gap-10'>
                    <a href='https://linkedin.com/in/charles-alcantara' target='_blank'>
                        <img src="/linkedinbnw.png"></img>
                    </a>

                    <a href='https://github.com/selrvk' target='_blank'>
                        <img src="/github.png"></img>
                    </a>
                </div>

            </div>

            </motion.div>

        </div>

    );
}