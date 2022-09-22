import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';
import Preview from './components/Preview/Preview';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const sessionTokenString = sessionStorage.getItem('token');
  const localStorageTokenString = localStorage.getItem('token');
  const sessionUserToken = JSON.parse(sessionTokenString);
  const localStorageToken = JSON.parse(localStorageTokenString);
  return { session: sessionUserToken?.token, local: localStorageToken?.token };
}

function App() {
  const token = getToken();

  if (!token.session && !token.local) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      {token ? (
        <>
          <Routes>
            <Route path="/" element={<Dashboard setToken={setToken} />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </>
      ) : <Login setToken={setToken} /> }
    </div>
  );
}

export default App;
