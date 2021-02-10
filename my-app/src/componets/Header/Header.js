import React from 'react'
import {Link} from 'react-router-dom'
import  styles from './Header.module.sass'

export default function Header() {


    return (
        <div className={styles.main}>
            <span>
            <Link to='/Edit' className={styles.button}>edit</Link>

            </span>
            <span>
            <Link to='/' className={styles.button}>create</Link>
                
            </span>
            <span>
            <Link to='/list' className={styles.button}>list</Link>
                
            </span>
        </div>
    )
}
