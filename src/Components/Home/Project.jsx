import Tag from "./Tag";

function Main({ project }){
    return (
        <div className="main">
            <div className="pic">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="detail">
                <div className="title">{project.title}</div>
                <div className="description">{project.description}</div>
                <div className="technologies">
                    {
                        project.technologies.map((tech, indx)=><Tag text={tech}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function Project({ project }){
    return (
        <div className="project">
            <Main project={project} />
        </div>
    )
}

export default Project;