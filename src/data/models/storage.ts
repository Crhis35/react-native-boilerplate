export interface CustomStorage {
  set(key: string, value: any): void;
  get(key: string): any;
}
