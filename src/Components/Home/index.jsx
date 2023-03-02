import React from 'react'
import styles from './styles.module.css'
import desktop from './desktop.module.css'
import { Movies } from '../Movies'


export const Home = ({moviesSaved}) => {

    return (
        <main className={`${styles.main} ${desktop.main}`}>
            <Movies moviesSaved={moviesSaved}>
                
            </Movies>
        </main>
    )
}
