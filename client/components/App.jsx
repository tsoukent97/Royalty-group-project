import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'
import { HashRouter as Router, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'

const App = () => {

  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)


  return (
    <>
    <Router>
      <Route exact path ={'/'} component={Home} />
      <Route exact path ={'/SignUp'} component={SignUp} />
      <Route exact path = {'/Login'} component={Login} />
    </Router>
    </>
  )
}

export default App
