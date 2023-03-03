import React, {PropsWithChildren} from 'react';

const TitleHeader = ({children}: PropsWithChildren ) => (
  <h1 className="page-title user-page__title">
    {children}
  </h1>
);

export default TitleHeader;
