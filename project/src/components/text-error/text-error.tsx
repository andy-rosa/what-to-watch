import {PropsWithChildren} from 'react';
import cls from './text-error.module.css';

const TextError = ({children}: PropsWithChildren) => (
  <div className={cls.error}>
    {children}
  </div>
);

export default TextError;
