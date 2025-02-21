import Hero from "../Components/Home/Hero";
import Projects from "../Components/Home/Projects";
import projects from "../assets/projects.json"

function Home(){
    return (
        <>
        <div className="ss-container">
            <Hero />
            <Projects projects={projects} />
        </div>
        </>
    )
}

export default Home;