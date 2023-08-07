/// <reference types="vite/client" />
declare namespace global {
  interface ImportMetaEnv {
    MODE: string;
    readonly VITE_CONSOLI: string;
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
