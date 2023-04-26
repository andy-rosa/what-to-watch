import React, {PropsWithChildren} from 'react';
import cls from './TextError.module.css';

const TextError = ({children}: PropsWithChildren) => (
  <div className={cls.error}>
    {children}
  </div>
);

export default TextError;
