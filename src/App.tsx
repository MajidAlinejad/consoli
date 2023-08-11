import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Consoli } from "../src/consoli";

export const consoliInstance = new Consoli({
  nodeEnv: import.meta.env.MODE,
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.verbose = consoliInstance;

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
