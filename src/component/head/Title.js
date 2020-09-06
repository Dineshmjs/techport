import React from 'react'
import back from '../image/headbg.jpg'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Menu} from '../../redux/Action'

function Title() {

    const dispatch = useDispatch() 
    const style = {
        backgroundImage:`url(${back})`,
        backgroundSize:"cover",
        width:"100%",
        height:"100px"
    }
    const padding={
        marginTop:"40px"       
    }
    const paddingTitle ={
        paddingTop:"20px",
        paddingLeft:"8%"
    }
    return (
        <div className="" style={style}> 
           <div className="row">
                <div className="col-9">
                    <h1 className="w3-text-purple" style={paddingTitle}>TechPort</h1>
                </div>
                
                <div className="col-1 w3-center">
                    <Link to="/" onClick={()=>dispatch(Menu("Services"))}>
                        <h6 className="w3-text-purple" style={padding}>Services</h6>
                    </Link>
                    
                </div>
                <div className="col-1 w3-center">
                <Link to="/" onClick={()=>dispatch(Menu("About"))}>
                        <h6 className="w3-text-purple" style={padding}>About Us</h6>
                    </Link>
                </div>
                <div className="col-1 w3-center">
                <Link to="/" onClick={()=>dispatch(Menu("Contact"))}>
                        <h6 className="w3-text-purple" style={padding}>Contact</h6>
                    </Link>
                </div>
           </div>
        </div>
    )
}

export default Title
