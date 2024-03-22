import * as core from "@actions/core";
import * as github from "@actions/github";

const print = (msg) => {
    if (typeof msg === "object") {
        msg = JSON.stringify(msg, null, 4);
    }

    console.log(msg);
};

const payload = github.context.payload;

print(payload);

// const octokit = github.getOctokit();

// const x = octokit.rest.repos.getCommit.
