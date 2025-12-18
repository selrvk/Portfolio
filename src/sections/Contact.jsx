import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function Contact() {


    return (
        
        <section id='contact'>

        <div className="flex flex-col mt-30 py-20 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }}    
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center my-20 p-10
                        bg-gradient-to-b from-white to-transparent 
                        bg-clip-text text-transparent">
                    Lets bring your ideas to life
                </h1>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }}    
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Card/>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }}    
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

            <div className="flex flex-col gap-20 mt-20 md:flex-row md:gap-40 text-center justify-center items-center">

                <div className="w-40 flex flex-col items-center">
                    <a href="https://instagram.com/selrvk" target="_blank" className="">
                        <img src="./icons/instagram.png" className="mx-auto w-15"></img>
                        <h2 className="mt-5">@selrvk</h2>
                    </a>
                </div>

                <div className="w-40 flex flex-col items-center justify-center">
                    <a href="mailto:selrvk@email.com" target="_blank" className="">
                        <img src="./icons/gmail.png" className="mx-auto w-15"></img>
                        <h2 className="mt-5">selrvk@gmail.com</h2>
                    </a>
                </div>

                <div className="w-40 flex flex-col items-center justify-center">
                    <a href="https://www.linkedin.com/in/charles-alcantara/" target="_blank" className="">
                        <img src="./icons/linkedin.png" alt="LinkedIn Logo" className="mx-auto w-15"></img>
                        <h2 className="mt-5">/charles-alcantara</h2>
                    </a>
                </div>

            </div>

            </motion.div>
            
        </div>

        </section>

    );
}