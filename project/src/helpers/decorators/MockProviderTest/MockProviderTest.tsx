import {Provider} from 'react-redux';
import {store} from '../../../store';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AppRouteKey, RoutePath} from '../../../components/Routers/AppRouter/config/routerConfig';
import React, {ReactNode} from 'react';

interface MockProviderTestProps {
  component: ReactNode;
  path?: AppRouteKey | string ;
}

const MockProviderTest = ({component, path = RoutePath.main}: MockProviderTestProps) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[path]} >
      <Routes>
        <Route path={path} element={component} />
      </Routes>
    </MemoryRouter>
  </Provider >
);

export default MockProviderTest;
