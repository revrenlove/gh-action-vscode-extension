import * as core from "@actions/core";
import * as github from "@actions/github";
import fetch from "node-fetch";

const print = (msg) => {
    if (typeof msg === "object") {
        msg = JSON.stringify(msg, null, 4);
    }

    console.log(msg);
};

print("pull-request-closed workflow starting...");

const payload = github.context.payload;

// print(payload);

class Version {
    constructor(versionString) {
        const parts = versionString.split(".");

        this.major = parts[0];
        this.minor = parts[1];
        this.patch = parts[2];

        this.toString = () => `${this.major}.${this.minor}.${this.patch}`;
    }
}

// Labels:
//  ===========
//  major
//  minor
//  patch
//  ===========
//  release
//  prerelease
//  ===========
//  publish

const bumpMajor = async () => {
    print("Bumping major...");

    // Get tha package.json file
    const rawPackageJson = await fetch(
        "https://raw.githubusercontent.com/revrenlove/gh-action-vscode-extension/main/package.json"
    );

    console.log(rawPackageJson);

    // Get current version from package json

    // mod package.json

    // commit directly to main
};

const bumpVersion = (version) => {
    // mod package.json
    // commit directly to main
};

// MAIN CODE GOES HERE
(() => {
    // if (!payload.pull_request.merged) {
    //     print("PR was closed without merging. Exiting.");
    //     return;
    // }
    // payload.pull_request.labels.forEach((label) => {
    //     print(label.name);
    // });
    // // []
    const labelNames = payload.pull_request.labels.map((label) => label.name);
    // TODO: JE - Validate shit...
    // TODO: Bump version
    // TODO: Tag release
    // TODO: publish

    if (labelNames.includes("major")) {
        bumpMajor();
    }
})();
