import React from 'react'
import {Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const key = useSelector((state)=>state.users.key);
    console.log(key)
  return (
    key === process.env.REACT_APP_ADMIN_KEY ? <Outlet/> : <Navigate to='/account'/>   
  )
}

export default AdminRoute