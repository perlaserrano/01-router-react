import React, { useContext } from 'react'
import{BrowserRouter as Router, Switch} from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import AppRouter from './AppRouter'
import { AuthContext } from '../contex/AuthContex'
import  PublicRouter  from './PublicRouter'
import PrivateRouter from './PrivateRouter'

const LoginRouter = () => {
const {log} = useContext(AuthContext);

  return (
   <Router>
    <Switch>
    <PublicRouter path={'/login'} auth={log} component={LoginScreen}/>
    <PrivateRouter path={'/'} auth={log} component={AppRouter}/>
    </Switch>
   </Router>
  )
}

export default LoginRouter
