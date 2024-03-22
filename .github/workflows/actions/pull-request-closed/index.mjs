import * as core from "@actions/core";
import * as github from "@actions/github";

// const print = (msg) => {
//     if (typeof msg === "object") {
//         msg = JSON.stringify(msg, null, 4);
//     }

//     console.log(msg);
// };

const payload = github.context.payload;

print(payload);

// MAIN CODE GOES HERE
const execute = () => {
    if (!payload.pull_request.merged) {
        print("PR was closed without merging. Exiting.");

        return;
    }

    payload.pull_request.labels.forEach((label) => {
        print(label.name);
    });

    // []
    const labelNames = payload.pull_request.labels.map((label) => label.name);
};

// TODO: JE - Validate shit...

// Shit like this should go in a validate method...

// if (!payload.pull_request.merged) {
//     print("PR was closed without merging. Exiting.");

//     return;
// }

print("Starting execute method...");
execute();

// TODO: Bump version

// TODO: Tag release

// TODO: publish

const print = (msg) => {
    if (typeof msg === "object") {
        msg = JSON.stringify(msg, null, 4);
    }

    console.log(msg);
};
