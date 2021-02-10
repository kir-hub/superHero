import React from 'react'
import styles from './pagination.module.sass'

export default function Pagination(props) {

    const { heroesPerPage, totalHeroes, paginate } = props

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalHeroes / heroesPerPage); i++){
        pageNumbers.push(i)
    }
    return (

        <div className={styles.pagination}>
            <ul className={styles.paginationUl}>{pageNumbers.map((num) => (
            <li className={styles.paginationLi} key={num} onClick={() => paginate(num)}>{num} </li>
            ))} </ul>    
        </div>
    )
}
