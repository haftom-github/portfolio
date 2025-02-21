import { useState } from "react";
import Tag from "./Tag";
import { useEffect } from "react";

function Main({ project }){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleResize = () => setScreenWidth(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return  () => window.removeEventListener('resize', handleResize)
    })
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

function Project({ setActiveProject, index, project }){
    return (
        <div className="project" onClick={()=>setActiveProject(index)}>
            <Main project={project} />
        </div>
    )
}

export default Project;