export type Serializer<T> = (object: T | undefined) => string;
export type Parser<T> = (val: string) => T | undefined;

export type Options<T> = Partial<{
  serializer: Serializer<T>;
  parser: Parser<T>;
  logger: (error: any) => void;
  syncData: boolean;
}>;

export interface StorageProps<T> {
  key: string;
  initialValue: T;
  options?: Options<T>;
}
