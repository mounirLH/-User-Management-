import React from 'react'
import UserTable from './UserTable'
import UserAdd from '../UserAdd'
import UserEdite from './UserEdite'
import {BrowserRouter,Link,Routes,Route, Outlet} from "react-router-dom"

function UserLayout() {
  return (
    <>
<BrowserRouter>
<nav className={'navbar navbar-"expand-lg navbar-light bg-light'}>
<ul className='navbar-nav me-auto mb-lg-0 '>
 <li className='nav-item'>
 <Link to ={'/'} className="nav-link">User list</Link> 
 </li>
 <li className='nav-item'>
 <Link to ={'/user/create'} className="nav-link">Add User </Link> 
 </li>
 
</ul>
</nav>
<Routes>
<Route index element={<UserTable/>}></Route>
<Route path={'/user/create'} element ={<UserAdd/>}></Route>
<Route path={'/user/:id/edit'} element ={<UserEdite/>}></Route>

</Routes>
</BrowserRouter>
<Outlet/>
</>
  )
}

export default UserLayout