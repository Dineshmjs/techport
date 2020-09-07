import React from 'react'
import softdev from '../image/softdev.jpg'

function SoftwareDevelopment() {
    const back = {
        backgroundImage :`url(${softdev})`,
        width:"100%",
        height:"200px",
        backgroundSize:"100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-indigo">
                <h4 className="w3-center">SoftwareDevelopment</h4>
                <p className="w3-left">Comercial and Personal Softwares</p>
            </div>
        </div>
        
    )
}

export default SoftwareDevelopment
