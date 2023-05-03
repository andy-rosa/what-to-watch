import {Provider} from 'react-redux';
import {store} from '../../store';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AppRouteKey, RoutePath} from '../../components/routers/app-router/config/router-config';
import {ReactNode} from 'react';

class MockProviderWithComponent {
  protected _path = RoutePath.main;
  protected _store = store;
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

  get store() {
    return this._store;
  }

  set store(newStore) {
    this._store = newStore;
  }

  public renderTest() {
    return (
      <Provider store={this._store}>
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
