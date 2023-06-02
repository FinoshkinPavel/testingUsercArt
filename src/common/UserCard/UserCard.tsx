import React from 'react';
import s from "./userCard.module.scss";
import {userAvatarPlaceHolder} from "../../utils/helperConst/userAvatarPlaceHolder";

type UserCardType = {
    name: string
    phone: string
}

export const UserCard: React.FC<UserCardType> = ({phone, name}) => {
    return (
        <div className={s.userCard}>
            <div className={s.wrapImg}><img src={userAvatarPlaceHolder} alt="avatar"/></div>
            <span>{name}</span>
            <span>{phone}</span>
        </div>
    );
};
