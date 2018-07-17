"use strict";
// this is a basic TypeScript program
// to ensure that the type defs in index.d.ts
// allow the TS compiler to successfully import
// and interact with the JS client
exports.__esModule = true;
var __1 = require("..");
var client = new __1.Client('API_KEYYY');
client.notify(new Error('flop'));
client.setUser('123', 'B. Nag', 'bugs.nag@bugsnag.com');
