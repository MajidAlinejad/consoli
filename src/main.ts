import { Consoler } from "../dist/consoler";

export const pp = new Consoler({
  nodeEnv: "majid",
  password: "9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0",
  defaultDeveloperMode: ["SUCCESS"],
  onMessageCallback: () => {},
});

pp.log("consoler");
//@ts-ignore
window.verbose = pp;
