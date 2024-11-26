import './App.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/HomePage/HomePage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/me'
          element={<ProfilePage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
