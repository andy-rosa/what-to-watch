import {RouterProvider} from 'react-router-dom';
import {router} from '../Routers/AppRouter/AppRouter';
import {Suspense} from 'react';
import Loader from '../Loader/Loader';
import {Films} from '../../mocks/films';
import {Reviews} from '../../mocks/reviews';
import StoreProvider from '../../store/StoreProvider/StoreProvider';

export type AppData = {
  films: Films[];
  reviews: Reviews[];
}

function App({films, reviews}: AppData): JSX.Element {
  return (
    <StoreProvider>
      <Suspense fallback={<Loader />} >
        <RouterProvider router={router} />
      </Suspense>
    </StoreProvider>
  );
}

export default App;
