import React, {ReactNode} from 'react';

export interface TitleHeaderProps {
  children?: ReactNode;
}

const TitleHeader = ({children}: TitleHeaderProps ) => (
  <h1 className="page-title user-page__title">
    {children}
  </h1>
);

export default TitleHeader;
