import React from 'react'
import Login from './Login'
import AdminHome from './admin/AdminHome'
import CustomerHome from './customer/CustomerHome'
import SignUp from './SignUp'
import Footer from './Footer'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/Customerhome'} component={CustomerHome} />
        <Route exact path={'/Businesshome'} component={BusinessHome} />
        <Route path={'/'} component={Footer} />
      </Router>
    </>
  )
}

export default App
