import React from 'react';
import * as CGIcons from 'react-icons/cg';
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = (props) => {

    return (
        <div className="contactInfo">
            <div className="contactCard">
                <div id="infoTop">
                    <CGIcons.CgUser id="contactIcon" />
                    <CGIcons.CgClose onClick={props.hideInfoFunc} id="contactClose" />
                </div>    
                <div id="infoContent">
                    <h3 className="contactTitle">Contact Information</h3>            
                    <CGIcons.CgMail id="contactMail" />
                    <h4 className="email">alcala.cole04@yahoo.com</h4>
                    <a href="https://www.linkedin.com/in/cole-alcala-140671299" target="_blank" className="linkedin">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;