import React from 'react'
import sysmain from '../image/sysmain.jpeg'

function SystemMaintenence() {
    const back = {
        backgroundImage :`url(${sysmain})`,
        width:"100%",
        height:"200px",
        backgroundSize:"100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-blue">
                <h4 className="w3-center">System Maintenence</h4>
                <p className="w3-left">Software and Harware Maintenence</p>
            </div>            
        </div>
    )
}

export default SystemMaintenence
