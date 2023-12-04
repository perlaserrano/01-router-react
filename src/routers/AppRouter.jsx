import React from 'react'
import { Switch, Route , Redirect } from 'react-router-dom'
import ManScreen from '../pages/ManScreen'
import WomanScreen from '../pages/WomanScreen'
import SearchScreen from '../pages/SearchScreen'
import Navbar from '../components/Navbar'
import CharacterScreen from '../pages/CharacterScreen'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/man" component={ManScreen}/>
        <Route exact path="/woman" component={WomanScreen}/>
        <Route exact path="/search" component={SearchScreen}/>
        <Route exact path="/character/:id" component={CharacterScreen}/>

        <Redirect to="/man"/>
    </Switch>
      
    </>
  )
}

export default AppRouter
