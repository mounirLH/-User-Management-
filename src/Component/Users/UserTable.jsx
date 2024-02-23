import React, { useContext } from 'react'
import {UserContext} from './UserApp'
import {Link} from "react-router-dom"
function UserTable() {
   const context=useContext(UserContext)  
    
  return (
    <>
    <h1>Users</h1>
    
    <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
        <tr>
            <th>#ID</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>Opertations</th>
            
        </tr>
        </thead>
        <tbody>
            {(context.User?.length>0)? context.User.map((user,key)=><tr key={key}>
                <td>{user.id} </td>
                <td>{user.fullName}</td>
                <td>{user.Country}</td>
                <td>
    <Link to={`/user/${user.id}/edit`} className={'btn btn-primary mx-1'}>Update</Link>
    <Link to={`/user/${user.id}/edit`} className={'btn btn-danger '}>Delete</Link>
                </td>
            </tr>):<tr><td colSpan={4}align={"center"} >No users</td></tr>
}
            </tbody>
            </table>
        </>
  )
}

export default UserTable