'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMenuItem } from "@/context/MenuItemContext";

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

   const {setSelectedItem} = useMenuItem();
   
     const menuItemSelection = (item: string) => {
       setSelectedItem(item);
       setIsOpen(false);
     }

    return (<>
        {/*Hambergure icon*/}
        <button className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md shadow-md"
            onClick={toggleMenu}
            aria-label="Toggle Menu">
            <FontAwesomeIcon icon={faBars} />
        </button>

        {/*Slide out Menu*/}
        <div
            className={`flex flex-col justify-between fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out shadow-lg`}
        >
            <div className="flex flex-col p-4 space-y-6">
            <h2 className="text-xl font-bold mx-12 my-4">Menu</h2>
            <button className="hover:underline mx-8" onClick={()=>menuItemSelection("home")}>
                Home
            </button>
            <button className="hover:underline mx-8" onClick={() => menuItemSelection("skills")}>
                Skills
            </button>
            <button className="hover:underline mx-8" onClick={() => menuItemSelection("projects")}>
                Projects
            </button>
            <button className="hover:underline mx-8" onClick={() => menuItemSelection("contact")}>
                Contact
            </button>
            </div>

            <div className="text-xl hover:underline text-center mb-4 flex flex-col gap-4">
            <a href="https://drive.google.com/file/d/1T7IhLBZjACxf3iQ8eee0fXFBkgCER4id/view?usp=sharing" target="_blank" className="text-xl mx-4 hover:underline">Resume</a>
            <a href="https://github.com/jiyaavinash/Portfolio-JiyaAnn/tree/main" target="_blank" className="text-xl mx-4 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/jiya-ann" target="_blank" rel="noopener noreferrer" className="text-xl mx-4 hover:underline">LinkedIn</a>
            </div>
        </div>
    </>)
}

export default Menu;