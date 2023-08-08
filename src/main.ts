import { Consoli } from "../src/consoli";

export const consoliInstance = new Consoli({
  //@ts-ignore
  nodeEnv: import.meta.env.MODE,
  //@ts-ignore
  password: import.meta.env.VITE_CONSOLI,
  defaultDeveloperMode: ["SUCCESS"],
  onMessageCallback: () => {},
  tags: [{ displayName: "myTag", color: "#9f00a1" }],
});

consoliInstance.log("it a log consoli 💎💎");
consoliInstance.warn("it a warn consoli 🔶🔶");
consoliInstance.error("it a error consoli 🧯🧯");
consoliInstance.success("it a success consoli 🔋🔋");
consoliInstance.tags?.myTag("it a my tag consoli 🍇🍇");

//@ts-ignore
window.verbose = consoliInstance;
