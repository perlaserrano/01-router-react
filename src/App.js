import { AuthReducer } from './reducers/AuthReducer';
import {AuthContext} from './contex/AuthContex';
import LoginRouter from './routers/LoginRouter'
import { useReducer, useEffect } from 'react';

const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log:false}
}

function App() {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
  localStorage.setItem('log',JSON.stringify(log))
  }, [log])
  

  return (
  <AuthContext.Provider value={{log,dispatch}}>
<LoginRouter/>
</AuthContext.Provider>
  )
}

export default App;
