import React from 'react';
import cls from './Loader.module.css';

const Loader = () => (
  <div className={`user-page ${cls.wrapper}`} data-testid="loader-wrapper">
    <div className={cls.ldsRing} data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
