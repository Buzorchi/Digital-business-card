import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return(
        <div className="footer">
            <div>
                <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                </div>
                <div>
            <FontAwesomeIcon icon={faLinkedin} className="linkdin--icon"/>
            </div>
        </div>
    )
}
export default Footer