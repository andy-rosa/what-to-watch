import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import {store} from '../../store';
import { Provider } from 'react-redux';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';


describe('Header', () => {
  test('renders with LogoHeader by default', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[RoutePath.main]} >
          <Routes>
            <Route path={RoutePath.main} element={<Header />} />
          </Routes>
        </MemoryRouter>
      </Provider >
    );


    const logoHeader = screen.getByTestId('logo-header');
    expect(logoHeader).toBeInTheDocument();
  });

  test('renders with UserBlockHeader when isUserBlock is true', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[RoutePath.main]} >
          <Routes>
            <Route path={RoutePath.main} element={<Header isUserBlock/>} />
          </Routes>
        </MemoryRouter>
      </Provider >
    );

    const userBlockHeader = screen.getByTestId('user-block-header');
    expect(userBlockHeader).toBeInTheDocument();
  });

  test('renders with BreadcrumbsHeader when isShowBreadcrumb is true', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[RoutePath.film]} >
          <Routes>
            <Route path={RoutePath.film} element={<Header isShowBreadcrumb/>} />
          </Routes>
        </MemoryRouter>
      </Provider >
    );

    const breadcrumbsHeader = screen.getByTestId('breadcrumbs-header');
    expect(breadcrumbsHeader).toBeInTheDocument();
  });

  test('renders children when passed', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[RoutePath.film]} >
          <Routes>
            <Route path={RoutePath.film} element={<Header>Children test</Header> } />
          </Routes>
        </MemoryRouter>
      </Provider >
    );

    const children = screen.getByText('Children test');
    expect(children).toBeInTheDocument();
  });
});
