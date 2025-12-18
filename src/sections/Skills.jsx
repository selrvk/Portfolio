import SkillsMarquee from "../components/SkillsMarquee";
import { motion } from 'framer-motion';

const imgs = [

    "./logos/html.png",
    "./logos/css.png",
    "./logos/php.png",
    "./logos/react.png",
    "./logos/tailwind.png",
    "./logos/ts.png",
    "./logos/nodejs.png",
    "./logos/nextjs.svg",
    "./logos/vite.svg",
];

function Skills(){

    return (

        <section id="skills" className="flex flex-col justify-center items-center p-10 mt-30">

            <motion.div
                initial={{ opacity: 0, x: -100 }}   
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                <h1 className="text-4xl xl:text-6xl  2xl:text-8xl font-bold text-center my-15 p-10
                    bg-gradient-to-b from-white to-transparent 
                    bg-clip-text text-transparent">
                    Skills
                </h1>

            </motion.div>
            
            <div className="my-10">
                <SkillsMarquee logos={imgs} />
                
            </div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}  
                whileInView={{ opacity: 1, x: 0 }}  
                viewport={{ once: false, amount: 0.5 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
            
                <div className="grid md:grid-cols-2 gap-6 text-lg leading-relaxed mt-10 max-w-4xl mx-auto">
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Proficient with certifications in JavaScript, Typescript, C++, Java
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Proficient with React, Next.js, and Express
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Desktop development using Java Swing
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Relational & non-relational databases (MySQL, PostgreSQL, SQLite, MongoDB)
                        </li>
                    </ul>

                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Python, Django, Ruby on Rails
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        MVVM, MVC, and MVP architectures
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        AWS (EC2, S3, RDS, Lambda)
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Git, GitHub & Agile practices
                        </li>
                    </ul>
                </div>

            </motion.div>


        </section>
    );
}

export default Skills