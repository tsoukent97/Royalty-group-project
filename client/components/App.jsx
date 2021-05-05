import React from 'react'
import LogIn from './LogIn'
import AdminHome from './admin/AdminHome'
import CustomerHome from './customer/CustomerHome' 
import SignUp from './SignUp'

const App = () => {
  return (
    <>
      <LogIn />
      <SignUp />
      {/* <AdminHome />
      <CustomerHome /> */}
    </>
  )
}

export default App
