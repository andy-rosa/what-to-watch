import React, { ReactNode } from 'react';
import LogoHeader from './elements/logo-header/logo-header';
import UserBlockHeader from './elements/user-block-header/user-block-header';
import TitleHeader from './elements/title-header/title-header';
import BreadcrumbsHeader from './elements/breadcrumbs-header/breadcrumbs-header';

export interface HeaderProps {
  children?: ReactNode;
  isUserBlock?: boolean;
  isShowBreadcrumb?: boolean;
}

const Header = ({ children, isUserBlock = true, isShowBreadcrumb = false }: HeaderProps) => (
  <header className="page-header user-page__head">
    <LogoHeader />
    { children && <TitleHeader>{children}</TitleHeader> }
    { isShowBreadcrumb && <BreadcrumbsHeader /> }
    { isUserBlock && <UserBlockHeader /> }
  </header>
);

export default Header;
