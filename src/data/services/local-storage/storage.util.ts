import { makeLocalStorageAdapter } from 'data/services/local-storage';

export const localStorage = {
  setItem: (key: string, value: any): Promise<boolean> => {
    makeLocalStorageAdapter().set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<any> => {
    return Promise.resolve(makeLocalStorageAdapter().get(key));
  },
  removeItem: (key: string): Promise<void> => {
    makeLocalStorageAdapter().set(key, undefined);
    return Promise.resolve();
  },
};
