import React, { type PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'libs/store';

export default function ReduxProvider(props: PropsWithChildren<{}>) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {props.children}
      </PersistGate>
    </Provider>
  );
}
