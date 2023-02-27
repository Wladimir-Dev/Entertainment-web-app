import React from 'react'
import { IconLoading } from '../Icons'
import styles from './styles.module.css'


export const Loading = () => {


    return (
        <div className={styles.loading}>
            <IconLoading />
            <span>Buscando</span>
        </div>
    )
}
