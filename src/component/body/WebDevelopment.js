import React from 'react'
import image from '../image/webdev1.jpg'

function WebDevelopment() {
    const back = {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "200px",
        backgroundSize: "100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-purple">
                <h4 className="w3-center">WebDevelopment</h4>
                <p className="w3-left">Resposive Web Site</p>
            </div>            
        </div>
    )
}

export default WebDevelopment
