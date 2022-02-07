const core = require("@actions/core");
const github = require("@actions/github");
async () => {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput("who-to-greet");

    let content = await fs.readFile(nameToGreet, "utf8");

    console.log(content);

    // Get the JSON webhook payload for the event that triggered the workflow
  } catch (error) {
    core.setFailed(error.message);
  }
};
