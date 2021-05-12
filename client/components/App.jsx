import React from 'react'
import { Login } from './Login'
import Home from './Home'
import Signup from './SignUp'
import BusinessHome from './business/BusinessHome'
import { CustomerHome } from './customer/CustomerHome'
import AddCard from './customer/AddCard'
import AccountInfo from './business/AccountInfo'
import Card from './customer/Card'
import Footer from './Footer'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/CustomerSignup'} component={(props) => <Signup {...props} isCustomer={true} />} />
          <Route path={'/BusinessSignup'} component={(props) => <Signup {...props} isCustomer={false} />} />
          <Route path={'/CustomerLogin'} component={(props) => <Login {...props} isCustomer={true} />} />
          <Route path={'/BusinessLogin'} component={(props) => <Login {...props} isCustomer={false} />} />
          <Route exact path={'/Customerhome'} component={CustomerHome} />
          <Route path={'/Customerhome/addCard'} component={AddCard} />
          <Route path={'/Customerhome/cardInfo'} component={Card} />
          <Route exact path={'/Businesshome'} component={BusinessHome} />
          <Route path={'/Businesshome/AccountInfo'} component={AccountInfo} />
        </Switch>
        <Route path={'/'} component={Footer} />
      </Router>
    </>
  )
}

export default App
