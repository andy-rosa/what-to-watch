import {RouterProvider} from 'react-router-dom';
import {router} from '../routers/app-router/app-router';
import {Suspense} from 'react';
import Loader from '../loader/loader';

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />} >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
