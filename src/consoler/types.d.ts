interface IConsoler<T = unknown> {
  log: Ilog;
  warn: Ilog;
  error: Ilog;
  success: Ilog;
  tags?: ITagFunctions<T>;
}

type IVerboseMode<T> = "ERROR" | "WARN" | "INFO" | "SUCCESS" | T;

type HEX = `#${string}`;
type ICallback = (
  type: IVerboseMode<T>,
  message: unknown,
  ...optionalParams: unknown[]
) => void;
type Ilog = (message?: unknown, ...optionalParams: unknown[]) => void;
interface IVerboseTag<T> {
  displayName: T;
  color: HEX;
}

type ITagFunctions<T> = Record<T, Ilog>;
interface IConsolerParams<T> {
  /** use sha256() function in ./helper file. and mek sure you initial it with env variables */
  password: string;
  nodeEnv: "development" | "production" | string;
  defaultDeveloperMode: IVerboseMode<T>[];
  tags?: IVerboseTag<T>[];
  onMessageCallback?: ICallback;
}

interface Window {
  verbose: typeof helpObj;
}
