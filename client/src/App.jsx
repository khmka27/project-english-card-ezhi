import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
import ProtectedRouter from './components/HOCs/ProtectedRouter';
import useUser from './components/hooks/useUser';
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
          element: (
            <ProtectedRouter
              isAllowed={user.status === 'logged'}
              redirectTo="/"
            >
              <ProfilePage user={user} />
            </ProtectedRouter>
          ),
        },
        {
          element: (
            <ProtectedRouter
              isAllowed={user.status !== 'logged'}
              redirectTo="/themes"
            />
          ),
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
          element: (
            <ProtectedRouter
            isAllowed={user.status === 'logged'} redirectTo={'/'}
            >
              <ThemesPage />,
            </ProtectedRouter>
          ),
          path: '/themes',
        },
        {
          path: '/themes/:id',
          element: <CardsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
