import { useEffect, useState } from "react";
import useScreenSize from "../Hooks/useScreenSize";
import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import projects from "../assets/projects.json"

function Home(){
    const screenSize = useScreenSize()
    return (
        <>
        <div className={screenSize >= 1100 ? "ss-container": ""}>
            <Hero />
            <Projects projects={projects} />
        </div>
        </>
    )
}

export default Home;