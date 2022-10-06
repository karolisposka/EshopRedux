import React from 'react'
import {Outlet, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const RequireAuth = ({allowedRoles}) => {
    const location = useLocation()
    const key = useSelector((state)=>state.users);
  return (
    key?.roles?.find(role => allowedRoles?.includes(Number(role))) ? <Outlet/> : 
    key?.key
      ?<Navigate to='/account' state={{from: location}} replace/>
      : <Navigate to='/unauthorized' state={{from: location}} replace /> 
  )
}

export default RequireAuth