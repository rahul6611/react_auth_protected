import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Other from './pages/Other/Other';
import Login from './pages/Login/Login';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route exact path='/' element={<Home />} />
            <Route path='/other' element={<Other />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
