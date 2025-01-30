import { useState, useRef } from "react";
import contacts from "../../assets/contacts.json"

function Contacts (){
    const [activeContact, setActiveContact] = useState(-1);
    const [copyHit, setCopyHit] = useState(false);
    let valueRef = useRef(null)

    function handleContactHover(indx){
        if (indx === activeContact) return
        setActiveContact(indx)
        setCopyHit(false)
    }

    function copy(){
        let address = contacts[activeContact].value
        navigator.clipboard.writeText(address)
        setCopyHit(true)
        // setTimeout(() => {
        //     setCopyHit(false)
        // }, 1000);
    }

    function resetActiveContact(){
        setActiveContact(-1)
        setCopyHit(false)
    }

    return (
        <div className="hero-contacts" onMouseLeave={resetActiveContact} >
            <div className="icons">
            {
                contacts.map((contact, indx)=> 
                <div key={indx} onClick={()=>{if(contact.url) window.location.href = contact.url}} onMouseEnter={()=>handleContactHover(indx)} className="contact" dangerouslySetInnerHTML={{__html: contact.icon}} />)
            }
            </div>
            <div className="url">
                <div ref={valueRef} className="contact-value">
                    {""}
                    {contacts[activeContact]?.value}
                </div>
                <div onClick={copy} className={`contact-copy ${contacts[activeContact]?.value||"hide"}`}>
                {
                copyHit?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
                </svg>
                }
                </div>
            </div>
        </div>
    )
}

function Hero(){
    return (
        <div className="hero-section">
            {/* <div className="hero-entry">welcome, welcome!!!</div> */}
            <div className="hero-text">
                <div className="hero-text-primary">Full-stack <span className="hero-centroid">Web</span> </div>
                <div className="hero-text-secondary">& <span className="hero-centroid">Android</span> developer.</div>
            </div>
            <div className="hero-body">I work as a backend, frontend, or full-stack developer, designing systems with scalability and security built from ground up. with experience accross every stage of the software development lifecycle.</div>
            <Contacts />
            <div className="hero-action">
                <button className="hero-action-primary">action-1</button>
                <button className="hero-action-secondary">action-2</button>
            </div>
        </div>
    )
}

export default Hero;