// import { ExitCode, getIDToken } from "@actions/core";
import * as core from "@actions/core";
import * as github from "@actions/github";

console.log("Starting");

console.log(JSON.stringify(github.context.payload));

console.log(core.ExitCode.Success.toLocaleString());

const idToken = await core.getIDToken();
console.log(idToken);
