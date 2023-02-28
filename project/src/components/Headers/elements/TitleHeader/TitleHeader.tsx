import React, {ReactNode} from 'react';

export interface TitleHeaderProps {
  children?: ReactNode
}

const TitleHeader = ({children}: TitleHeaderProps ) => {
  switch (children) {
    case true:
      return (
        <h1 className="page-title user-page__title">
          {children}
        </h1>
      );
    default:
      return <></>
  }
};

export default TitleHeader;
