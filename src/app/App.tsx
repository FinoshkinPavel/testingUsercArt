import React, {useEffect, useState} from 'react';
import s from './app.module.scss'
import {userAPI} from "../services/userAPI/userAPI";
import {UserType} from "../types/userTypes";
import {UserCard} from "../common/UserCard/UserCard";
import {Menu} from '../common/Menu/Menu';

function App() {
  const [user, setUser] = useState<Array<UserType>>([])
  const [filterUser, setFilterUser] = useState<string | null>(null)


  useEffect(()=>{
    userAPI.getAlluser(filterUser)
        .then(res => (setUser(res.data)))
  },[filterUser])
  return (
    <div className={s.app}>
        <Menu setFilterUser={setFilterUser} users={user} setUser={setUser}/>
      <div className={s.appWrap}>
      {user.map(el => {
        return <UserCard key={el.id} {...el}/>
      })}
      </div>
    </div>
  );
}

export default App;
