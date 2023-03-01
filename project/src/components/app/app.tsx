import MainPage from '../../pages/MainPage/MainPage';
import {RouterProvider} from 'react-router-dom';
import {router} from '../Routers/AppRouter/AppRouter';

function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
