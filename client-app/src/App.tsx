import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404';
import NavBar from './components/NavBar';
import { DEFAULT_COMPONENTS, DEFAULT_ROUTES } from './config/constants';

const elements = DEFAULT_COMPONENTS;
const pages = DEFAULT_ROUTES;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {pages.map((page, index) => (
            <Route path={page} element={elements[index]()} />
          ))}
          <Route path="/" element={<Navigate replace to={pages[0]}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
