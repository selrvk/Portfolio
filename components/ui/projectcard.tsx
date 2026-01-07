import LogoLoop from "../LogoLoop"
import Status from "../Status";
import Image from "next/image"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPhp, SiHtml5, SiCss3, SiNodedotjs, SiSupabase} from 'react-icons/si';
import { RainbowButton } from "@/components/ui/rainbow-button"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPhp />, title: "Php", href: "https://php.net" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3schools.com/css/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3schools.com/html/" },
  { node: <SiNodedotjs />, title: "NodeJS", href: "https://nodejs.org/en" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com/"},
];

interface projectprops {

    name:string,
    description:string,
    skillsUsed: Array<string>,
    status: string,
    link: string,
    sourcelink: string,
    image: string
}


export default function ProjectCard({ name, description, skillsUsed, status, link, sourcelink, image }: projectprops) {

  const filteredLogos = techLogos.filter((logo) =>
    skillsUsed.includes(logo.title)
  )

  return (
    <div
      className="
        w-full sm:w-[85%] lg:w-[22%]
        bg-indigo-950/60 text-white
        rounded-2xl shadow-lg overflow-hidden
        transition hover:-translate-y-1 hover:shadow-2xl
      "
    >
      <div
        className="relative h-44 w-full overflow-hidden"
      >
        <Image
          src={`/photos/${image}`}
          alt={`${name} preview`}
          fill
          className="transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight">{name}</h1>
        <p className="mt-3 text-sm text-indigo-200 leading-relaxed">{description}</p>

        {filteredLogos.length > 0 && (
          <div className="mt-5">
            <LogoLoop
              logos={filteredLogos}
              speed={25}
              direction="left"
              logoHeight={36}
              gap={32}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#1e1b4b"
              ariaLabel="Skills Used"
            />
          </div>
        )}

        <div className="mt-5 flex justify-center">
          <Status status={status} />
        </div>

        <div className="my-6 flex justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton>Live Demo</InteractiveHoverButton>
          </a>
        </div>
      </div>
      
      <a href={sourcelink} target="_blank" rel="noopener noreferrer">
        <RainbowButton className="mb-5" size="sm">Source Code</RainbowButton>
      </a>
      
    </div>
  )
}
