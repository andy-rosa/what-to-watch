import {Provider} from 'react-redux';
import {store} from '../../../store';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AppRouteKey, RoutePath} from '../../../components/Routers/AppRouter/config/routerConfig';
import React, {ReactNode} from 'react';

class MockProviderWithComponent {
  protected _path = RoutePath.main;
  protected store = store;
  protected component;

  constructor(component: ReactNode) {
    this.component = component;
  }

  set path(path: AppRouteKey | string) {
    this._path = path;
  }

  get path() {
    return this._path;
  }

  public renderTest() {
    return (
      <Provider store={this.store}>
        <MemoryRouter initialEntries={[this.path]} >
          <Routes>
            <Route path={this.path} element={this.component} />
          </Routes>
        </MemoryRouter>
      </Provider >
    );
  }
}

export default MockProviderWithComponent;
