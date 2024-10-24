import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <h1>Auth APP</h1>
      <Register />
      <Login />
      <Profile />
    </>
  );
}

export default App;
