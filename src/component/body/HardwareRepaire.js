import React from 'react'
import hwrepair from '../image/hw.jpg'

function HardwareRepaire() {
    const back = {
        backgroundImage :`url(${hwrepair})`,
        width:"100%",
        height:"200px",
        backgroundSize:"100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-brown">
                <h4 className="w3-center">HardwareRepaire</h4>
                <p className="w3-left">Harware and Component Replacements</p>
            </div>            
        </div>
    )
}

export default HardwareRepaire
