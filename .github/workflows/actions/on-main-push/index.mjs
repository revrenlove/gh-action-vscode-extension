// TODO: JE - Name this properly, or have the code coded accordingly

import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";
import fetch from "node-fetch";
import * as fs from "fs";
import print from "../common/util";
// import { GitHub } from "@actions/github/lib/utils";

// const print = (msg) => {
//     if (typeof msg === "object") {
//         msg = JSON.stringify(msg, null, 4);
//     }

//     console.log(msg);
// };

print(github.context.payload);

const ocktokit = github.getOctokit(core.getInput("github-token"));

const pullRequestsReturnObject =
    await ocktokit.rest.search.issuesAndPullRequests({
        q: `${github.context.sha} type:pr+repo:${github.context.repo.owner}/${github.context.repo.repo}`,
    });

// print(pullRequestsReturnObject);

const labels = pullRequestsReturnObject.data.items[0].labels;

print(labels.map((l) => l.name));
