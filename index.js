const core = require("@actions/core");
const fs = require('fs');

async function main () {
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput("who-to-greet");

    console.log(nameToGreet)

    let rawdata = fs.readFileSync(nameToGreet);
    let json = JSON.parse(rawdata);
    console.log(json.slots);
    // Get the JSON webhook payload for the event that triggered the workflow
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();