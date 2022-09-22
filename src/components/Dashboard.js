import React, { useState } from 'react';
import VideoContainer from './Video/VideoContainer';

const clearToken = () => {
  localStorage.removeItem('token');
  sessionStorage.clear('token');
};

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const logout = () => {
    clearToken();
    window.history.pushState({}, '', '/login');
    window.location.reload();
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h2>Dashboard</h2>
        <button type="button" onClick={logout} className="btn btn-outline-secondary">Logout</button>
      </div>

      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
        Create Interactive Video
      </button>
      {open && <VideoContainer />}
    </div>
  );
}
