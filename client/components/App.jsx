import React from 'react'
import Login from './Login'
import Home from './Home'
import BusinessHome from './business/BusinessHome'
import CustomerHome from './customer/CustomerHome'
import AccountInfo from './business/AccountInfo'
import QrCode from './customer/QrCode'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/CustomerLogin'} component={(props) => <Login {...props} isCustomer={true} />} />
        <Route exact path={'/BusinessLogin'} component={(props) => <Login {...props} isCustomer={false} />} />
        <Route exact path={'/Customerhome'} component={CustomerHome} />
        <Route exact path={'/Customerhome/cardInfo'} component={QrCode} />
        <Route exact path={'/Businesshome'} component={BusinessHome} />
        <Route exact path={'/Businesshome/AccountInfo'} component={AccountInfo} />
      </Router>
    </>
  )
}

export default App

