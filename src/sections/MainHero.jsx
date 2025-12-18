import { motion } from 'framer-motion';

function MainHero() {

  return (

    <section id="home" className="flex flex-col md:flex-row items-center">

      <div
        id="vanta-bg"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -10,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Logo */}
      <motion.div
        className="flex justify-center md:w-[60%] md:-mt-30"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="./logos/Selrvk-Logo.png" alt="Selrvk Logo" className="w-[100%]" />
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex md:-mt-20"
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center md:items-start">
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold font-mono">
            SELRVK
          </h1>

          <p className="text-center md:text-start md:text-2xl mt-6 max-w-md">
            A full stack developer with passion in building desktop and web applications.
          </p>

          <div className="flex flex-row gap-6 mt-6 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/charles-alcantara/" target="_blank" rel="noopener noreferrer">
              <img src="./logos/linkedin.png" alt="LinkedIn Logo" className="w-6" />
            </a>
            <a href="https://www.github.com/selrvk" target="_blank" rel="noopener noreferrer">
              <img src="./logos/github.png" alt="Github Logo" className="w-6" />
            </a>
          </div>
        </div>
      </motion.div>

  </section>

  );
}

export default MainHero;