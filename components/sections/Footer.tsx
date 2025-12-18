"use client"

export default function Footer(){

    return (

        <footer className=" bg-indigo-950/80 p-10 mt-40">

            <div className="flex flex-col md:flex-row justify-between">

                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">
                        selrvk.dev
                    </h1>

                    <h3 className="">
                        Freelance Full Stack Developer, UI/UX Designer <br></br> Visual Graphics Designer
                    </h3>
                </div>


                <div className="flex flex-col mt-10">

                    <h2>
                        Full Stack Web and App Development
                    </h2>
                    <h2>
                        Visual Graphic / Brand Identity Design 
                    </h2>
                    <h2>
                        UI/UX Design
                    </h2>
                </div>

                <div className="flex flex-col gap-5 mt-10 md:mt-0">

                    <h1 className='flex text-2xl font-bold'>
                        Socials
                    </h1>

                    <div className='flex flex-row gap-10'>

                        <div className='flex flex-col items-center'>

                            <a href='https://instagram.com/selrvk' target='_blank'>
                                <img src="/white-icons/white-ig.webp" className='w-8'></img>
                            </a>

                        </div>

                        <div className='flex flex-col items-center'>

                            <a>
                                <img src="/white-icons/white-gmail.png" className='w-8'></img>
                            </a>

                        </div>

                        <div className='flex flex-col items-center'>

                            <a href='https://linkedin.com/in/charles-alcantara' target='_blank'>
                                <img src="/white-icons/white-linkedin.webp" className='w-8'></img>
                            </a>

                        </div>

                    </div>

                    <h2>

                    </h2>


                </div>

            </div>

        </footer>
    )
}