import React from 'react'
import {Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const key = useSelector((state)=>state.users.key);
  return (
    key ? <Outlet/> : <Navigate to='/account'/>   
  )
}

export default PrivateRoutes
