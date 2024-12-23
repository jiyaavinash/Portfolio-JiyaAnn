import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { projects } from "./data/ProjectData";

export default function Home() {
  return (
    <>
   <Hero/>
   <Projects project={projects}/> 
    </>
  );
}
