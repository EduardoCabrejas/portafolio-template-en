"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import logo from "@/assets/logos/logo.png";
import { useTheme } from "@/context/themeContext";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const buttonClass = theme === "light" ? "navButtonLight" : "navButtonDark";

  return (
    <nav
      id="nav-bar"
      className="navbar flex items-center justify-center md:grid md:grid-cols-[15%_85%] items-center w-full px-8 relative z-10"
    >
      <div className="flex justify-center items-center">
        <Image
          src={logo}
          alt="Logo"
          className="p-2 rounded-full w-20 h-20"
          priority
        />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[var(--textColor)]"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="hidden md:flex gap-4 justify-center items-center">
        <ScrollLink
          to="experience"
          smooth
          duration={500}
          offset={-100}
          className={buttonClass}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="education"
          smooth
          duration={500}
          offset={-100}
          className={buttonClass}
        >
          Education
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth
          duration={500}
          offset={-100}
          className={buttonClass}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth
          duration={500}
          offset={-100}
          className={buttonClass}
        >
          Projects
        </ScrollLink>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1nNO2qHBrm_J6BkX9_7IUMpTKrMg5-woP/view?usp=sharing",
              "_blank"
            )
          }
          className={buttonClass}
        >
          Watch my Resume
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--navBarBackground)] flex flex-col gap-4 py-4 px-6 shadow-lg md:hidden animate-fade-in-down">
          <ScrollLink
            to="experience"
            smooth
            duration={500}
            className={buttonClass}
            onClick={() => setMenuOpen(false)}
          >
            Experiencia
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth
            duration={500}
            className={buttonClass}
            onClick={() => setMenuOpen(false)}
          >
            Educación
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth
            duration={500}
            className={buttonClass}
            onClick={() => setMenuOpen(false)}
          >
            Habilidades
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            className={buttonClass}
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </ScrollLink>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1nNO2qHBrm_J6BkX9_7IUMpTKrMg5-woP/view?usp=sharing",
                "_blank"
              );
              setMenuOpen(false);
            }}
            className={buttonClass}
          >
            Vé mi CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
