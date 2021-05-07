import React from 'react'
import Login from './Login'
import AdminHome from './admin/AdminHome'
import CustomerHome from './customer/CustomerHome'
import SignUp from './SignUp'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={"/login"} component={Login} />
        <Router exact path={"/Customerhome"} component={CustomerHome} />
        <Router exact path={"/Businesshome"} component={BusinessHome} />
      </Router>
    </>
  )
}

export default App
