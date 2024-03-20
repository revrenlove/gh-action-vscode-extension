const core = require("@actions/core");
const github = require("@actions/github");

const tagNameRgx = /v\d+\.\d+\.\d+/;

const event = require(process.env.GITHUB_EVENT_PATH);

if (!tagNameRgx.test(event.release.tag_name)) {
    throw new Error("Tag name must match format v1.2.3");
}

if (event.release.name !== event.release.tag_name) {
    throw new Error("Tag name and release name MUST match.");
}

// const x = github.context.
