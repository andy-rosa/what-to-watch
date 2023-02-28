import React, {FC, ReactNode} from 'react';
import LogoHeader from "./elements/LogoHeader/LogoHeader";
import UserBlockHeader from "./elements/UserBlockHeader/UserBlockHeader";
import TitleHeader, {TitleHeaderProps} from "./elements/TitleHeader/TitleHeader";

export interface HeaderProps {
  children?: ReactNode
  isUserBlock?: boolean
}

const Header = ({ children, isUserBlock = true }: HeaderProps) => {
  return (
    <header className="page-header user-page__head">
      <LogoHeader />
      { children == null
        ? <TitleHeader>{children}</TitleHeader>
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
