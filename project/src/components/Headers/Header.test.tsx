import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';
import MockProviderWithComponent from '../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';


describe('Header', () => {
  test('renders with LogoHeader by default', () => {
    const header = new MockProviderWithComponent(<Header />);
    render(header.renderTest());

    const logoHeader = screen.getByTestId('logo-header');
    expect(logoHeader).toBeInTheDocument();
  });

  test('renders with UserBlockHeader when isUserBlock is true', () => {
    const header = new MockProviderWithComponent(<Header isUserBlock/>);
    render(header.renderTest());

    const userBlockHeader = screen.getByTestId('user-block-header');
    expect(userBlockHeader).toBeInTheDocument();
  });

  test('renders with BreadcrumbsHeader when isShowBreadcrumb is true', () => {
    const header = new MockProviderWithComponent(<Header isShowBreadcrumb />);
    header.path = RoutePath.film;
    render(header.renderTest());


    const breadcrumbsHeader = screen.getByTestId('breadcrumbs-header');
    expect(breadcrumbsHeader).toBeInTheDocument();
  });

  test('renders children when passed', () => {
    const header = new MockProviderWithComponent(<Header>Children test</Header>);
    header.path = RoutePath.film;
    render(header.renderTest());

    const children = screen.getByText('Children test');
    expect(children).toBeInTheDocument();
  });
});
