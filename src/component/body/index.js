import React from 'react'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import {useSelector} from 'react-redux'

function Body() {
    const menu = useSelector(state=>state.Menu)
    console.log("menu",menu)
    return (
        <div>
            {
                menu === "Services" && <Services />
            }
            {
                menu === "About" && <About />
            }  
            {
                menu === "Contact" && <Contact />
            }     
        </div>
    )
}

export default Body
