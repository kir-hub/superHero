import React , {useState} from 'react'
import {Link} from "react-router-dom";
import Info from '../Info/info';
import ACTION from '../../actions/action'
import {connect} from 'react-redux'
import styles from './ListItem.module.sass'


function ListItem(props) {

    const src = 'http://localhost:5000/'

    const {
        id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
        deleteHero,
        showHero,
        opposite,
        trueOrFalse,

    } = props

    const deleteHandler = ()=>{
        deleteHero(id)
    }
    
    const handler = ()=>{
        showHero(id)

         opposite()
        
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.topBlock}>
               <button onClick={deleteHandler}>x</button>
                <button onClick={handler}>?</button> 
                <h2 >{nickname}</h2>  
            </div>
            

            <img src={src + images} alt='pic'/>
            
            

        </div>
    )
}

const mapStateToProps = state =>{
    const {trueOrFalse} = state
    return state

}

const mapDispatchToProps = (dispatch) =>{
    return { opposite: () => dispatch({
        type: ACTION.SET_OPPOSITE,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)