import React, {useState} from 'react'
import * as all from '../../http/api'
import styles from './styles.module.sass'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'

export default function HeroEdit() {

    const [nickname, setNickname] = useState('')
    const [realName, setRealName] = useState('')
    const [originDescription, setOriginDescription] = useState('')
    
    const [superpowers, setSuperpowers] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [images, setImage] = useState('png')
    const [id, setId] = useState('')
    



    const editHero = async()=>{
        const formData = new FormData()
        formData.append('nickname', nickname)
        formData.append('real_name', realName)
        formData.append('origin_description', originDescription)
        formData.append('superpowers', superpowers)
        formData.append('catch_phrase', catchPhrase)
        formData.append('images', images)
        formData.append('id', id)

        await all.editHero(formData)

        setNickname(() => '')
        setRealName(() => '')
        setOriginDescription(() => '')
        setSuperpowers(() => '')
        setCatchPhrase(() => '')
        setImage(() => '')
        
    }


    const selectFile = e =>{
        setImage(e.target.files[0]);
        
    }

    return (

<>
    <Header/>
        <div className={styles.main}>
            <div className={styles.inputsDiv}>
                <input className={styles.input} onChange={e => setNickname(e.target.value)} value={ nickname} placeholder='nickname'/>
                <input className={styles.input} onChange={e => setRealName(e.target.value)} value={ realName} placeholder='realName'/>
                <input className={styles.input} onChange={e => setOriginDescription(e.target.value)} value={originDescription} placeholder='originDescription'/>
                <input className={styles.input} onChange={e => setSuperpowers(e.target.value)} value={ superpowers} placeholder='superpowers'/>
                <input className={styles.input} onChange={e => setCatchPhrase(e.target.value)} value={ catchPhrase} placeholder='catchPhrase'/>
                <input className={styles.input} onChange={e => setId(e.target.value)} value={ id} placeholder='id'/>
                <input className={styles.input} type='file' onChange={selectFile}/>
            </div>
            <div className={styles.buttonsDiv}>
                <button className={styles.button} onClick={editHero}> edit hero</button>
                
            </div>
            
        </div>
        </>
    )
}
