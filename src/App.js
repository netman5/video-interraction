import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const sessionTokenString = sessionStorage.getItem('token');
  const localStorageTokenString = localStorage.getItem('token');
  const sessionUserToken = JSON.parse(sessionTokenString);
  return { session: sessionUserToken?.token, local: localStorageTokenString?.token };
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const logout = () => {
    setToken('');
    window.history.pushState({}, '', '/login');
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Create a drag and drop video experience</h1>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login setToken={setToken} />} />
      </Routes>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
