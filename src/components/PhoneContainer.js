import React from 'react'
import PhoneCard from './PhoneCard'
import styles from '../styles/Home.module.scss'


const PhoneContainer = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <PhoneCard/>
      </div>
    </div>
  )
}

export default PhoneContainer
