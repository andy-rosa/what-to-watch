import React, { ReactNode } from 'react';
import LogoHeader from './elements/LogoHeader/LogoHeader';
import UserBlockHeader from './elements/UserBlockHeader/UserBlockHeader';
import TitleHeader from './elements/TitleHeader/TitleHeader';
import BreadcrumbsHeader from './elements/BreadcrumbsHeader/BreadcrumbsHeader';

export interface HeaderProps {
  children?: ReactNode;
  isUserBlock?: boolean;
  isShowBreadcrumb?: boolean;
}

const Header = ({ children, isUserBlock = true, isShowBreadcrumb = false }: HeaderProps) => (
  <header className="page-header user-page__head">
    <LogoHeader />
    { children
      ? <TitleHeader>{children}</TitleHeader>
      : null }

    { isShowBreadcrumb && <BreadcrumbsHeader /> }
    { isUserBlock && <UserBlockHeader /> }
  </header>
);

export default Header;
