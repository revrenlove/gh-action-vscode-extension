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

const execute = () => {
    print("Starting execute method...");

    if (!payload.pull_request.merged) {
        print("PR was closed without merging. Exiting.");

        return;
    }

    payload.pull_request.labels.forEach((label) => {
        print(label.name);
    });
};

execute();
