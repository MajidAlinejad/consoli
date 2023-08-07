import { Consoler } from "../dist/consoler";
// const c = new Consoler({
//   nodeEnv: "majid",
//   password: "74876f3a13ecf1977dabb3cee7f6a9cfc05d414b5702eaa308bb9d4ba62e136c",
//   defaultDeveloperMode: ["SUCCESS"],
//   onMessageCallback: () => {},
// });

// c.log("hi");

export const pp = new Consoler({
  nodeEnv: "majid",
  password: "74876f3a13ecf1977dabb3cee7f6a9cfc05d414b5702eaa308bb9d4ba62e136c",
  defaultDeveloperMode: ["SUCCESS"],
  onMessageCallback: () => {},
});

pp.log("majid");

window.verbose = pp.verbose;
