import React, { useState, useEffect } from 'react'
import * as all from '../../http/api'
import ListItem from '../listItem/ListItem'
import {connect} from 'react-redux'
import Info from '../Info/info'
import ACTION from '../../actions/action'
import Pagination from '../pagination/Pagination'
import styles from './List.styles.module.sass'
import Header from '../Header/Header'

function List(props) {

    const [list, setList] = useState([])
    const [picked, setPicked] = useState([])
    const [identificator, setIdentificator] = useState('')

    const fetchHeroes = async()=>{
        try {
            const newHeroes = await all.getAllHeroes()
            setList(()=> [...list, ...newHeroes.data.rows])
            setPicked(() => [...picked, ...newHeroes.data.rows])
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHero = (id)=>{
        setList(()=> list.filter((item) => item.id !== id))
    }
    
    const showHero = (id) =>{
        setPicked(() => list.filter((item) => item.id == id))
        setIdentificator(()=> picked[0].id)
    }


    const mapHeroes = () =>{
        return currentHeroes.map((item) => (
        <ListItem {...item} key={item.id} deleteHero={deleteHero} showHero={showHero} />
        ))
    }
 
    const {trueOrFalse} = props

    useEffect(() => {
        fetchHeroes()
        
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [heroesPerPage, setHeroesPerPage] = useState(5);
    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = list.slice(indexOfFirstHero, indexOfLastHero);

    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    

    return ( 
        
        <>
        {trueOrFalse ? <div  className={styles.main}>
            <Header/>
            <ul><Pagination heroesPerPage={heroesPerPage} totalHeroes={list.length}  paginate={paginate}/></ul>
            <ul className={styles.dispalayList}>{mapHeroes()}</ul>
            <ul><Pagination heroesPerPage={heroesPerPage} totalHeroes={list.length}  paginate={paginate}/></ul>
        </div> : <Info id={identificator} showHero={showHero}/>}
        
        
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
