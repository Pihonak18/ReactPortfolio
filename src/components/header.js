import React from 'react';


const Header = ({name, contactEmail})=>{
    return(
        <div>
            <div className="header_container">
                <h1>My Portfolio </h1>
                <nav>
                    <ul>
                        <li><a href={`mailto:${contactEmail}`}>Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header