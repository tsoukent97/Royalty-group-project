import React from 'react'
import Login from './Login'
// import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import NavCustomer from './customer/NavCustomer'
import SignUp from './SignUp'
import { HashRouter as Router, Route } from 'react-router-dom'
import NavBusiness from './business/NavBusiness'

const App = () => {
  return (
    <>
      <Router>
        <NavCustomer />
        <NavBusiness />
        <SignUp />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/CustomerHome'} component={CustomerHome} />
      </Router>
    </>
  )
}

export default App
