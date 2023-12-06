
import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom'
import { AuthContext } from '../contex/AuthContex';

const PublicRouter = ({children}) => {
  const { log } = useContext(AuthContext);

  return !log.log ? children :  <Navigate to="/man"/>

}
 export default PublicRouter