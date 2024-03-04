const core = require("@actions/core");
const github = require("@actions/github");

const event = require(process.env.GITHUB_EVENT_PATH);

console.log(JSON.stringify(event, null, 4));

// const commit = event.commits[event.commits.length - 1];

// console.log(commit.message);
// console.log(commit.body);
