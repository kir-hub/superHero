import {createStore, applyMiddleware} from 'redux'
import ACTION from './actions/action'
import {getAllHeroes} from './http/api'


const initState ={
    
    trueOrFalse: true
}

const reducer = (state = initState, action)=>{
    if(action.type === ACTION.SET_OPPOSITE){
        return{
            trueOrFalse: !state.trueOrFalse,
        }
    } else {
        return state
    }
    // switch(action.type) {
    //     case ACTION.SET_OPPOSITE:{
    //         return {
    //             trueOrFalse: !state.trueOrFalse,
    //         }
    //     }
    //     default:
    // return state
    // } 
}

export const store = createStore(reducer)