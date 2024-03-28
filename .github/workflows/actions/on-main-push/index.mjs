import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";
import fetch from "node-fetch";
import * as fs from "fs";
// import { GitHub } from "@actions/github/lib/utils";

const print = (msg) => {
    if (typeof msg === "object") {
        msg = JSON.stringify(msg, null, 4);
    }

    console.log(msg);
};

print(github.context.payload);
print(github.context.sha);

if (github.context.payload.head_commit.id !== github.context.sha) {
    console.warn("The SHA shit don't match, y'all!");
}

const ocktokit = github.getOctokit(core.getInput("github-token"));

const pullRequestsReturnObject =
    await ocktokit.rest.search.issuesAndPullRequests({
        q: `type:pr+repo:${github.context.repo.owner}/${github.context.repo.repo}`,
    });

print(pullRequestsReturnObject);
