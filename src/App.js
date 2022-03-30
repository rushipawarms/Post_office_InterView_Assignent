
import './App.css';
import React from 'react';
import Login from './component/Login';
import SignIn from './component/SignIn';
import MainPage from './component/MainPage';
import {BrowserRouter as Router,Routes,Route,BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './component/PrivateRoute'
import Counter from './component/Counter';
import Optimize from './component/Optimize';
function App() {
  return (
  <>
  
    <Router>
    <React.Fragment>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path='/Main' element={<PrivateRoute/>}>
      <Route path='/Main' element={<MainPage/>}/>
      </Route>
      <Route path='/Optimize' element={<PrivateRoute/>}>
      <Route path='/Optimize' element={ <Optimize/>}/>
      </Route>
    </Routes>
    </AuthProvider>
    </React.Fragment>
    </Router>
  
    
    </>
  );
}

export default App;
