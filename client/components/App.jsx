import React from 'react'
import Login from './Login'
import Home from './Home'
import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/CustomerLogin'} component={(props) => <Login {...props} isCustomer={true} />} />
        <Route exact path={'/BusinessLogin'} component={(props) => <Login {...props} isCustomer={false} />} />
        <Route exact path={'/Customerhome'} component={CustomerHome} />
        <Route exact path={'/Businesshome'} component={BusinessHome} />
      </Router>
    </>
  )
}

export default App

