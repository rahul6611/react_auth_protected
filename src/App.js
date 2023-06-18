import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Other from './pages/Other/Other';
import Login from './pages/Login/Login';
import ProtectedRoutes from './Routes/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/' element={<Home />} />
            <Route path='/other' element={<Other />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
