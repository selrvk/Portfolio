import LogoLoop from "../LogoLoop"
import Status from "../Status";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPhp, SiHtml5, SiCss3, SiNodedotjs} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPhp />, title: "Php", href: "https://php.net" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3schools.com/css/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3schools.com/html/" },
  { node: <SiNodedotjs />, title: "NodeJS", href: "https://nodejs.org/en" }
];

interface projectprops {

    name:string,
    description:string,
    skillsUsed: Array<string>,
    status: string,
    link: string
}


export default function ProjectCard({name, description, skillsUsed, status, link} : projectprops){

    const filteredLogos = techLogos.filter(logo => 
        skillsUsed.includes(logo.title)
    );


    return(

        <div className="bg-indigo-900/40
                        w-[80%] lg:w-[20%] p-10
                        justify-center text-center rounded-4xl">

            <h1 className="text-4xl font-black">
                {name}
            </h1>
            <h2 className="mt-10">
                {description}
            </h2>
            <div className="mt-10">

                
                <LogoLoop
                    logos={filteredLogos}
                    speed={30}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#1e1b4b"
                    ariaLabel="Skills Used"
                />
            </div>

            <Status status={status}/>

            <div className="mt-10">
                <a href={link} target="_blank">
                    <InteractiveHoverButton >
                        Live Demo
                    </InteractiveHoverButton>
                </a>
            </div>

        </div>

    )
}