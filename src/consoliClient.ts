import { Consoli } from "../src/consoli";

// eslint-disable-next-line react-refresh/only-export-components
export const consoli = new Consoli({
  nodeEnv: import.meta.env.MODE,
  secretKey: import.meta.env.VITE_CONSOLI,
  defaultDeveloperMode: ["SUCCESS"],
  onMessageCallback: () => {},
  tags: [{ displayName: "myTag", color: "#9f00a1" }],
});
