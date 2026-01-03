"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AboutMe(){
    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <section id="aboutme" className="flex justify-center">
            
            <motion.div
                initial={{ opacity: 0, y:50 }}   
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col items-center justify-self-center text-center w-[80%] mt-50'
            >

            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center mt-50 p-10
                    bg-gradient-to-b from-white to-gray-400
                    bg-clip-text text-transparent">
                    About Me
            </h1>

            <div className="mt-20 space-y-6 max-w-4xl text-lg leading-relaxed">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Hi, I'm <span className="font-semibold text-white">Charles</span> — a full-stack web developer with a strong foundation in software engineering and a passion for building clean, scalable, and user-centered digital products.
                </motion.p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="space-y-6 overflow-hidden"
                        >
                            <p>
                                I began my journey studying BS-Software Technology at De La Salle University, and I am currently pursuing BS-Information Technology at Lyceum of the Philippines University – Batangas. My academic background, combined with hands-on project experience, has shaped my ability to work across the entire development stack — from crafting intuitive user interfaces to architecting robust backend systems.
                            </p>
                            
                            <p>
                                I'm proficient in a wide range of programming languages and frameworks, with certifications to support my technical expertise. I work confidently with front-end libraries, modern backend development, RESTful APIs, and both SQL and NoSQL databases. I also have experience in system design, cloud services (AWS), deployment pipelines, and version control with Git, enabling me to deliver complete, production-ready solutions.
                            </p>
                            
                            <p>
                                As a nationally certified Visual Graphics Designer, I bring a strong sense of UI/UX, allowing me to blend technical precision with meaningful design. Whether collaborating in Agile environments or working through structured Waterfall processes, I communicate clearly, work efficiently, and prioritize reliability and scalability in every project.
                            </p>
                            
                            <p>
                                Driven, adaptable, and eager to learn, I'm constantly pushing myself to evolve with new technologies and industry best practices. My goal is to build products that solve real problems, perform flawlessly, and deliver exceptional experiences for both users and clients.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg 
                               transition-all duration-300 border border-white/20
                               hover:border-white/40 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isExpanded ? "Show Less" : "Read More"}
                </motion.button>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-40 mt-20">
                
                <a href='https://www.dlsu.edu.ph/colleges/ccs/undergraduate-degree-programs/#1527679810887-e8e94679-1663411e-f971' target='_blank'>
                    <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src='/dlsu_seal.png' alt="dlsu seal" className="w-24 h-24 mb-4" />
                        <h3 className="font-bold text-lg">
                            Bachelor of Science in Software Technology
                        </h3>
                        <h4 className="text-gray-400 mt-2">
                            2021-2025
                        </h4>
                    </motion.div>
                </a>
                
                <a href='https://lpubatangas.edu.ph/college-of-computer-studies/bachelor-of-science-in-information-technology/' target='_blank'>
                    <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src='/lpu_seal.svg' alt="lpu seal" className="w-24 h-24 mb-4" />
                        <h3 className="font-bold text-lg">
                            Bachelor of Science in Information Technology
                        </h3>
                        <h4 className="text-gray-400 mt-2">
                            2025-2027
                        </h4>
                    </motion.div>
                </a>

            </div>

            </motion.div>

        </section>
    )
}