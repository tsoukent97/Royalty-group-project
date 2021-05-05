import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import AdminHome from './admin/AdminHome'
import CustomerHome from './customer/CustomerHome'

const App = () => {
  return (
    <>
      <LogIn />
      <SignUp />
      <AdminHome />
      <CustomerHome />
    </>
  )
}

export default App
