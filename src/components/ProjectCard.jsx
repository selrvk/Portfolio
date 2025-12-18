import Status from './Status.jsx';
import Skill from './Skill.jsx';
import { useRef, useState } from "react";
import { motion } from 'framer-motion';
import './../index.css';
import Button from './Button.jsx';
import LiveDemoButton from './LiveDemoButton.jsx';

function ProjectCard({ name, img, description, skillsUsed, status, link}) {

    const [isPhone, setIsPhone] = useState(false);

    const currentImg = typeof img === "string"
        ? img
        : (isPhone ? img.phone : img.desktop);

    return (
        <motion.div
                initial={{ opacity: 0, x: -100 }}   
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
        >

        <div className="flex flex-col xl:flex-row items-center gap-20 w-vh p-5">

            <div className="flex flex-col items-center">

                <img
                    key={currentImg} 
                    src={currentImg}
                    alt={name}
                    className="max-w-[80%] rounded-xl opacity-0 animate-fadeIn"
                />

                {typeof img !== "string" && (
                    <div className="mt-20 flex items-center gap-4 cursor-pointer select-none relative"
                        onClick={() => setIsPhone(!isPhone)}>

                        <span className="absolute inset-0 rounded-full opacity-0 pointer-events-none toggle-ripple"></span>

                        <div className="flex items-center gap-2">
                            <span className={`text-xl transition ${!isPhone ? "opacity-100" : "opacity-40"}`}>🖥️</span>
                        </div>

                        <div 
                            className={`
                                w-14 h-7 rounded-full relative transition-all duration-300 
                                shadow-inner bg-gradient-to-r
                                ${isPhone ? "from-blue-500 to-blue-600 shadow-blue-500/40" : "from-gray-500/40 to-gray-400/20"}
                            `}
                        >
                            <div 
                                className={`
                                    absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-xl
                                    transition-all duration-300
                                    ${isPhone ? "translate-x-7" : "translate-x-1"}
                                `}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className={`text-xl transition ${isPhone ? "opacity-100" : "opacity-40"}`}>📱</span>
                        </div>

                    </div>
                )}

            </div>

            <div className='flex flex-col items-center'>

                <a href={link} target='_blank' className="mt-5 p-5 text-3xl w-[50%] text-center font-bold hover:bg-radial from-indigo-900 to-transparent">
                    <h2>{name}</h2>
                </a>

                <p className="my-5 w-[50%] xl:w-100 text-center">{description}</p>

                <div className='flex flex-wrap my-10 gap-5'>
                    {skillsUsed.map((skill, index) =>
                        <Skill key={index} skill={skill} />
                    )}
                </div>
                
                <a href={link} target='_blank'>
                    <LiveDemoButton/>
                </a>
                <div className='my-3'></div>
                <Button/>

                <Status status={status} />
            </div>

        </div>

        </motion.div>
    );
}

export default ProjectCard;
