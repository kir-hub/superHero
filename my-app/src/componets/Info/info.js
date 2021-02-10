import React,{useState, useEffect} from 'react'
import {getOneHero} from '../../http/api'
import ACTION from '../../actions/action'
import {connect} from 'react-redux'
import styles from './Info.module.sass'


function Info(props) {

    const {
        id,
        showHero, 
        opposite
    } = props
    
    const [heroInfo, setHeroInfo] = useState('')


    const fetchOneHero = async()=>{
        try {            
            const hero = await getOneHero(id)
            setHeroInfo(()=> hero.data)
            console.log(heroInfo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {  
        infoHandler()
    }, [])

    const infoHandler = ()=>{
        showHero(id)
    }
    
    return (
        <div className={styles.main} onMouseMove={fetchOneHero}>
            
            <img src={process.env.REACT_APP_API_URL + heroInfo.images} alt='pic'/>
            
            <div className={styles.information}>
                <button onClick={opposite}>x</button>
                <h2>{heroInfo.nickname}</h2>  
                <h2>real name: {heroInfo.real_name}</h2> 
                <h4>description: {heroInfo.origin_description}</h4>
                <h4>superpowers: {heroInfo.superpowers}</h4>
                <h4>catch phrase: {heroInfo.catch_phrase}</h4>
            </div>
            

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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
