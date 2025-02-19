import { useState } from "react";
import Tag from "./Tag";
import { useEffect } from "react";

function Main({ project }){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleResize = () => setScreenWidth(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
    }, window.removeEventListener('resize', handleResize))
    return (
        <div className="main">
            {screenWidth > 500
            &&
            <div className="pic">
                <img src={project.image} alt={project.title} />
            </div>
            }
            <div className="detail">
                <div className="title">{project.title}</div>
                {window.screen.width <= 500
                &&
                <div className="pic">
                    <img src={project.image} alt={project.title} />
                </div>
                }
                <div className="description">{project.description}</div>
                <div className="technologies">
                    {
                        project.techStack.map((tech, indx)=><Tag key={indx} text={tech}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function Project({ setActiveProject, index, project }){
    return (
        <div className="project" onClick={()=>setActiveProject(index)}>
            <Main project={project} />
        </div>
    )
}

export default Project;