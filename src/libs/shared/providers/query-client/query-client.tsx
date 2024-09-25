import React from 'react';

import NetInfo from '@react-native-community/netinfo';

import { QueryClient, onlineManager } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { NetworkStateContext } from 'libs/context/network';
import { localStorage } from 'data/services/local-storage';

export const queryClient = new QueryClient();

const persister = createAsyncStoragePersister({
  storage: localStorage,
  throttleTime: 3000,
});

export default function ReactQueryProvider({
  children,
}: React.PropsWithChildren) {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const status = !!state.isConnected;
      setIsOnline(status);
      onlineManager.setOnline(status);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PersistQueryClientProvider
      persistOptions={{ persister }}
      onSuccess={() =>
        queryClient
          .resumePausedMutations()
          .then(() => queryClient.invalidateQueries())
      }
      client={queryClient}
    >
      <NetworkStateContext.Provider
        value={{
          isOnline,
        }}
      >
        {children}
      </NetworkStateContext.Provider>
    </PersistQueryClientProvider>
  );
}
