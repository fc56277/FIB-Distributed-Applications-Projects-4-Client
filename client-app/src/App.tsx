import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404';
import NavBar from './components/NavBar';
import { CLIENT_ENDPOINTS } from './config/constants';

function App() {
  const endpoints = CLIENT_ENDPOINTS;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar endpoints={endpoints} />
        <Routes>
          {endpoints.map((endpoint) => (
            <Route
              key={endpoint.route}
              path={endpoint.route}
              element={endpoint.component()}
            />
          ))}
          <Route path="/" element={<Navigate replace to={endpoints[0].route} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
