import Project from "./Project"
function Projects({ projects }){
    return (
        <div className="projects">
            <div className="header">
                Projects
            </div>
            {
                projects.map((project, indx)=> <Project key={indx} project={project} />)
            }
        </div>
    )
}

export default Projects