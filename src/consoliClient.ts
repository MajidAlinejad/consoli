import { Consoli } from "../src/consoli";

export const consoli = new Consoli({
  nodeEnv: import.meta.env.MODE,
  secretKey: import.meta.env.VITE_CONSOLI,
  defaultDeveloperMode: ["SUCCESS"],
  onMessageCallback: () => {},
  tags: [{ displayName: "myTag", color: "#9f00a1" }],
});
