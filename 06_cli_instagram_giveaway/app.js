const { readFile, writeFile } = require("node:fs/promises");
const fs = require("fs");

const dataPath = __dirname + "/data";

// high order fnc to get time record
async function getTimeRecord(fnc) {
  const start = new Date().getTime();
  await fnc();
  const end = new Date().getTime();
  console.log(`${end - start}ms`);
}

async function uniqueValues() {
  const filenames = fs.readdirSync(dataPath);

  const uniqueUsers = await filenames.reduce(async (acc, item) => {
    let accum = await acc;
    const users = await readFile(dataPath + `/${item}`, "utf8");
    accum.push(...users.split("\n"));
    return accum;
  }, Promise.resolve([]));

  const set = new Set(uniqueUsers);
  console.log(set.size);
}

async function existInAllFiles() {
  const filenames = fs.readdirSync(dataPath);
  const userNamesLength = await filenames.reduce(async (acc, item) => {
    let accum = await acc;
    const users = await readFile(dataPath + `/${item}`, "utf8");
    return (accum += users.split("\n").length);
  }, Promise.resolve(0));
  console.log(userNamesLength);
}

async function existInAtleastTen() {
  const filenames = fs.readdirSync(dataPath);
  const userNamesLength = await filenames.reduce(async (acc, item, index) => {
    if (index < 10) {
      let accum = await acc;
      const users = await readFile(dataPath + `/${item}`, "utf8");
      return (accum += users.split("\n").length);
    }
    return acc;
  }, Promise.resolve(0));
  console.log(userNamesLength);
}

getTimeRecord(existInAtleastTen);
