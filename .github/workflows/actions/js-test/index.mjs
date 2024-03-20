// import { ExitCode, getIDToken } from "@actions/core";
import * as core from "@actions/core";
import * as github from "@actions/github";

console.log("Starting");

console.log(github.context.payload);

console.log(JSON.stringify(event, null, 4));

console.log(core.ExitCode.Success.toLocaleString());

const idToken = await core.getIDToken();
console.log(idToken);

// const commit = event.commits[event.commits.length - 1];

// console.log(commit.message);
// console.log(commit.body);
