/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CONSOLI: string;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  verbose: () => Promise<void>;
  consoli: Consoli<"myTag">;
  global: globalThis;
}

interface globalThis {
  consoli: Consoli<"myTag">;
}
