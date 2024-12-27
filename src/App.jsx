import './App.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/HomePage/HomePage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import PostEdit from './component/post/PostEdit';
// import PostEdit from './component/post/PostEdit';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            element={<Home />}
            path='/'
            exact
          />
          <Route
            path='/me'
            element={<ProfilePage />}
          />
          <Route
            path='/edit'
            element={<PostEdit />}
          />
        </Route>

        <Route
          path='/login'
          element={<LoginPage />}
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
