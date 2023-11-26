import React from "react";
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://sun9-69.userapi.com/impg/DtB-vQLyUVrK45pzlmnyg6lK085rmW4rVAGWwA/6ngp5AcY-y0.jpg?size=736x675&quality=95&sign=83c90b49e76859460123235f6e14ad3a&type=album',
            folowed: false,
            fullname: 'Kirill',
            status: 'Kak je slojno',
            location: {city: 'Ivanovo', country: 'Russia'}
        }, {
            id: 2,
            photoUrl: 'https://sun9-38.userapi.com/impg/vvTlQRyKjUOvm4AiOD2SrWP_ctwZqRmOADt6Uw/_ZPEBDBD6Qs.jpg?size=564x656&quality=96&sign=6d285c5d59f6c78a159bf5550dd56cf9&type=album',
            folowed: true,
            fullname: 'Sanya',
            status: 'EBAT HOHLOV',
            location: {city: 'Kiev', country: 'Russia'}
        }, {
            id: 3,
            photoUrl: 'https://sun9-78.userapi.com/impg/K-z8B6q5_Ed6HZgJS3d4s3ac2_iEHHs4kqN8qw/oPjfD9uxiC0.jpg?size=728x416&quality=95&sign=ba28c5bd2861614ee09b7be2f5822dd8&type=album',
            folowed: false,
            fullname: 'Olga',
            status: 'PIVO PIT',
            location: {city: 'Arizona', country: 'Russia'}
        }])
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)}
    </div>
}

export default Users;