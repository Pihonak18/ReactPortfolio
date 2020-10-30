import React from 'react';
// import { FaEnvelope, FaLinkedin, FaGithub, } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{

    return (
      <div className="contact_container">
        <h1>Email</h1>
        <p>{contactPara}</p>
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact