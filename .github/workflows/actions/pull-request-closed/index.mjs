// TODO: JE - Come up with a flow chart or something to map out how the shit should actually work...

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

print(payload);

// class Version {
//     constructor(versionString) {
//         const parts = versionString.split(".");

//         this.major = parts[0];
//         this.minor = parts[1];
//         this.patch = parts[2];

//         this.toString = () => `${this.major}.${this.minor}.${this.patch}`;
//     }
// }

// // Labels:
// //  ===========
// //  major
// //  minor
// //  patch
// //  ===========
// //  release
// //  prerelease
// //  ===========
// //  publish

// async function bumpMajor() {
//     // const packageJson = await getPackageJson();
//     // const version = new Version(packageJson.version);
//     // print(`Version before anything: ${version}`);
//     // version.major++;
//     // packageJson.version = version.toString();
//     // await updatePackageJson(packageJson);

//     await updateVersionAndCommitPackageJsonChanges();
// }

// // TODO: Separate logic???
// async function updateVersionAndCommitPackageJsonChanges(labelNames) {
//     if (!labelNames) return;

//     const packageJson = await getPackageJson();

//     const version = new Version(packageJson.version);

//     print(`Version before anything: ${version}`);

//     if (labelNames.includes("major")) {
//         version.major++;
//         version.minor = 0;
//         version.patch = 0;
//     } else if (labelNames.includes("minor")) {
//         version.minor++;
//         version.patch = 0;
//     } else if (labelNames.includes("patch")) {
//         version.patch++;
//     }

//     packageJson.version = version.toString();

//     await updatePackageJson(packageJson);
// }

// const updatePackageJson = async (packageJson) => {
//     const packageJsonAsString = JSON.stringify(packageJson, null, 2);

//     fs.writeFile("./package.json", packageJsonAsString, async () => {
//         print("Fuck callbacks...");

//         await exec.exec(
//             "git config --global user.email",
//             "elrod.dev@gmail.com"
//         );
//         await exec.exec('git config --global user.name "Jim\'s Robot"');

//         await exec.exec("git add -A");
//         await exec.exec("git commit -m", `"Updating version to ${version}"`);
//         await exec.exec("git push -f");
//     });
// };

// const getPackageJson = async () => {
//     const response = await fetch(
//         "https://raw.githubusercontent.com/revrenlove/gh-action-vscode-extension/main/package.json"
//     );

//     const packageJson = await response.json();

//     return packageJson;
// };

// // MAIN CODE GOES HERE
// (() => {
//     const labelNames = payload.pull_request.labels.map((label) => label.name);
//     // TODO: JE - Validate shit...
//     // TODO: Bump version
//     // TODO: Tag release
//     // TODO: publish

//     let newVersion = 0;

//     if (labelNames.includes("major")) {
//         bumpMajor();
//     }
// })();
