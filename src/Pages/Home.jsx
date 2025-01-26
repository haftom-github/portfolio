import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import projects from "../assets/projects.json"

function Home(){
    return (
        <>
        <Hero />
        <Projects projects={projects} />
        </>
    )
}

export default Home;