import React from 'react';
import cls from './Loader.module.css';

const Loader = () => (
  <div className={`user-page ${cls.wrapper}`}>
    <div className={cls.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
