import { useState, useRef } from "react";
import contacts from "../../assets/contacts.json"

function Contacts (){
    const [activeContact, setActiveContact] = useState(-1);
    let valueRef = useRef(null)

    function handleContactHover(indx){
        if (indx === activeContact) return
        setActiveContact(indx)
    }

    return (
        <div className="hero-contacts" onMouseLeave={()=>setActiveContact(-1)} >
            <div className="icons">
            {
                contacts.map((contact, indx)=> 
                <div key={indx} onClick={()=>{console.log(contact.url == true)
                if(contact.url) window.location.href = contact.url}} onMouseEnter={()=>handleContactHover(indx)} className="contact" dangerouslySetInnerHTML={{__html: contact.icon}} />)
            }
            </div>
            <div className="url">
                <div ref={valueRef} className="contact-value">
                    {""}
                    {contacts[activeContact]?.value}
                </div>
                <div className={`contact-copy ${contacts[activeContact]?.value||"hide"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
                </svg>
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
                <div className="hero-text-primary">Full stack <span className="hero-centroid">Web</span> </div>
                <div className="hero-text-secondary">& <span className="hero-centroid">Android</span> developer.</div>
            </div>
            <div className="hero-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis molestias, amet minima libero dicta iusto perspiciatis aperiam velit quas asperiores.</div>
            <Contacts />
            <div className="hero-action">
                <button className="hero-action-primary">action-1</button>
                <button className="hero-action-secondary">action-2</button>
            </div>
        </div>
    )
}

export default Hero;