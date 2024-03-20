// import { ExitCode, getIDToken } from "@actions/core";
import * as core from "@actions/core";
import github from "@actions/github";
import * as event from process.env.GITHUB_EVENT_PATH;

console.log("Starting");

// const event = require(process.env.GITHUB_EVENT_PATH);

console.log(JSON.stringify(event, null, 4));

console.log(core.ExitCode.Success.toLocaleString());

const x = await core.getIDToken();
console.log(x);

// const commit = event.commits[event.commits.length - 1];

// console.log(commit.message);
// console.log(commit.body);
