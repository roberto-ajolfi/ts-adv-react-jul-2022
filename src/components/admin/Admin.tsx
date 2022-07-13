import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { AdminComputer } from './AdminComputer';
import { AdminDept, AdminUsers } from './AdminUser';

const Admin = () => {
  return (<Routes>
    <Route path="/" element={<AdminHome />}>
        <Route index element={<AdminUsers />} />
        <Route path='computer' element={<AdminComputer />} />
        <Route path="dept" element={<AdminDept />} />
    </Route>
  </Routes>);
}

export default Admin;

export const AdminHome: React.FC = () => {
    return(<div>
        <h3>Admin</h3>
        <NavLink to='/lazy'>Users</NavLink>&nbsp;|&nbsp;
        <NavLink to='/lazy/computer'>Computer</NavLink>&nbsp;|&nbsp;
        <NavLink to='/lazy/dept'>Departments</NavLink>
        <hr />
        <Outlet />
    </div>);
};