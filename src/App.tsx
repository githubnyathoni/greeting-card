import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import routes from '@/routes';
import { Suspense } from 'react';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route element={<DefaultLayout />}>
              {routes.map(
                ({ path, component: Component, allow }) =>
                  allow && (
                    <Route
                      index={path === '/'}
                      key={path}
                      path={path}
                      element={
                        // Fallback need to fill with loader component
                        <Suspense fallback={<> </>}>
                          <Component />
                        </Suspense>
                      }
                    />
                  )
              )}
            </Route>
          </>
        )
      )}
    />
  );
}

export default App;
