import {menu} from './Type'

const inittialState = {
    Menu:"Services"
}

const Reducer = (state = inittialState, action )=>{
    switch(action.type){
        case menu:
            return {
                Menu:action.data     
            }
        default : return state 
    }
}

export default Reducer