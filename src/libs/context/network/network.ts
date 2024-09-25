import React from 'react';
import { NetworkState } from './network.model';

export const NetworkStateContext = React.createContext<NetworkState | null>(
  null,
);

export function useNetwork() {
  const context = React.useContext(NetworkStateContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkStateProvider');
  }
  return context;
}
