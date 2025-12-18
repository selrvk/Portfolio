import { motion } from 'framer-motion';

function AboutMe(){

    return(

        <section id='about' className="flex flex-col p-8 text-white mt-40 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -100 }}   
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center my-15 p-10
                        bg-gradient-to-b from-white to-transparent 
                        bg-clip-text text-transparent">
                    About me
                </h1>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }}    
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto p-10">
                    I'm a full-stack developer with a passion for building clean, intuitive digital experiences.
                    I enjoy turning complex problems into elegant solutions using modern technologies like
                    React, Next.js, Node.js, and TypeScript.  
                    <br /><br />
                    Beyond coding, I like to develop Visual Graphic Designs. I am constantly in the pursuit of improving my craft and expanding my knowledge.
                </p>

            </motion.div>

        </section>
    );
}

export default AboutMe