import {RouterProvider} from 'react-router-dom';
import {router} from '../Routers/AppRouter/AppRouter';
import {Suspense} from 'react';
import Loader from '../Loader/Loader';

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />} >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
