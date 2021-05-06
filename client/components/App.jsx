import React from 'react'
import Login from './Login'
import AdminHome from './admin/AdminHome'
import CustomerHome from './customer/CustomerHome'
import SignUp from './SignUp'

const App = () => {
  return (
    <>
      <Login />
      <SignUp />
      <AdminHome />
      <CustomerHome />
    </>
  )
}

export default App
