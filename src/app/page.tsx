'use client'
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { projects } from "./data/ProjectData";
import Skills from "./components/Skills";
import { skillsWithVersions } from "./data/Skills";
import ContactForm from "./components/ContactForm";
import Menu from "./components/Menu";
import { useMenuItem } from "@/context/MenuItemContext";

export default function Home() {

  const {selectedItem} = useMenuItem();

  return (
    <>
      {selectedItem === "home" && <Hero />}
      {selectedItem === "projects" && <Projects project={projects} />}
      {selectedItem === "skills" && <Skills skillsWithVersions={skillsWithVersions}/>}
      {selectedItem === "contact" && <ContactForm />}
    </>
  );
}
