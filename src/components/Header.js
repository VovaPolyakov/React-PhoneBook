import React from 'react'
import styles from '../styles/Home.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.menu}>
                <p>Contacts</p>
            </div>
        </div>
    </div>
  )
}

export default Header
