import React, { useState } from 'react'
import UserTable from './UserTable'
import UserAdd from '../UserAdd'

function UserApp() {
  const [user,setUser]=useState([])
  const [lastId,setLastId]=useState(0)
  return (
    <>
     <UserAdd lastId={lastId} />
   
    <UserTable user={user}/>
   
    </>
  )
}

export default UserApp