import React from 'react';
import {Button} from "../Button/Button";
import {SearchInput} from "../SearchInput/SearchInput";
import s from './menu.module.scss'
import {UserType} from "../../types/userTypes";

type MenuType = {
    users: Array<UserType>
    setUser: (value: Array<UserType>) => void
    setFilterUser: (value: string | null) => void
}
export const Menu: React.FC<MenuType> = ({setFilterUser, users, setUser}) => {


    const resetOnClickHandler = () => {
        setFilterUser(null)
    }

    const onClickSortByNAmeHandler = () => {
        const copy = users.map(el => ({...el}))
        const sorted = copy.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        });
        setUser(sorted)
    }
    return (
        <div className={s.menu}>
            <Button title={"reset"} callback={resetOnClickHandler}/>
            <SearchInput setFilterUser={setFilterUser}/>
            <Button title={"sort by name"} callback={onClickSortByNAmeHandler}/>
        </div>
    );
};
