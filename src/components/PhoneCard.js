import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import styles from "../styles/Home.module.scss"

const PhoneCard = () => {
    const [state,dispatch] = useContext(DataContext)
  return (
        <div className={styles.row}>
            {state ? state.contacts.map((item) => (
                <div className={styles.card}>
                    <div className={styles.card_details}>
                      <p className={styles.text_title}>{item.name}</p>
                      <p className={styles.text_body}>Here are the details of the card</p>
                    </div>
                    <a href={`contacts/${item.id}`}><button className={styles.card_button}>More info</button></a>
                </div>
            )): <p>Loading...</p>}
        </div>
  )
}

export default PhoneCard
