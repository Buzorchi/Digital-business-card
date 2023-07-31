import React from "react"
import buzor from "../images/buzor.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header(){
    return(
        <div>
            <img className = "profile-pic"src = {buzor} alt = "profile-pic" />
            <h1 className = "person-name">Muoghalu Mary Chibuzor</h1>
            <h3 className = "career">Junior Frontend Engineer</h3>
           
           <div className="button">
            <a href = "https://mail.google.com/mail/u/0/#inbox" target = "_blank" rel="noreferrer noopener">
            <button className ="email-button">
            <FontAwesomeIcon icon={faEnvelope} className = "envelope-icon"/>
                 Email</button>
                </a>

                <a href = "https://www.linkedin.com/in/muoghalu-mary-b4158a236/" target = "_blank" rel="noreferrer noopener"> 
            <button className="linkedin-button"> 
            <FontAwesomeIcon icon={faLinkedin} className = "linkedin-icon"/>
            Linkedin
            </button>
            </a>
           </div>
            
        </div>
    )
}
export default Header