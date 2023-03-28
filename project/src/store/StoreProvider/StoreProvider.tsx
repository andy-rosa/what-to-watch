import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {StateSchema} from './config/StateSchema';
import {createReduxStore} from './config/store';

const StoreProvider = ({children, initialState}: PropsWithChildren<{initialState?: StateSchema}>) => {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
export default StoreProvider;
