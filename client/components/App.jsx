import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import {HashRouter as Router, Route} from 'react-router-dom'

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
