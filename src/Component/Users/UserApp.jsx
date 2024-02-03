import React, { useState } from 'react'
import UserTable from './UserTable'
import UserAdd from '../UserAdd'

function UserApp() {
  const [user,setUser]=useState([])
  const [lastId,setLastId]=useState(0)
  const addUser=(data)=>{
    setUser(prevState=>[...prevState,data])
    setLastId(prev => prev+1)
  }
  return (
    <>
     <UserAdd lastId={lastId} onAddUser={addUser} />
   
    <UserTable user={user}/>
   
    </>
  )
}

export default UserApp