import React, { createContext, useState } from 'react'
import UserTable from './UserTable'
import UserAdd from '../UserAdd'
import UserLayout from './UserLayout'

export const UserContext=createContext({
  User:[],
  lastId:0,
  addUser:()=>null
})
function UserApp() {
  const [User,setUser]=useState([])
  const [lastId,setLastId]=useState(0)
  const addUser=(data)=>{
    setUser(prevState=>[...prevState,data])
    setLastId(prev => prev+1)
  }
  return (
    <>
    <UserContext.Provider value={{
      User:User,
      lastId:lastId,
      addUser:addUser
    }}>
    <UserLayout/>
    </UserContext.Provider>
     
   
    </>
  )
}

export default UserApp