/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import useScreenSize from "../../Hooks/useScreenSize"
import useVisitObserver from "../../Hooks/useVisitObserver"

const style = css`
    .photo-about {
        display: flex;
        align-items: center;
        justify-content: center;
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
            transform: translateY(20px);
            opacity: 0;
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
        text-align: start;
        padding: 0;
        opacity: .7;
    }
    .photo-about.wrap {
        flex-wrap: wrap;
        .photo {
            width: 100%;
        }
    }
`

const About = () => {
    const screenWidth = useScreenSize()
    const [sectionRef, isSectionVisited] = useVisitObserver({ threshold: 0.2 })
    return (
        <section ref={sectionRef} className={`ss-section translate-down ${isSectionVisited? "fadein-up": ""}`}>
            <div css={style}>
                <div className='section-header'>
                    About Me
                </div>
                <div className={`photo-about ${screenWidth >= 1100 ? "border-corner": "wrap"} ${isSectionVisited ? "movable" : "" }`}>
                    <div className='photo'>
                        <img className={`${isSectionVisited? "fadein-up": ""}`} src="/src/assets/project1-2.png" alt="haftom-tsegay" />
                    </div>
                    <div className={`about ${isSectionVisited ? "lc-fadein-up" : "" }`}>
                        <div className="li-fadein-up">
                            Hello! I'm Haftom, a passionate software developer with experience in building web applications using modern technologies. I love creating user-friendly and efficient applications that solve real-world problems.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                        </div>
                        <div className="li-fadein-up">
                            I have a strong background in JavaScript, React, and other web development technologies. I'm always eager to learn new things and take on new challenges.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;