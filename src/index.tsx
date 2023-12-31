#!/usr/bin/env node

import * as React from "react";

import * as Ink from "ink";

import { App } from "./App.js";
import { Store } from "./Store.js";
import { command } from "./command.js";

const argv = await command();
const ink = Ink.render(<App />);

Store.setState((state) => {
  state.ink = ink;
  state.argv = argv;
  state.cwd = process.cwd();
});
