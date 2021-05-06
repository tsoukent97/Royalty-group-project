import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Route exact path={"/login"} component={LogIn} />
      <Router exact path={"/Customerhome"} component={CustomerHome} />
      <Router exact path={"/Businesshome"} component={BusinessHome} />
    </Router>
    </>
  )
}

export default App
