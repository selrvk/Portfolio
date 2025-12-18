import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5 md:items-center">
      
      <h1 className="text-4xl font-bold text-center text-orange-300">
        selrvk.dev
      </h1>

      <nav className={`flex flex-col md:flex-row gap-5 md:gap-10 mt-3 md:mt-0 ${menuOpen ? "block" : "hidden"} md:flex`}>
        <a href="#home" className="text-orange-300">Home</a>
        <a href="#projects" className="text-orange-300">Projects</a>
        <a href="#skills" className="text-orange-300">Skills</a>
        <a href="#about" className="text-orange-300">About Me</a>
        <a href="#contact" className="text-orange-300">Contact</a>
      </nav>

    </header>
  );
}

export default Header;
