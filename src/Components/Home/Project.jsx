import Tag from "./Tag";
import useScreenSize from "../../Hooks/useScreenSize";

function Main({ project }){
    const screenWidth = useScreenSize();
    return (
        <div className="main">
            {screenWidth > 500
            &&
            <div className="pic">
                <img src={project.images[0].url} alt={project.title} />
            </div>
            }
            <div className="detail">
                <div className="title">{project.title}</div>
                {window.screen.width <= 500
                &&
                <div className="pic">
                    <img src={project.images[0].url} alt={project.title} />
                </div>
                }
                <div className="description">{project.shorterDescription}</div>
                <div className="technologies">
                    {
                        project.techStack.map((tech, indx)=><Tag key={indx} text={tech}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function Project({ activeProject, setActiveProject, index, project }){
    const screenWidth = useScreenSize()
    return (
        <div className={screenWidth >= 1100 && activeProject === index ? "project active": "project"} onClick={()=>setActiveProject(index)}>
            <Main project={project} />
        </div>
    )
}

export default Project;