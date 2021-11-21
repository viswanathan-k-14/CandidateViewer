import React from 'react';
import Home from './screens/Home.jsx';
import SingleUser from './screens/SingleUser.jsx';
import NavBar from './components/NavBar.jsx';
import ShortlistScreen from './screens/ShortlistScreen.jsx';
import RejectScreen from './screens/RejectScreen.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shortlisted' element={<ShortlistScreen />} />
        <Route exact path='/rejected' element={<RejectScreen />} />
        <Route exact path='/user/:id' element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
