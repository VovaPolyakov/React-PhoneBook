import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import styles from '../styles/Home.module.scss'

const UserInfo = () => {
    const id = useParams()
    const [state,dispatch] = useContext(DataContext)
    const user = state.contacts.filter((item) => item.id == id.id)
    let friends = [];
    // for(let i = 0;i<user[0].friends;i++){
    //     console.log(user[0].friends[i])
    // }
    user[0].friends.map((item) => {
        friends = state.contacts.filter((user) => user.id === item)
    })
    console.log(friends)


  return (
    <div className={styles.user}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <p className={styles.text}>{user[0].name} {user[0].surName}</p>
                    <p className={styles.phone}>{user[0].phoneNumber}</p>
                </div>
            </div>
            <h1 className={styles.title}>Friends</h1>
            <div className={styles.friend}>
                {friends ? friends.map((item) => (
                    <div className={styles.card}>
                        <div className={styles.card_details}>
                        <p className={styles.text_title}>{item.name}</p>
                        <p className={styles.text_body}>Here are the details of the card</p>
                        </div>
                        <a href={`/contacts/${item.id}`}><button className={styles.card_button}>More info</button></a>
                    </div>
                )): <p>Loading...</p>}
            </div>
        </div>
    </div>
  )
}

export default UserInfo
