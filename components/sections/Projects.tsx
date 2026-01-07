"use client"
import { motion } from 'framer-motion';
import ProjectCard from "../ui/projectcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [

    {   name: "Yoru Hotel", 
        description: "A dynamic PHP website based around a fictional hotel.", 
        skillsUsed: ["HTML5", "CSS3", "Php"],
        status: "deployed",
        link: "https://yoruhotel.ct.ws/",
        sourcelink: "https://github.com/selrvk/yoru-hotel",
        image: "yoru-hotel.png"},
        

    {   name: "Majestic Balinese", 
        description: "A website for a beach resort in Calatagan, Philippines.", 
        skillsUsed: ["React", "Next.js", "NodeJS", "Tailwind CSS", "Typescript"],
        status: "developing",
        link: "https://majestic-balinese.vercel.app/",
        sourcelink: "https://github.com/selrvk/Majestic-Balinese",
        image: "majestic-balinese.png"},

    {   name: "Para", 
        description: "Among the Top 5 submissions of HACK THE FUTURE: Smart Batangas Province Hackathon", 
        skillsUsed: ["HTML5", "CSS3", "TypeScript"],
        status: "developing",
        link: "https://github.com/selrvk",
        sourcelink: "https://github.com/selrvk/FNV-Inventory",
        image: "no-preview.png"},
    

    {   name: "Bnuuy", 
        description: "A Next.js website focused on providing a platform for bunny rehoming and a marketplace for bunny products", 
        skillsUsed: ["React", "Next.js", "NodeJS", "Tailwind CSS", "TypeScript"],
        status: "developing",
        link: "https://github.com/selrvk",
        sourcelink: "https://github.com/selrvk/eCommerce",
        image: "no-preview.png"},

    {   name: "Inventory Management System", 
        description: "An inventory management system developed to cater for a local business in Batangas City.", 
        skillsUsed: ["Next.js", "Supabase", "Tailwind CSS", "TypseScript", "NodeJS", "React"],
        status: "developing",
        link: "https://github.com/selrvk/FNV-Inventory",
        sourcelink: "https://github.com/selrvk/FNV-Inventory",
        image: "inventory-management.png"},

]

export default function Projects(){

    return(
        
        <section id="projects" className="flex flex-col justify-center text-center mt-70">

            <motion.div
                initial={{ opacity: 0, y:50 }}   
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-center pb-5
                    bg-linear-to-b from-white to-transparent 
                    bg-clip-text text-transparent">
                    Projects
            </h1>
                
            <div className="block lg:hidden mt-30 justify-center ">

                <Carousel className="justify-self-center max-w-[70%] ">

                    <CarouselContent className=''>

                        {projects.map((project, index) => (

                            <CarouselItem key={index} className="flex justify-center">

                                <ProjectCard {...project} />

                            </CarouselItem>

                        ))}

                    </CarouselContent>

                    <CarouselPrevious/>
                    <CarouselNext />

                </Carousel>

            </div>

            <div className="hidden lg:flex flex-row flex-wrap items-center justify-center gap-20 mt-40 h-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            </motion.div>   

        </section>
    )
}