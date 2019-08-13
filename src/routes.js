import React from 'react'
import History from './helpers/History'
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Jogo from './pages/Jogo'

const Routes = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/jogo' render={() => <Jogo />} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes