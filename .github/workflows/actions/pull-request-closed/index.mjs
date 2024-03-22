import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";
import fetch from "node-fetch";
import * as fs from "fs";

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
    const packageJson = await getPackageJson();

    const version = new Version(packageJson.version);

    print(`Version before anything: ${version}`);

    version.major++;

    packageJson.version = version.toString();

    const packageJsonAsString = JSON.stringify(packageJson, null, 2);

    fs.writeFile("./package2.json", packageJsonAsString, async () => {
        print("Fuck callbacks...");

        await exec.exec("ls");
    });

    // const escapedPackageJsonString = packageJsonAsString.replace('"', '\\"');

    // print("attempting to write to the package.json file...");
    // await exec.exec("echo", escapedPackageJsonString, ">", "package.json");

    // print("outputting package.json now...");
    // await exec.exec("cat package.json");

    // await exec.exec("git status");

    // mod package.json

    // commit directly to main
};

const bumpVersion = (version) => {
    // mod package.json
    // commit directly to main
};

const getPackageJson = async () => {
    const response = await fetch(
        "https://raw.githubusercontent.com/revrenlove/gh-action-vscode-extension/main/package.json"
    );

    const packageJson = await response.json();

    return packageJson;
};

// const getCurrentVersion = async () => {
//     const response = await fetch(
//         "https://raw.githubusercontent.com/revrenlove/gh-action-vscode-extension/main/package.json"
//     );

//     const packageJson = await response.json();

//     const version = new Version(packageJson.version);

//     return version;
// };

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
