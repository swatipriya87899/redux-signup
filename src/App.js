import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import CheckInBox from './components/CheckInBox/CheckInBox';
import { useSelector } from 'react-redux/';
import LoginSuccess from './components/LoginSuccess/LoginSuccess';

const App = () => {
  const {login} = useSelector(state => state.createAccount)


  return (
    <div>
      <Routes>
      <Route path="/" element={<CheckInBox />} />
      <Route path="/success" element={<LoginSuccess />} />
    </Routes>
    </div>
  )
}

export default App