import React from 'react'


function UserTable({user}) {
 
    
  return (
    <>
    <h1>Users</h1>
    
    <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
        <tr>
            <th>#ID</th>
            <th>Full Name</th>
            <th>Country</th>
            
        </tr>
        </thead>
        <tbody>
            {(user.length>0)? user.map((user,key)=><tr key={key}>
                <td>{user.id} </td>
                <td>{user.Fullname}</td>
                <td>{user.Country}</td>
            </tr>):<tr><td colSpan={3} align={'center'}>No users</td></tr>
}
            </tbody>
            </table>
        </>
  )
}

export default UserTable