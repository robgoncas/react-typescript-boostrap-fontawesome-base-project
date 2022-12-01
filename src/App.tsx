import React from 'react';
import logo from './logo.svg';
//Components
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import {Routes, Route, Navigate} from 'react-router-dom';
import AxiosUsers from './components/AxiosUsers';
import Counter from './components/Counter';
import UserDetails from './components/UserDetails';




function App() {
  return (
  <React.Fragment>
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/AxiosUsers/list'}/>} />
      <Route path={'/AxiosUsers/list'} element={<AxiosUsers/>} />
      <Route path={'/AxiosUsers/detail/:id'} element={<UserDetails/>} />

      <Route path={'/Counter/index'} element={<Counter/>} />
      <Route path={'/About'} element={<About/>} />


    </Routes>
  </React.Fragment> 

  );
}

export default App;
