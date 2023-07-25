interface IConsoler<T = unknown> {
  log: Ilog;
  warn: Ilog;
  error: Ilog;
  success: Ilog;
  tags?: ITagFunctions<T>;
}

type IVerboseMode<T> = "ERROR" | "WARN" | "INFO" | "SUCCESS" | T;

type HEX = `#${string}`;

type Ilog = (message?: unknown, ...optionalParams: unknown[]) => void;
interface IVerboseTag<T> {
  displayName: T;
  color: HEX;
}

type ITagFunctions<T> = Record<T, Ilog>;
interface IConsolerParams<T> {
  password: string;
  defaultDeveloperMode: IVerboseMode<T>[];
  tags?: IVerboseTag<T>[];
}

interface Window {
  verbose: typeof helpObj;
}
