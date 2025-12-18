import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

interface statusProps {

    status:string
}

export default function Status ({status} : statusProps){

    if(status == "developing"){
        
        return (    

            <div className="mt-5 font-bold text-xl">
                <AnimatedGradientText>Developing...</AnimatedGradientText>
            </div>

        )

    } else {

        return (    

            <div className="mt-5 font-bold text-xl">
                <AnimatedGradientText colorFrom="#a3e635" colorTo="#047857">Deployed</AnimatedGradientText>
            </div>

        )
    }
}