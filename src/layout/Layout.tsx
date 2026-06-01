import { Outlet } from "react-router";
import { useState } from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import type { IconType } from "react-icons";

function NavIcon({title, address, icon: Icon}: {title?: string, address?: string, icon?: IconType}){
    const [isHovered, setIsHovered] = useState(false);
    
    return(
        <div className="relative"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                window.location.href = address;
                history.replaceState(null, null, window.location.href.split('#')[0]);
            }}>
            <div className="absolute inset-0 bg-black"></div>
            <div 
                className={`relative flex items-center justify-center text-2xl font-medium transition duration-300 p-2 cursor-pointer bg-white ${isHovered ? "-translate-x-2 -translate-y-2" : ""}`}>
                
                <Icon size={32} className="p-2 text-black"/>
                <div className={`
                    overflow-hidden
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ease-in-out
                    p-2
                    text-end
                    text-black
                    ${isHovered ? "max-w-40 opacity-100" : "max-w-0 opacity-0"}`}>
                        {title}
                    </div>
            
            </div>
        </div>
    )
}
function Navigation(){
    return(
        <>
            <div className="fixed w-32 h-[40vh] left-4 top-50 z-10 flex items-start justify-center flex-col gap-8">
                <NavIcon title="Home" address="#home" icon={FaHome}/>
                <NavIcon title="Skills" address="#skills" icon={FaTools}/>
                <NavIcon title="Projects" address="#projects" icon={AiFillCode}/>
                <NavIcon title="About Me" address="#about" icon={FaPerson}/>
            </div>
        </>

    )
};


export default function Layout(){
    return(
        <>
            {/*<div className="w-full h-24 px-16 bg-gray-400">
                <div className="flex justify-between items-center h-full">
                    <div>
                        
                    </div>
                    <div className="space-x-4">
                        <Link to="/" className="relative w-fit text-2xl cursor-pointer group">
                            Home
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/projects" className="relative w-fit text-2xl cursor-pointer group">
                            Projects
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/contact" className="relative w-fit text-2xl cursor-pointer group">
                            Contact
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
            */}
            <Navigation />
            <Outlet/>
        </>
    )
}

