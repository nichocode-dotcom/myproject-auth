import React, { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('rentverse_user');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      console.warn('Failed to read saved user', e);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('rentverse_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('rentverse_user');
    }
  }, [user]);

  if (user) {
    return <Dashboard setPage={setPage} setUser={setUser} user={user} />;
  }

  return page === 'login' ? (
    <Login setPage={setPage} setUser={setUser} />
  ) : (
    <Register setPage={setPage} setUser={setUser} />
  );
}

export default App;