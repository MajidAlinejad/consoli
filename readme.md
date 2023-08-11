# Consoli js

![npm](https://img.shields.io/npm/dt/consolijs)
![GitHub issues](https://img.shields.io/github/issues/MajidAlinejad/consolijs)
![npm](https://img.shields.io/npm/v/consolijs)
[![GitHub contributors](https://img.shields.io/github/contributors/MajidAlinejad/consolijs.svg)](https://GitHub.com/MajidAlinejad/consolijs/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MajidAlinejad/consolijs/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/MajidAlinejad/consolijs/compare)
![GitHub Repo stars](https://img.shields.io/github/stars/MajidAlinejad/consolijs?style=social)

<br />
<div align="center">
  <img src="./images/consoli.jpg" alt="consoli" title="consoli"  width="700">
</div>
<br />
<br />

Consoli is a new simple and fancy logger that help you even in production mode.

## Features

- ☑ Typescript.
- ⭐️ tag property of logs.
- 👁 see logs even in production.
- ☄️ Colorize tags.

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's `dependencies`:

```
npm i consolijs
```

**🚨This package is standalone and have no any other dependacy.🚨**

## Usage

`consoliClient.ts`

```JSX
import { Consoli } from "consoli";

export const consoli = new Consoli({

  nodeEnv: import.meta.env.MODE,
  secretKey: import.meta.env.VITE_CONSOLI,
  defaultDeveloperMode: ["SUCCESS"],
  tags: [{ displayName: "myTag", color: "#9f00a1" }],

});

```

`main.ts`

```JSX
import { consoli } from "./consoliClient";

window.consoli = consoli; // for global usage
window.verbose = async () => {
  await consoli.verbose();
};

consoli.log("it a log consoli 💎💎");
consoli.warn("it a warn consoli 🔶🔶");
consoli.error("it a error consoli 🧯🧯");
consoli.success("it a success consoli 🔋🔋");
consoli.tags?.myTag("it a my tag consoli 🍇🍇");

```

`global.d.ts`

```JSX
interface Window {
  verbose: () => Promise<void>;
  consoli: Consoli<"myTag">;
}

```

## Usage in client

**Press F12 , go to consol tab and write:**

```JSX
verbose()
```

**And you see :**

<div style="display:flex">
  <img src="./images/panel.jpg" alt="consoli" title="consoli"  width="400">
  <img src="./images/panel2.jpg" alt="consoli" title="consoli"  width="400" height="120">
</div>

## Avalilible Params

| property               | type                      | description                                 |
| ---------------------- | ------------------------- | ------------------------------------------- |
| `onMessageCallback`    | `void`                    | callback after get the message.             |
| `defaultDeveloperMode` | `SUCCESS,INFO,WARN,ERROR` | default enabled options for developer mode. |
| `tags`                 | `Array of Tags`           | .                                           |

## LICENSE

MIT
