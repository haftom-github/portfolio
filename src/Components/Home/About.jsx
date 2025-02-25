/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import useScreenSize from "../../Hooks/useScreenSize"
import useVisitObserver from "../../Hooks/useVisitObserver"

const style = css`
    padding: 2rem;
    .header {
        font-weight: bold;
        padding: 1rem;
    }
    .photo-about {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }
    .photo {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 50%;
        padding: 2rem;
        flex-shrink: 0;
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
    }
    .about {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: justify;
        text-indent: 50px;
        padding: 2rem;
        opacity: .7;
    }
`

const About = () => {
    const screenWidth = useScreenSize()
    const [observeRef, isSectionVisited] = useVisitObserver({ threshold: 0.5 })
    return (
        <section ref={observeRef} className="about-section ss-section">
            <div css={style} className="container">
                <div className='header'>
                    About Me
                </div>
                <div className={`photo-about ${screenWidth >= 1100 ? "border-corner": ""} ${isSectionVisited ? "movable" : "" }`}>
                    <div className='photo'>
                        <img src="/src/assets/project1-2.png" alt="haftom-tsegay" />
                    </div>
                    <div className='about'>
                        <div>
                            Hello! I'm Haftom, a passionate software developer with experience in building web applications using modern technologies. I love creating user-friendly and efficient applications that solve real-world problems.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                        </div>
                        <div>
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;