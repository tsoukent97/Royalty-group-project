import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Footer from './Footer'
import { HashRouter as Router, Route } from 'react-router-dom'
// import Businesshome from './business/BusinessHome'
// import Customerhome from './customer/CustomerHome'
import Home from './Home'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/CustomerLogin'} component={(props) => <Login {...props} isCustomer={true} />} />
        <Route exact path={'/BusinessLogin'} component={(props) => <Login {...props} isCustomer={false} />} />
        {/* <Route exact path={'/Customerhome'} component={CustomerHome} />
        <Route exact path={'/Businesshome'} component={BusinessHome} /> */}
        <Route path={'/'} component={Footer} />
      </Router>
    </>
  )
}

export default App
