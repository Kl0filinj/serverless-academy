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
  const uniqueUsers = [];
  for (let i = 0; i < filenames.length; i += 1) {
    const users = await readFile(dataPath + `/${filenames[i]}`, "utf8");
    uniqueUsers.push(...users.split("\n"));
  }
  const set = new Set(uniqueUsers);
  console.log(set.size);
}

async function existInAllFiles() {
  const filenames = fs.readdirSync(dataPath);
  const uniqueUsers = [];
  for (let i = 0; i < filenames.length; i += 1) {
    const users = await readFile(dataPath + `/${filenames[i]}`, "utf8");
    uniqueUsers.push(...users.split("\n"));
  }
  console.log(uniqueUsers.length);
}

async function existInAtleastTen() {
  const filenames = fs.readdirSync(dataPath);
  const uniqueUsers = [];
  for (let i = 0; i < 10; i += 1) {
    const users = await readFile(dataPath + `/${filenames[i]}`, "utf8");
    uniqueUsers.push(...users.split("\n"));
  }
  console.log(uniqueUsers.length);
}

getTimeRecord(existInAtleastTen);
