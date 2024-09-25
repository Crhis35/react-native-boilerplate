import { LocalStorageAdapter } from './storage';

/**
 * Factory function to create a new instance of LocalStorageAdapter.
 *
 * @returns {LocalStorageAdapter} - A new instance of LocalStorageAdapter.
 */
export const makeLocalStorageAdapter = (): LocalStorageAdapter => {
  return new LocalStorageAdapter();
};
