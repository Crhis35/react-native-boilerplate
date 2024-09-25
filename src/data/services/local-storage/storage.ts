import { MMKV } from 'react-native-mmkv';
import { CustomStorage } from 'data/models/storage';

const storage = new MMKV();

/**
 * Adapter class to interact with local storage, providing
 * methods to set and get values.
 */
export class LocalStorageAdapter implements CustomStorage {
  /**
   * Sets a value in local storage for a given key. If the value is falsy,
   * the key will be removed from storage.
   *
   * @param {string} key - The key for the storage entry.
   * @param {any} value - The value to store. If falsy, the key is deleted.
   * @returns {void}
   */
  set(key: string, value: any): void {
    if (value) {
      storage.set(key, value);
    } else {
      storage.delete(key);
    }
  }

  /**
   * Retrieves a value from local storage for a given key.
   *
   * @param {string} key - The key for the storage entry.
   * @returns {any} - The value associated with the key, or `null` if not found.
   */
  get(key: string): any {
    return storage.getString(key);
  }
}
