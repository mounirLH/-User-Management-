import React, { useState } from 'react'
import UserTable from './UserTable'
import UserAdd from '../UserAdd'
const INISIAL_DATA=[
  {
    id:1,
    Fullname:'Mounir Lahlali',
    Country:"Morocco",
    
  },
  {
    id:2,
    Fullname:'Naji Zakaria',
    Country:"Usa"
  },
  {
    id:3,
    Fullname:'Marry Crestine',
    Country:"Spain"
  }
]

function UserApp() {
  const [user,setUser]=useState(INISIAL_DATA)
  return (
    <>
     <UserAdd/>
     <hr/>
    <UserTable user={user}/>
   
    </>
  )
}

export default UserApp