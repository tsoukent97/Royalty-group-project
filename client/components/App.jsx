import React from 'react'
import Login from './Login'
import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import SignUp from './SignUp'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/signup'} component={SignUp} />
        <Router exact path={'/Customerhome'} component={CustomerHome} />
        <Router exact path={'/Businesshome'} component={BusinessHome} />
      </Router>
    </>
  )
}

export default App
