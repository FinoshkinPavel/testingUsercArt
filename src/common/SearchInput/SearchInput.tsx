import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";

type SearchInputType = {
    setFilterUser: (value:string) => void
}



export const SearchInput: React.FC<SearchInputType> = ({setFilterUser}) => {
    const [findUser, setFindUser] = useState<string>('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFindUser(e.currentTarget.value)
    }

    const onClickhandler = () => {
        setFilterUser(findUser)
    }
    return <div>
        <input type="text" onChange={onChangeInput} value={findUser} placeholder={'find user...'}/>
        <Button title={'find'} callback={onClickhandler}/>
    </div>
};
