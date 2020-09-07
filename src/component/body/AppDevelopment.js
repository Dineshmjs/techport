import React from 'react'
import appdev from '../image/appdev.png'

function AppDevelopment() {
    const back = {
        backgroundImage :`url(${appdev})`,
        width:"100%",
        height:"200px",
        backgroundSize:"100% 200px"
    }
    return (
        <div>
            <div style={back}></div>
            <div className="w3-container w3-cyan">
                <h4 className="w3-center">AppDevelopment</h4>
                <p className="w3-left">Andriod and Ios Apps </p>
            </div>            
        </div>
    )
}

export default AppDevelopment
