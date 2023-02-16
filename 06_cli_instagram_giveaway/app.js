const { readFile, writeFile } = require("node:fs/promises");
const fs = require("fs");
// Function to get current filenames
// in directory
const dataPath = __dirname + "/data";

async function getUniqueCount() {
  const filenames = fs.readdirSync(dataPath);
  const uniqueUsers = [];
  for (let i = 0; i < filenames.length; i += 1) {
    console.log(i);
    const users = await readFile(dataPath + `/${filenames[i]}`, "utf8");
    uniqueUsers.push(...users.split("\n"));
  }
  const set = new Set(uniqueUsers);
  console.log(set.size);
}
getUniqueCount();
