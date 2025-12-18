import ProjectCard from "./../components/ProjectCard.jsx";
import GIF_YoruHotel from "./../assets/YoruHotel.gif";
import GIF_YoruHotelPhone from "./../assets/YoruHotelPhone.gif";
import { motion } from 'framer-motion';

const projects = [

    {name: "Yoru Hotel", 
        img: {
            desktop: GIF_YoruHotel,
            phone: GIF_YoruHotelPhone
        },
        description: "A dynamic PHP website based around a fictional hotel.", 
        skillsUsed: ["html", "css", "php"],
        status: "deployed",
        link: "https://yoruhotel.ct.ws/"},

    {name: "Majestic Balinese", 
        img: GIF_YoruHotel, 
        description: "A website for a beach resort in the Philippines.", 
        skillsUsed: ["html", "css", "react", "tailwind"],
        status: "developing",
        link: "https://majestic-balinese.vercel.app/"},

    {name: "Para", 
        img: GIF_YoruHotel, 
        description: "Among the Top 5 submissions of HACK THE FUTURE: Smart Batangas Province Hackathon", 
        skillsUsed: ["html", "css", "ts"],
        status: "developing"},

    {name: "Bnuuy", 
        img: GIF_YoruHotel, 
        description: "A Next.js website focused on providing a platform for bunny rehoming and a marketplace for bunny products", 
        skillsUsed: ["html", "css", "nodejs"],
        status: "developing"},

]

export default function ProjectsContainer(){

    return(
        
        <section id="projects">

            <div className="w-vh bg-black">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}    
                    viewport={{ once: false, amount: 0.5 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center my-10 p-10
                        bg-gradient-to-b from-white to-transparent 
                        bg-clip-text text-transparent">
                    Projects
                    </h1>

                </motion.div>

                <div className="flex flex-col gap-20 items-center">

                    {projects.map((project, index) =>
                    
                    <ProjectCard
                        key = {index}
                        {...project}
                    />

                )}
                </div>
            </div>

        </section>

    );
}
