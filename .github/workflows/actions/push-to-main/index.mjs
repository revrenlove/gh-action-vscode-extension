// import * as core from "@actions/core";
import * as github from "@actions/github";

var payload = github.context.payload;

var payloadJson = JSON.stringify(payload, null, 4);

console.log(payloadJson);
