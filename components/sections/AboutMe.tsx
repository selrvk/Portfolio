"use client"
import { motion } from 'framer-motion';

export default function AboutMe(){

    return(

        <section id="aboutme" className="flex justify-center">
            
            <motion.div
                initial={{ opacity: 0, y:50 }}   
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col items-center justify-self-center text-center w-[80%] mt-50'
            >

            <h1 className="text-4xl xl:text-6xl  2xl:text-8xl font-bold text-center mt-50 p-10
                    bg-linear-to-b from-white to-transparent 
                    bg-clip-text text-transparent">
                    About Me
            </h1>

            <h1 className="flex justify-self-center mt-20">
                    Hi, I’m Charles — a full-stack web developer with a strong foundation in software engineering and a passion for building clean, scalable, and user-centered digital products. <br></br><br></br>
                    I began my journey studying BS-Software Technology at De La Salle University, and I am currently pursuing BS-Information Technology at Lyceum of the Philippines University – Batangas. My academic background, combined with hands-on project experience, has shaped my ability to work across the entire development stack — from crafting intuitive user interfaces to architecting robust backend systems. <br></br> <br></br>
                    I’m proficient in a wide range of programming languages and frameworks, with certifications to support my technical expertise. I work confidently with front-end libraries, modern backend development, RESTful APIs, and both SQL and NoSQL databases. I also have experience in system design, cloud services (AWS), deployment pipelines, and version control with Git, enabling me to deliver complete, production-ready solutions. <br></br><br></br>
                    As a nationally certified Visual Graphics Designer, I bring a strong sense of UI/UX, allowing me to blend technical precision with meaningful design. Whether collaborating in Agile environments or working through structured Waterfall processes, I communicate clearly, work efficiently, and prioritize reliability and scalability in every project.<br></br><br></br>
                    Driven, adaptable, and eager to learn, I'm constantly pushing myself to evolve with new technologies and industry best practices. My goal is to build products that solve real problems, perform flawlessly, and deliver exceptional experiences for both users and clients.
            </h1>

            <div className="flex flex-row justify-center gap-40 mt-20">

                <div className="flex flex-col items-center">

                    <img src='/dlsu_seal.png' alt="dlsu seal" className="w-25 h-25"></img>

                    <h3 className="font-bold mt-10">
                        Bachelor of Science in Software Technology
                    </h3>
                    <h4 className="">
                        2021-2025
                    </h4>

                </div>

                <div className="flex flex-col items-center">

                    <img src='/lpu_seal.svg' alt="lpu seal"className="w-25 h-25"></img>

                    <h3 className="font-bold mt-10">
                        Bachelor of Science in Information Technology
                    </h3>
                    <h4 className="">
                        2025-2027
                    </h4>

                </div>

            </div>

            </motion.div>

        </section>
    )
}