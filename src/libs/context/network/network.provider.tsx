import React, { PropsWithChildren } from 'react';

import { NetworkStateContext } from './network';

export default function NetworkStateProvider(props: PropsWithChildren) {
  const [isOnline] = React.useState(false);
  return (
    <NetworkStateContext.Provider
      value={{
        isOnline,
      }}
    >
      {props.children}
    </NetworkStateContext.Provider>
  );
}
