import React from 'react'
import sysadmin from '../image/sysadmin.jpeg'

function SystemAdmin() {
    const back = {
        backgroundImage :`url(${sysadmin})`,
        width:"100%",
        height:"200px",
        backgroundSize:"100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-indigo">
                <h4 className="w3-center">System Administrations</h4>
                <p className="w3-left">System Controls and Maintenence</p>
            </div>            
        </div>
    )
}

export default SystemAdmin
