import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import SignUpPage from '../src/components/pages/SignUpPage';
import SignInPage from '../src/components/pages/SignInPage';
import ProtectedRouter from './components/HOCs/ProtectedRouter';
import useUser from '../src/components/hooks/useUser';
import ThemesPage from './components/pages/ThemesPage';
import CardsPage from './components/pages/CardsPage';
import ProfilePage from './components/pages/ProfilePage';
function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <MainPage user={user} />,
        },
        {
          path: '/profile',
          element: <ProfilePage user={user} />,
        },

        {
          element: <ProtectedRouter isAllowed={user.status !== 'logged'} />,
          children: [
            {
              path: '/auth/signup',
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/auth/signin',
              element: <SignInPage signInHandler={signInHandler} />,
            },
          ],
        },
        {
          path: '/themes',
          element: <ThemesPage/>
        },
        {
          path: '/themes/:id',
          element: <CardsPage/>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
