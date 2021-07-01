import React from 'react'
import { UseGlobalContext } from './Context-Api'
export const LogOut = () => {
  const { logout } = UseGlobalContext()
  return (
    <>
      <button className='logout' onClick={() => logout()}>logout</button>
    </>
  )
}
