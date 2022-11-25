import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404';
import NavBar from './components/NavBar';
import { GENERIC_CLIENT_ENDPOINTS, LOGIN_ENDPOINT, REGISTER_ENDPOINT } from './config/constants';

function App() {
  const endpoints = GENERIC_CLIENT_ENDPOINTS;
  const login = LOGIN_ENDPOINT;
  const register = REGISTER_ENDPOINT;

  const [token, setToken] = useState('');
  const updateToken = (token: string) => {
    console.log(`Updating token-header with value: ${token}`);
    setToken(token);
  }

  // Debug - remove later
  useEffect(() => {
    console.log(`Token has changed - current value: ${token}`);
  }, [token]);

  const isLoggedIn = token.length > 0;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar endpoints={isLoggedIn ? endpoints : [login, register]} />
        <Routes>
          <Route
            key={login.route}
            path={login.route}
            element={login.component({ updateStateCallback: (token: string) => updateToken(token) })} // Pass updateToken-function down to the component as a callback function
          />
          <Route 
            key={register.route}
            path={register.route}
            element={register.component()}
          />
          {endpoints.map((endpoint) => (
            <Route
              key={endpoint.route}
              path={endpoint.route}
              element={endpoint.component(token)}
            />
          ))}
          <Route path="/" element={<Navigate replace to={login.route} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
