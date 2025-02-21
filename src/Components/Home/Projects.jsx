/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react"
import Project from "./Project"
import { css } from "@emotion/react"
import Github from "../../assets/github.svg?react"
import Web from "../../assets/web.svg?react"
import Tag from "./Tag"
import Carousel from "../Carousel"

function Icon({ name }){
    switch(name){
        case "github-repo":
            return <Github />
        case "web":
            return <Web />
        default:
            return null
    }
}

const linkStyle = css`
    color: var(--color-text);
    padding: .5rem;
`

function Link({ link }){
    return (
        <a css={linkStyle}  href={link.url}
            target="_blank"
            rel="noreferrer"
        >
            <Icon name={link.name} />
        </a>
    )
}

const detailStyle = css`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 80%;
    margin: auto 0;
    transform: translate(25px, -25px);
    background-color: color-mix(in srgb, var(--color-tint-primary) 20%, var(--color-background));
    z-index: 100;
    opacity: 0;
    transition: box-shadow .2s ease-in-out, transform .2s ease-in-out, opacity .6s ease-in-out;
    &.shadow {
        box-shadow: -5px 5px 3px color-mix(in srgb, var(--color-text), transparent 70%);
        transform: translate(30px, -30px);
        opacity: 1;
    }
    .title, .description, .features {
        width: 100%;
    }
    .images {
        display: flex;
    }
    .header {
        text-align: center;
    }
    .title {
        padding: .5rem 0;
        padding-top: 1rem;
        font-size: large;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }
    .description {
        width: 70%;
        text-align: center;
        padding: 1rem 0;
    }
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 70%;
    }
`

function Detail({ project }){
    return (
        <div css={detailStyle} className="mid-detail shadow hide">
            <div className="title">
                { project.title }
            </div>
            <div className="links">
            {
                project.links.map((link, indx) => <Link link={link} key={indx} />)
            }
            </div>
            <div className="description">
                { project.description }
            </div>
            <div className="tech-stack">
                {
                    project.techStack.map((tech, indx)=><Tag key={indx} text={tech}/>)
                }
            </div>
            <Carousel images={project.images} />
        </div>
    )
}

const listDetailStyle = css`
    @media (max-width: 1099px){
        ::after, ::before{
            border: 0;
        }
    }
`

function Projects({ projects }){
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    function handleProjectClick(index){
        const detail = document.querySelector('.mid-detail')
        detail.classList.remove('shadow')
        setTimeout(()=>{
            setActiveProjectIndex(index)
            detail.classList.add('shadow')
        }, 300)
    }
    return (
        <div className="projects">
            <div className="header">
                Projects
            </div>
            <div css={listDetailStyle} className="list-detail border-corner">
                <div className="list">
                    {
                        projects.map((project, indx)=> <Project setActiveProject={handleProjectClick} index={indx} key={indx} project={project} />)
                    }
                </div>
                <Detail project={projects[activeProjectIndex]} />
            </div>
        </div>
    )
}

export default Projects