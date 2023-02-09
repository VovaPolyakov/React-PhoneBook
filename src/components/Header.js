import React from 'react'
import styles from '../styles/Home.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.menu}>
                <NavLink className={styles.text} to='/'>Contacts</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header
