import React, {FC, ReactNode} from 'react';
import LogoHeader from "./elements/LogoHeader/LogoHeader";
import UserBlockHeader from "./elements/UserBlockHeader/UserBlockHeader";
import TitleHeader, {TitleHeaderProps} from "./elements/TitleHeader/TitleHeader";
import BreadcrumbsHeader from "./elements/BreadcrumbsHeader/BreadcrumbsHeader";

export interface HeaderProps {
  children?: ReactNode
  isUserBlock?: boolean
  isShowBreadcrumb?: boolean
}

const Header = ({ children, isUserBlock = true, isShowBreadcrumb = false }: HeaderProps) => {
  return (
    <header className="page-header user-page__head">
      <LogoHeader />
      { children
        ? <TitleHeader>{children}</TitleHeader>
        : <></>
      }

      {
        isShowBreadcrumb
          ? <BreadcrumbsHeader />
          : <></>
      }

      { isUserBlock
        ? <UserBlockHeader />
        : <></>
      }
    </header>
  );
};

export default Header;
