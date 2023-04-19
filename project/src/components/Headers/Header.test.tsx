import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';
import MockProviderTest from '../../helpers/decorators/MockProviderTest/MockProviderTest';


describe('Header', () => {
  test('renders with LogoHeader by default', () => {
    render(
      <MockProviderTest component={<Header />} />
    );

    const logoHeader = screen.getByTestId('logo-header');
    expect(logoHeader).toBeInTheDocument();
  });

  test('renders with UserBlockHeader when isUserBlock is true', () => {
    render(
      <MockProviderTest component={<Header isUserBlock/>} />
    );

    const userBlockHeader = screen.getByTestId('user-block-header');
    expect(userBlockHeader).toBeInTheDocument();
  });

  test('renders with BreadcrumbsHeader when isShowBreadcrumb is true', () => {
    render(
      <MockProviderTest path={RoutePath.film} component={<Header isShowBreadcrumb />} />
    );

    const breadcrumbsHeader = screen.getByTestId('breadcrumbs-header');
    expect(breadcrumbsHeader).toBeInTheDocument();
  });

  test('renders children when passed', () => {
    render(
      <MockProviderTest path={RoutePath.film} component={<Header>Children test</Header>} />
    );

    const children = screen.getByText('Children test');
    expect(children).toBeInTheDocument();
  });
});
