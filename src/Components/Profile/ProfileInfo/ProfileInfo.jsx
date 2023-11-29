import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.kotik}
                    src='https://sun9-15.userapi.com/impg/DadLoejAur6Ym91JxKqnsP8YNyjUGlknoDHq1g/WC0WVzW_hvo.jpg?size=296x376&quality=96&sign=df585aeb83bb7944ef952edd02db5f40&type=album'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;